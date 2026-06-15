import { Queue, ConnectionOptions } from "bullmq";
import IORedis from "ioredis";

const redisHost = process.env.REDIS_HOST || "127.0.0.1";
const redisPort = Number(process.env.REDIS_PORT) || 6379;
const redisPassword = process.env.REDIS_PASSWORD || "";

// Standard connection options
const connectionOptions: ConnectionOptions = {
  host: redisHost,
  port: redisPort,
  password: redisPassword ? redisPassword : undefined,
  maxRetriesPerRequest: null,
};

// Safe connection instantiation
let connection: IORedis | null = null;
let videoQueue: Queue | null = null;

try {
  connection = new IORedis({
    host: redisHost,
    port: redisPort,
    password: redisPassword ? redisPassword : undefined,
    maxRetriesPerRequest: null,
    lazyConnect: true,
  });

  // Attempt to connect silently
  connection.connect().catch((err) => {
    console.warn("⚠️ Redis Connection failed. BullMQ will run in fallback mock mode.", err.message);
  });

  videoQueue = new Queue("video-generation", { connection: connection as any });
  videoQueue.on("error", (err) => {
    console.warn("⚠️ BullMQ Queue encountered a Redis connection error:", err.message);
  });
  console.log("🚀 BullMQ Video Queue initialized successfully.");
} catch (error) {
  console.warn("⚠️ Failed to initialize Redis connection. BullMQ is disabled.", error);
}

export { videoQueue, connectionOptions };

/**
 * Add a new video generation job to the BullMQ queue
 */
export async function queueVideoJob(videoId: string, options: {
  topic?: string;
  niche: string;
  style: string;
  tone: string;
  duration: number;
  language: string;
  voice: string;
}) {
  if (videoQueue && connection?.status === "ready") {
    const job = await videoQueue.add(`render-${videoId}`, {
      videoId,
      ...options,
    }, {
      attempts: 3,
      backoff: {
        type: "exponential",
        delay: 5000,
      },
    });
    return { id: job.id, name: job.name, queued: true };
  } else {
    // Mock queue execution for local test or fallback
    console.log(`[MOCK QUEUE] Video job queued for Video ID: ${videoId}`, options);
    
    // Auto-trigger simulated worker in background (avoid blocking API response)
    if (process.env.USE_MOCK_AI === "true") {
      import("../workers/videoWorker").then(({ runMockPipeline }) => {
        runMockPipeline(videoId).catch(err => 
          console.error(`Error in mock background pipeline for ${videoId}:`, err)
        );
      });
    }

    return { id: `mock-job-${videoId}`, name: `mock-render-${videoId}`, queued: false };
  }
}
