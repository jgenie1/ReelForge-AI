import { Worker, Job } from "bullmq";
import { prisma } from "../lib/db";
import { connectionOptions } from "../lib/queue";

// Simple sleep helper for simulating pipeline latency
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * MOCK PIPELINE RUNNER (For offline development and tests)
 * Emulates the 8 steps of short video generation in ~8 seconds.
 */
export async function runMockPipeline(videoId: string) {
  console.log(`[MOCK WORKER] Starting generation pipeline for Video ${videoId}...`);
  
  try {
    // 0. Initial Status
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "PENDING" }
    });
    await createJobProgress(videoId, "PENDING", 5);
    await sleep(1000);

    // 1. Generate Script (Claude API mockup)
    console.log(`[MOCK WORKER] Step 1/8: GenerateScript...`);
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

    // 2. Generate Voice (ElevenLabs mockup)
    console.log(`[MOCK WORKER] Step 2/8: GenerateVoice...`);
    await prisma.video.update({
      where: { id: videoId },
      data: { 
        status: "VOICE_DONE",
        voiceUrl: "https://pub-reelforge.r2.dev/mock-voiceover.mp3"
      }
    });
    await createJobProgress(videoId, "VOICE_DONE", 30);
    await sleep(1000);

    // 3. Generate Images (SDXL / Pexels mockup)
    console.log(`[MOCK WORKER] Step 3/8: GenerateImages...`);
    await prisma.video.update({
      where: { id: videoId },
      data: { 
        status: "IMAGES_DONE"
      }
    });
    await createJobProgress(videoId, "IMAGES_DONE", 45);
    await sleep(1000);

    // 4. Generate Captions (Whisper sync mockup)
    console.log(`[MOCK WORKER] Step 4/8: GenerateCaptions...`);
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
      data: { 
        status: "CAPTIONS_DONE",
        subtitles: mockSubtitles
      }
    });
    await createJobProgress(videoId, "CAPTIONS_DONE", 60);
    await sleep(1000);

    // 5. Generate Music (Suno / Library mockup)
    console.log(`[MOCK WORKER] Step 5/8: GenerateMusic...`);
    await prisma.video.update({
      where: { id: videoId },
      data: { 
        musicUrl: "https://pub-reelforge.r2.dev/mock-background-ambient.mp3"
      }
    });
    await createJobProgress(videoId, "RENDERING", 75);
    await sleep(1000);

    // 6. Render Video (Remotion / FFmpeg mockup)
    console.log(`[MOCK WORKER] Step 6/8: RenderVideo...`);
    await createJobProgress(videoId, "RENDERING", 90);
    await sleep(1500);

    // 7. Upload & Complete
    console.log(`[MOCK WORKER] Step 7-8: UploadToR2 & Publish...`);
    await prisma.video.update({
      where: { id: videoId },
      data: { 
        status: "COMPLETED",
        videoUrl: "https://pub-reelforge.r2.dev/rendered-result-sahara.mp4"
      }
    });
    await createJobProgress(videoId, "COMPLETED", 100);
    console.log(`[MOCK WORKER] Pipeline completed successfully for Video ${videoId}!`);

  } catch (error: any) {
    console.error(`[MOCK WORKER] Pipeline failed for Video ${videoId}:`, error);
    await prisma.video.update({
      where: { id: videoId },
      data: { status: "FAILED" }
    });
    await createJobProgress(videoId, "FAILED", 100, error?.message || "Unknown error");
  }
}

/**
 * Creates or updates the status log of a VideoJob
 */
async function createJobProgress(videoId: string, status: any, progress: number, error: string | null = null) {
  // Check if job exists
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

/**
 * PRODUCTION BULLMQ WORKER
 * Connects to the Redis queue and handles background jobs.
 */
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

        // --- ACTUAL PRODUCTION PIPELINE STEPS ---
        try {
          // JOB_1: Generate Script (Claude API)
          await job.updateProgress(10);
          console.log("Calling Claude API for script writing...");
          // const script = await callClaudeAPI(topic, niche, tone, duration, language);
          
          // JOB_2: Generate Voice (ElevenLabs TTS)
          await job.updateProgress(30);
          console.log("Calling ElevenLabs API for voiceover audio generation...");
          // const voiceUrl = await callElevenLabsTTS(script, voice);

          // JOB_3: Generate Images (SDXL via Replicate / Runpod)
          await job.updateProgress(50);
          console.log("Calling SDXL via Replicate API for visual frames...");
          // const imageUrls = await callSDXLAPI(script, style);

          // JOB_4: Generate Captions / Transcription (Whisper API)
          await job.updateProgress(70);
          console.log("Calling Whisper API for subtitles word-by-word alignment...");
          // const subtitles = await callWhisperTranscription(voiceUrl);

          // JOB_5: Render Video (Remotion / FFmpeg rendering)
          await job.updateProgress(85);
          console.log("Rendering video composition with Remotion Node rendering CLI...");
          // const localVideoPath = await renderRemotionVideo(imageUrls, voiceUrl, subtitles);

          // JOB_6: Upload to Cloudflare R2
          await job.updateProgress(95);
          console.log("Uploading rendered MP4 to Cloudflare R2 bucket...");
          // const finalVideoUrl = await uploadToR2(localVideoPath);

          // Update DB as completed
          await prisma.video.update({
            where: { id: videoId },
            data: {
              status: "COMPLETED",
              // videoUrl: finalVideoUrl,
            }
          });

          await job.updateProgress(100);
          return { status: "success", videoId };

        } catch (pipelineError: any) {
          console.error(`Error in actual video pipeline job ${job.id}:`, pipelineError);
          await prisma.video.update({
            where: { id: videoId },
            data: { status: "FAILED" }
          });
          throw pipelineError;
        }
      },
      {
        connection: connectionOptions,
        concurrency: 2, // process 2 videos concurrently per worker node
      }
    );

    worker.on("completed", (job) => {
      console.log(`[WORKER] Job ${job.id} has completed!`);
    });

    worker.on("failed", (job, err) => {
      console.error(`[WORKER] Job ${job?.id} failed with error:`, err);
    });

    worker.on("error", (err) => {
      console.warn("⚠️ BullMQ Worker encountered a Redis connection error:", err.message);
    });

  } catch (error) {
    console.warn("⚠️ Worker could not connect to Redis server. Running without active background worker daemon.");
  }
}

export { worker };
