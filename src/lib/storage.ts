import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const accountId = process.env.R2_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
const bucketName = process.env.R2_BUCKET_NAME;
const publicUrl = process.env.R2_PUBLIC_URL;

const isS3Configured = !!(accountId && accessKeyId && secretAccessKey && bucketName && publicUrl);

let s3Client: S3Client | null = null;

if (isS3Configured) {
  s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: accessKeyId!,
      secretAccessKey: secretAccessKey!,
    },
  });
} else {
  console.warn("⚠️ Cloudflare R2 credentials missing. S3 client will run in mock mode.");
}

/**
 * Uploads a file buffer to Cloudflare R2 and returns its public URL.
 */
export async function uploadToR2(
  fileBuffer: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  if (!isS3Configured || !s3Client) {
    console.log(`[MOCK STORAGE] Mock upload for key: ${key}`);
    return `https://pub-reelforge.r2.dev/${key}`;
  }

  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName!,
        Key: key,
        Body: fileBuffer,
        ContentType: contentType,
      })
    );
    return `${publicUrl}/${key}`;
  } catch (error) {
    console.error(`❌ Failed to upload ${key} to Cloudflare R2:`, error);
    throw error;
  }
}
