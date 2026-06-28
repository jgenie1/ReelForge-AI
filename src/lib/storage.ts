import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getStorage } from "firebase-admin/storage";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY;
const bucketName = process.env.FIREBASE_STORAGE_BUCKET;

const isFirebaseConfigured = !!(
  projectId &&
  clientEmail &&
  privateKey &&
  privateKey !== "your-private-key" &&
  bucketName
);

if (isFirebaseConfigured && getApps().length === 0) {
  try {
    initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey!.replace(/\\n/g, "\n"),
      }),
      storageBucket: bucketName,
    });
    console.log("🚀 Firebase Admin initialized successfully.");
  } catch (error) {
    console.error("❌ Failed to initialize Firebase Admin SDK:", error);
  }
} else if (!isFirebaseConfigured) {
  console.warn("⚠️ Firebase Storage credentials missing or running in sandbox mode. Storage will fall back to mock uploads.");
}

const bucket = isFirebaseConfigured ? getStorage().bucket() : null;

/**
 * Uploads a file buffer to Firebase Storage and returns its public URL.
 */
export async function uploadToFirebase(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  if (!isFirebaseConfigured || !bucket) {
    console.log(`[MOCK STORAGE] Mock Firebase upload for key: ${key}`);
    return `https://storage.googleapis.com/mock-reelforge-bucket/${key}`;
  }

  try {
    const file = bucket.file(key);
    await file.save(fileBuffer, {
      metadata: { contentType },
      public: true, // Make publicly readable
    });
    return `https://storage.googleapis.com/${bucket.name}/${key}`;
  } catch (error) {
    console.error(`❌ Failed to upload ${key} to Firebase Storage:`, error);
    throw error;
  }
}
