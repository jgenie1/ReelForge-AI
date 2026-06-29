import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const status = url.searchParams.get('status') || undefined;
    const niche = url.searchParams.get('niche') || undefined;
    const limit = Number(url.searchParams.get('limit')) || 20;
    const page = Number(url.searchParams.get('page')) || 1;
    const skip = (page - 1) * limit;

    let clerkId = 'mock-clerk-user';
    try {
      const session = auth();
      if (session?.userId) {
        clerkId = session.userId;
      }
    } catch {
      // clerk keys missing or offline
    }

    // Default mock backups
    const mockVideos = [
      { id: 'vid-1', title: 'Le secret terrifiant du Sahara', niche: 'Science Insolite', style: 'Cinématique SDXL', duration: 30, status: 'COMPLETED', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', viralScore: 84, views: 1200000, likes: 84000, createdAt: new Date(Date.now() - 2 * 3600000) },
      { id: 'vid-2', title: "L'Arche Perdue de Salomon", niche: 'Histoires Bibliques', style: 'Illustration', duration: 45, status: 'RENDERING', videoUrl: null, viralScore: 78, views: 0, likes: 0, progress: 75, createdAt: new Date(Date.now() - 5 * 60000) },
      { id: 'vid-3', title: "L'Ombre d'Anubis - Épisode 1", niche: 'Mythologie', style: 'Dark Fantasy', duration: 30, status: 'COMPLETED', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', viralScore: 92, views: 340000, likes: 21000, createdAt: new Date(Date.now() - 24 * 3600000) },
      { id: 'vid-4', title: "L'Investissement Passif en 2026", niche: 'Finance & Richesse', style: 'Realistic', duration: 15, status: 'FAILED', videoUrl: null, viralScore: 45, views: 0, likes: 0, createdAt: new Date(Date.now() - 48 * 3600000) },
      { id: 'vid-5', title: "5 Lois Secrètes de l'Argent", niche: 'Finance & Richesse', style: 'Cinématique SDXL', duration: 30, status: 'COMPLETED', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', viralScore: 88, views: 3400000, likes: 210000, createdAt: new Date(Date.now() - 72 * 3600000) },
      { id: 'vid-6', title: "Les Créatures du Marais Haïtien", niche: 'Culture Haïtienne', style: 'Dark Fantasy', duration: 45, status: 'COMPLETED', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', viralScore: 79, views: 156000, likes: 12000, createdAt: new Date(Date.now() - 4 * 24 * 3600000) },
    ];

    try {
      const where: any = {
        user: { clerkId }
      };
      if (status) where.status = status;
      if (niche) where.niche = { contains: niche, mode: 'insensitive' };

      const [videos, total] = await Promise.all([
        prisma.video.findMany({ 
          where, 
          take: limit, 
          skip, 
          orderBy: { createdAt: 'desc' }, 
          include: { jobs: { take: 1, orderBy: { updatedAt: 'desc' } } } 
        }),
        prisma.video.count({ where })
      ]);

      return NextResponse.json({ videos, total, page, limit, totalPages: Math.ceil(total / limit) });
    } catch (dbError) {
      // Database offline/not configured fallback
      const filtered = mockVideos.filter(v => (!status || v.status === status) && (!niche || v.niche.toLowerCase().includes(niche.toLowerCase())));
      return NextResponse.json({ videos: filtered.slice(skip, skip + limit), total: filtered.length, page, limit, totalPages: Math.ceil(filtered.length / limit), mock: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
