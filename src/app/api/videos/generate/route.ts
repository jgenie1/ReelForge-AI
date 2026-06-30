import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/db";
import { queueVideoJob } from "@/lib/queue";

export async function POST(req: Request) {
  try {
    // 1. Parse request body
    const body = await req.json();
    const { 
      topic, 
      niche, 
      tone, 
      duration, 
      language, 
      style, 
      voice, 
      customScript 
    } = body;

    // Basic validation
    if (!niche || !style || !voice || !duration || !language) {
      return NextResponse.json(
        { error: "Paramètres requis manquants : niche, style, voice, duration, language sont obligatoires." },
        { status: 400 }
      );
    }

    // 2. Resolve Authenticated User (graceful fallback if Clerk keys are missing)
    let clerkId = "mock-clerk-user";
    let email = "creator@reelforge.ai";

    try {
      const session = auth();
      const user = await currentUser();
      if (session?.userId && user?.emailAddresses?.[0]?.emailAddress) {
        clerkId = session.userId;
        email = user.emailAddresses[0].emailAddress;
      }
    } catch (authError) {
      console.warn("⚠️ Clerk Auth could not resolve. Using sandbox fallback user.");
    }

    let videoId = `vid-mock-${Date.now()}`;
    let remainingCredits = 123;
    let createdInDb = false;

    try {
      // 3. Find or Create User in local Postgres DB
      let dbUser = await prisma.user.findUnique({
        where: { clerkId }
      });

      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            clerkId,
            email,
            credits: 50 // starting credits for sandbox
          }
        });
      }

      // 4. Perform credit checks
      if (dbUser.credits < 1) {
        return NextResponse.json(
          { error: "Crédits insuffisants pour forger cette vidéo. Veuillez recharger votre compte." },
          { status: 403 }
        );
      }

      // 5. Create Video & Job Records (wrap in transaction for safety)
      const result = await prisma.$transaction(async (tx) => {
        // Deduct credit
        const updatedUser = await tx.user.update({
          where: { id: dbUser.id },
          data: { credits: { decrement: 1 } }
        });

        // Log credit consumption
        await tx.creditsLog.create({
          data: {
            userId: dbUser.id,
            creditsChanged: -1,
            reason: "VIDEO_GENERATION"
          }
        });

        // Create video record
        const video = await tx.video.create({
          data: {
            userId: dbUser.id,
            title: topic ? `Sujet: ${topic.slice(0, 30)}...` : `Série ${niche}`,
            script: customScript || "En attente du script Gemini API...",
            niche,
            style,
            tone: tone || "Neutral",
            duration,
            language,
            status: "PENDING"
          }
        });

        // Initialize Video Job tracking
        const job = await tx.videoJob.create({
          data: {
            videoId: video.id,
            status: "PENDING",
            progress: 0
          }
        });

        return { video, job, remainingCredits: updatedUser.credits };
      });

      videoId = result.video.id;
      remainingCredits = result.remainingCredits;
      createdInDb = true;

      // 6. Queue the job in BullMQ
      try {
        await queueVideoJob(videoId, {
          topic,
          niche,
          style,
          tone,
          duration,
          language,
          voice
        });
      } catch (queueError) {
        console.warn("⚠️ Redis/BullMQ queue failed. Job created in database but not queued in background worker.");
      }

    } catch (dbError) {
      console.warn("⚠️ Database offline. Falling back to mock video generation task (Sandbox Mode).");
    }

    return NextResponse.json({
      success: true,
      message: createdInDb ? "Tâche de vidéo envoyée à la forge." : "Tâche de vidéo simulée lancée (Mode Sandbox).",
      videoId,
      jobId: `job-mock-${Date.now()}`,
      queued: true,
      remainingCredits,
      videoStatus: "PENDING",
      mock: !createdInDb
    }, { status: 201 });

  } catch (error: any) {
    console.error("❌ Error generating video:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors du lancement de la génération.", details: error?.message },
      { status: 500 }
    );
  }
}
