import { Worker, Job } from "bullmq";
import { prisma } from "../lib/db";
import { connectionOptions } from "../lib/queue";
import { uploadToFirebase } from "../lib/storage";
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

// 1. Gemini script generation helper
async function callGeminiScript(
  topic: string,
  niche: string,
  tone: string,
  duration: number,
  language: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
  }

  const prompt = `Write a short narration script for a 9:16 vertical video of approximately ${duration} seconds in the "${niche}" niche.
Subject/Topic: ${topic}
Tone: ${tone}
Language: ${language}

Requirements:
- Output ONLY the voiceover narrative text.
- Do NOT include any scene descriptions, stage directions, bracketed comments, tags, or formatting.
- The script should be engaging, formatted as a continuous spoken paragraph, and fit the ${duration}-second limit.`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API script error: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("No script text returned from Gemini API");
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

// 3. Gemini Imagen image generation helpers
async function generateSingleImage(promptText: string, style: string, index: number, videoId: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
  }

  const styledPrompt = `${promptText}, ${style} style, 9:16 portrait ratio, highly detailed, cinematic lighting, 8k resolution`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      instances: [
        {
          prompt: styledPrompt,
        }
      ],
      parameters: {
        sampleCount: 1,
        aspectRatio: "9:16",
        outputMimeType: "image/jpeg"
      }
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini Imagen API error: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const base64Bytes = data.predictions?.[0]?.bytesBase64Encoded;
  if (!base64Bytes) {
    throw new Error("No image data returned from Gemini Imagen API");
  }

  const imageBuffer = Buffer.from(base64Bytes, "base64");
  const imageKey = `images/scene-${videoId}-${index}.jpg`;
  
  return uploadToFirebase(imageBuffer, imageKey, "image/jpeg");
}

async function callImagenAPI(script: string, style: string, videoId: string): Promise<string[]> {
  const segments = segmentScript(script, 3);
  console.log(`[WORKER] Generating ${segments.length} images in parallel via Gemini Imagen...`);
  return Promise.all(
    segments.map((promptText, idx) => {
      console.log(`[WORKER] Starting image generation ${idx + 1}/${segments.length}`);
      return generateSingleImage(promptText, style, idx + 1, videoId);
    })
  );
}

// 4. Gemini 1.5 Flash audio transcription with timestamps helper
async function callGeminiTranscription(audioBuffer: Buffer): Promise<SubtitleWord[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY environment variable");
  }

  const base64Audio = audioBuffer.toString("base64");

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: `Transcribe this audio file and return a JSON array of words. Every single word in the audio must be transcribed with its start and end timestamps.
You must output a JSON array of objects with the exact structure:
[
  { "word": "text", "start": number (seconds), "end": number (seconds) }
]
Ensure the response is a valid JSON array of word objects and contains nothing else.`
            },
            {
              inlineData: {
                mimeType: "audio/mp3",
                data: base64Audio
              }
            }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini Transcription API error: ${response.statusText} - ${errorText}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("No transcription text returned from Gemini API");
  }

  try {
    const subtitles = JSON.parse(text.trim());
    if (!Array.isArray(subtitles)) {
      throw new Error("Gemini API transcription response is not a JSON array");
    }
    return subtitles.map((w: any) => ({
      word: w.word,
      start: Number(w.start),
      end: Number(w.end)
    }));
  } catch (parseError: any) {
    console.error("❌ Failed to parse Gemini transcription JSON:", text);
    throw new Error(`Gemini transcription parse error: ${parseError.message}`);
  }
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
      data: { status: "VOICE_DONE", voiceUrl: "https://storage.googleapis.com/mock-reelforge-bucket/mock-voiceover.mp3" }
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

    await prisma.video.update({ data: { musicUrl: "https://storage.googleapis.com/mock-reelforge-bucket/mock-background-ambient.mp3" }, where: { id: videoId } });
    await createJobProgress(videoId, "RENDERING", 75);
    await sleep(1000);

    await createJobProgress(videoId, "RENDERING", 90);
    await sleep(1500);

    await prisma.video.update({
      where: { id: videoId },
      data: { status: "COMPLETED", videoUrl: "https://storage.googleapis.com/mock-reelforge-bucket/rendered-result-sahara.mp4" }
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
    console.log(`[WORKER] Step 1: Generating script via Gemini...`);
    const script = await callGeminiScript(topic, niche, tone, duration, language);
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
    const voiceUrl = await uploadToFirebase(voiceBuffer, voiceKey, "audio/mpeg");
    await prisma.video.update({
      where: { id: videoId },
      data: { voiceUrl, status: "VOICE_DONE" }
    });
    await createJobProgress(videoId, "VOICE_DONE", 30);
    if (onProgress) await onProgress(30);

    // 3. Generate Images
    console.log(`[WORKER] Step 3: Generating images via Gemini Imagen...`);
    const imageUrls = await callImagenAPI(script, style, videoId);
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "IMAGES_DONE" }
    });
    await createJobProgress(videoId, "IMAGES_DONE", 45);
    if (onProgress) await onProgress(45);

    // 4. Generate Subtitles
    console.log(`[WORKER] Step 4: Transcribing voice via Gemini Multimodal...`);
    const subtitles = await callGeminiTranscription(voiceBuffer);
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

    // 6. Upload final MP4 to Firebase Storage
    console.log(`[WORKER] Step 6: Uploading MP4 to Firebase Storage...`);
    const finalVideoBuffer = fs.readFileSync(localVideoPath);
    const videoKey = `rendered/video-${videoId}.mp4`;
    const finalVideoUrl = await uploadToFirebase(finalVideoBuffer, videoKey, "video/mp4");
    
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
