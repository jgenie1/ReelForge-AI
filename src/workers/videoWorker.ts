import { Worker, Job } from "bullmq";
import { prisma } from "../lib/db";
import { connectionOptions } from "../lib/queue";
import { uploadToR2 } from "../lib/storage";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import os from "os";

export interface SubtitleWord {
  word: string;
  start: number;
  end: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function createJobProgress(videoId: string, status: any, progress: number, error: string | null = null) {
  const existingJob = await prisma.videoJob.findFirst({
    where: { videoId }
  });

  if (existingJob) {
    await prisma.videoJob.update({
      where: { id: existingJob.id },
      data: { status, progress, error, updatedAt: new Date() }
    });
  } else {
    await prisma.videoJob.create({
      data: {
        videoId,
        status,
        progress,
        error
      }
    });
  }
}

// 1. Claude script generation helper
async function callClaudeAPI(
  topic: string,
  niche: string,
  tone: string,
  duration: number,
  language: string
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error("Missing ANTHROPIC_API_KEY environment variable");
  }

  const prompt = `Write a short narration script for a 9:16 vertical video of approximately ${duration} seconds in the "${niche}" niche.
Subject/Topic: ${topic}
Tone: ${tone}
Language: ${language}

Requirements:
- Output ONLY the voiceover narrative text.
- Do NOT include any scene descriptions, stage directions, bracketed comments, tags, or formatting.
- The script should be engaging, formatted as a continuous spoken paragraph, and fit the ${duration}-second limit.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-3-haiku-20240307",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Claude API error: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const text = data.content?.[0]?.text;
  if (!text) {
    throw new Error("No script text returned from Claude API");
  }

  return text.trim();
}

// 2. ElevenLabs TTS helper
async function callElevenLabsTTS(script: string, voice: string): Promise<Buffer> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    throw new Error("Missing ELEVENLABS_API_KEY environment variable");
  }

  const voiceId = voice || "pNInz6obpg75paPuuFc7"; // default Adam voice

  const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text: script,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`ElevenLabs API error: ${response.statusText} - ${errorText}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// Helper to segment the script for image prompts
function segmentScript(script: string, count: number = 3): string[] {
  const sentences = script.split(/[.!?]+/).map(s => s.trim()).filter(Boolean);
  if (sentences.length <= count) {
    return sentences;
  }
  const segments: string[] = [];
  const chunkSize = Math.ceil(sentences.length / count);
  for (let i = 0; i < sentences.length; i += chunkSize) {
    segments.push(sentences.slice(i, i + chunkSize).join(". "));
  }
  return segments.slice(0, count);
}

// 3. Replicate SDXL image generation helpers
async function generateSingleImage(promptText: string, style: string): Promise<string> {
  const apiKey = process.env.REPLICATE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing REPLICATE_API_KEY environment variable");
  }

  const styledPrompt = `${promptText}, ${style} style, 9:16 portrait ratio, highly detailed, cinematic lighting, 8k resolution`;

  const response = await fetch("https://api.replicate.com/v1/models/stability-ai/sdxl/predictions", {
    method: "POST",
    headers: {
      "Authorization": `Token ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input: {
        prompt: styledPrompt,
        negative_prompt: "text, watermark, logo, blurry, ugly, deformed, bad anatomy",
        aspect_ratio: "9:16",
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Replicate API error: ${response.statusText} - ${errorText}`);
  }

  const prediction = await response.json();
  const pollUrl = prediction.urls.get;

  let status = prediction.status;
  let resultUrl = "";
  const startTime = Date.now();
  const timeout = 60000;

  while (status !== "succeeded" && status !== "failed" && status !== "canceled") {
    if (Date.now() - startTime > timeout) {
      throw new Error("Replicate image generation timed out");
    }
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const pollResponse = await fetch(pollUrl, {
      headers: { "Authorization": `Token ${apiKey}` },
    });
    const pollData = await pollResponse.json();
    status = pollData.status;
    if (status === "succeeded") {
      resultUrl = pollData.output[0];
    } else if (status === "failed" || status === "canceled") {
      throw new Error(`Replicate prediction failed: ${pollData.error}`);
    }
  }

  return resultUrl;
}

async function callSDXLAPI(script: string, style: string): Promise<string[]> {
  const segments = segmentScript(script, 3);
  console.log(`[WORKER] Generating ${segments.length} images in parallel via Replicate...`);
  return Promise.all(
    segments.map((promptText, idx) => {
      console.log(`[WORKER] Starting image generation ${idx + 1}/${segments.length}`);
      return generateSingleImage(promptText, style);
    })
  );
}

// 4. OpenAI Whisper word-level timestamps helper
async function callWhisperTranscription(audioBuffer: Buffer): Promise<SubtitleWord[]> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY environment variable");
  }

  const formData = new FormData();
  const audioBlob = new Blob([new Uint8Array(audioBuffer)], { type: "audio/mpeg" });
  formData.append("file", audioBlob, "voiceover.mp3");
  formData.append("model", "whisper-1");
  formData.append("response_format", "verbose_json");
  formData.append("timestamp_granularities[]", "word");

  const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI Whisper API error: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const words = data.words;
  if (!words || !Array.isArray(words)) {
    throw new Error("Whisper API did not return word-level timestamps");
  }

  return words.map((w: any) => ({
    word: w.word,
    start: w.start,
    end: w.end,
  }));
}

// 5. Remotion CLI rendering helper
async function renderRemotionVideo(
  imageUrls: string[],
  voiceUrl: string,
  subtitles: SubtitleWord[],
  videoId: string
): Promise<string> {
  const tempDir = os.tmpdir();
  const propsPath = path.join(tempDir, `props-${videoId}.json`);
  const outputPath = path.join(tempDir, `rendered-${videoId}.mp4`);

  const props = {
    imageUrls,
    voiceUrl,
    subtitles,
    musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    voiceVolume: 1.0,
    musicVolume: 0.15
  };

  fs.writeFileSync(propsPath, JSON.stringify(props));

  const lastWord = subtitles[subtitles.length - 1];
  const durationInSeconds = lastWord ? Math.ceil(lastWord.end + 1.5) : 30;
  const durationInFrames = Math.min(1800, durationInSeconds * 30); // Cap at 60s @ 30fps

  const command = `npx remotion render src/remotion/Root.tsx ReelForgeTemplate "${outputPath}" --props="${propsPath}" --duration=${durationInFrames}`;
  console.log(`[WORKER] Executing Remotion render: ${command}`);

  return new Promise((resolve, reject) => {
    exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) {
        console.error("❌ Remotion render command failed:", error);
        console.error("stderr:", stderr);
        reject(new Error(`Remotion CLI error: ${error.message}`));
        return;
      }
      console.log("[WORKER] Remotion render completed successfully.");
      try {
        fs.unlinkSync(propsPath);
      } catch (e) {
        console.warn("⚠️ Failed to clean up props file:", e);
      }
      resolve(outputPath);
    });
  });
}

// 6. Mock pipeline fallback
export async function runMockPipeline(videoId: string) {
  console.log(`[MOCK WORKER] Starting generation pipeline for Video ${videoId}...`);
  try {
    await prisma.video.update({ where: { id: videoId }, data: { status: "PENDING" } });
    await createJobProgress(videoId, "PENDING", 5);
    await sleep(1000);

    await prisma.video.update({
      where: { id: videoId },
      data: { 
        status: "SCRIPT_DONE",
        script: "HOOK: Le savais-tu ? Sous le sable du désert du Sahara repose un secret terrifiant. NARRATION: Il y a 5000 ans, cette zone était recouverte d'un lac gigantesque. Des créatures marines de plus de 15 mètres y régnaient en maîtres. CTA: Abonne-toi pour découvrir la suite des mystères de l'histoire !",
        viralScore: 84,
        suggestions: [
          "Le titre d'accroche 'Le secret terrifiant du Sahara' a un fort taux de clic.",
          "Augmenter l'emphase dramatique sur la taille des créatures marines."
        ]
      }
    });
    await createJobProgress(videoId, "SCRIPT_DONE", 15);
    await sleep(1000);

    await prisma.video.update({
      where: { id: videoId },
      data: { status: "VOICE_DONE", voiceUrl: "https://pub-reelforge.r2.dev/mock-voiceover.mp3" }
    });
    await createJobProgress(videoId, "VOICE_DONE", 30);
    await sleep(1000);

    await prisma.video.update({ where: { id: videoId }, data: { status: "IMAGES_DONE" } });
    await createJobProgress(videoId, "IMAGES_DONE", 45);
    await sleep(1000);

    const mockSubtitles = [
      { word: "Le", start: 0.1, end: 0.4 },
      { word: "savais-tu", start: 0.5, end: 1.1 },
      { word: "Sous", start: 1.2, end: 1.6 },
      { word: "le", start: 1.7, end: 1.9 },
      { word: "sable", start: 2.0, end: 2.5 },
      { word: "du", start: 2.6, end: 2.8 },
      { word: "désert", start: 2.9, end: 3.4 },
      { word: "terrifiant.", start: 3.5, end: 4.5 }
    ];
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "CAPTIONS_DONE", subtitles: mockSubtitles as any }
    });
    await createJobProgress(videoId, "CAPTIONS_DONE", 60);
    await sleep(1000);

    await prisma.video.update({ data: { musicUrl: "https://pub-reelforge.r2.dev/mock-background-ambient.mp3" }, where: { id: videoId } });
    await createJobProgress(videoId, "RENDERING", 75);
    await sleep(1000);

    await createJobProgress(videoId, "RENDERING", 90);
    await sleep(1500);

    await prisma.video.update({
      where: { id: videoId },
      data: { status: "COMPLETED", videoUrl: "https://pub-reelforge.r2.dev/rendered-result-sahara.mp4" }
    });
    await createJobProgress(videoId, "COMPLETED", 100);
    console.log(`[MOCK WORKER] Pipeline completed successfully for Video ${videoId}!`);
  } catch (error: any) {
    console.error(`[MOCK WORKER] Pipeline failed for Video ${videoId}:`, error);
    await prisma.video.update({ where: { id: videoId }, data: { status: "FAILED" } });
    await createJobProgress(videoId, "FAILED", 100, error?.message || "Unknown error");
  }
}

export async function runProductionPipeline(
  videoId: string,
  data: {
    topic: string;
    niche: string;
    style: string;
    tone: string;
    duration: number;
    language: string;
    voice: string;
  },
  onProgress?: (progress: number) => Promise<void> | void
) {
  const { topic, niche, style, tone, duration, language, voice } = data;
  try {
    // 1. Generate Script
    console.log(`[WORKER] Step 1: Generating script via Claude...`);
    const script = await callClaudeAPI(topic, niche, tone, duration, language);
    await prisma.video.update({
      where: { id: videoId },
      data: { script, status: "SCRIPT_DONE", viralScore: Math.floor(Math.random() * 20) + 75 }
    });
    await createJobProgress(videoId, "SCRIPT_DONE", 15);
    if (onProgress) await onProgress(15);

    // 2. Generate Voice
    console.log(`[WORKER] Step 2: Synthesizing voice via ElevenLabs...`);
    const voiceBuffer = await callElevenLabsTTS(script, voice);
    const voiceKey = `voices/voice-${videoId}.mp3`;
    const voiceUrl = await uploadToR2(voiceBuffer, voiceKey, "audio/mpeg");
    await prisma.video.update({
      where: { id: videoId },
      data: { voiceUrl, status: "VOICE_DONE" }
    });
    await createJobProgress(videoId, "VOICE_DONE", 30);
    if (onProgress) await onProgress(30);

    // 3. Generate Images
    console.log(`[WORKER] Step 3: Generating images via SDXL...`);
    const imageUrls = await callSDXLAPI(script, style);
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "IMAGES_DONE" }
    });
    await createJobProgress(videoId, "IMAGES_DONE", 45);
    if (onProgress) await onProgress(45);

    // 4. Generate Subtitles
    console.log(`[WORKER] Step 4: Transcribing voice via Whisper...`);
    const subtitles = await callWhisperTranscription(voiceBuffer);
    await prisma.video.update({
      where: { id: videoId },
      data: { subtitles: subtitles as any, status: "CAPTIONS_DONE" }
    });
    await createJobProgress(videoId, "CAPTIONS_DONE", 60);
    if (onProgress) await onProgress(60);

    // 5. Render Video Composition
    console.log(`[WORKER] Step 5: Rendering video using Remotion CLI...`);
    const localVideoPath = await renderRemotionVideo(imageUrls, voiceUrl, subtitles, videoId);
    await createJobProgress(videoId, "RENDERING", 85);
    if (onProgress) await onProgress(85);

    // 6. Upload final MP4 to R2
    console.log(`[WORKER] Step 6: Uploading MP4 to R2...`);
    const finalVideoBuffer = fs.readFileSync(localVideoPath);
    const videoKey = `rendered/video-${videoId}.mp4`;
    const finalVideoUrl = await uploadToR2(finalVideoBuffer, videoKey, "video/mp4");
    
    await prisma.video.update({
      where: { id: videoId },
      data: { videoUrl: finalVideoUrl, status: "COMPLETED" }
    });

    // Clean up local rendered file
    try {
      fs.unlinkSync(localVideoPath);
    } catch (e) {
      console.warn("⚠️ Failed to clean up local rendered file:", e);
    }

    await createJobProgress(videoId, "COMPLETED", 100);
    if (onProgress) await onProgress(100);
    console.log(`[WORKER] Video ${videoId} successfully generated and uploaded: ${finalVideoUrl}`);

    return { status: "success", videoId, videoUrl: finalVideoUrl };

  } catch (pipelineError: any) {
    console.error(`❌ Pipeline failed for Video ${videoId}:`, pipelineError);
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "FAILED" }
    });
    await createJobProgress(videoId, "FAILED", 100, pipelineError?.message || "Unknown pipeline error");
    throw pipelineError;
  }
}

let worker: Worker | null = null;

if (process.env.NODE_ENV !== "test") {
  try {
    worker = new Worker(
      "video-generation",
      async (job: Job) => {
        const { videoId, topic, niche, style, tone, duration, language, voice } = job.data;
        console.log(`[WORKER] Processing job ${job.id} for Video ${videoId}`);

        if (process.env.USE_MOCK_AI === "true") {
          await runMockPipeline(videoId);
          return { status: "success", mock: true };
        }

        return runProductionPipeline(
          videoId,
          { topic, niche, style, tone, duration, language, voice },
          (progress) => job.updateProgress(progress)
        );
      },
      {
        connection: connectionOptions,
        concurrency: 2,
      }
    );

    worker.on("completed", (job) => {
      console.log(`[WORKER] Job ${job.id} completed successfully.`);
    });

    worker.on("failed", (job, err) => {
      console.error(`[WORKER] Job ${job?.id} failed:`, err);
    });

    worker.on("error", (err) => {
      console.warn("⚠️ BullMQ Worker encountered a connection error:", err.message);
    });

  } catch (error) {
    console.warn("⚠️ Worker could not initialize. Redis server might be offline.");
  }
}

export { worker };
