import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/db';

const MOCK_SERIES = [
  { id: 'ser-1', name: 'Mythes & Légendes Antiques', niche: 'Mythologie', videoCount: 30, intervalHours: 24, status: 'ACTIVE', videosGenerated: 18, nextPublishAt: new Date(Date.now() + 6 * 3600000), platforms: ['tiktok', 'instagram'], createdAt: new Date(Date.now() - 18 * 24 * 3600000) },
  { id: 'ser-2', name: 'Bible Stories FR', niche: 'Histoires Bibliques', videoCount: 60, intervalHours: 12, status: 'ACTIVE', videosGenerated: 24, nextPublishAt: new Date(Date.now() + 2 * 3600000), platforms: ['tiktok', 'youtube'], createdAt: new Date(Date.now() - 24 * 24 * 3600000) },
  { id: 'ser-3', name: 'Finance Secrets 2026', niche: 'Finance & Richesse', videoCount: 10, intervalHours: 24, status: 'PAUSED', videosGenerated: 10, nextPublishAt: null, platforms: ['instagram'], createdAt: new Date(Date.now() - 30 * 24 * 3600000) },
  { id: 'ser-4', name: 'Horror Chronicles', niche: 'Horreur & Mystère', videoCount: 30, intervalHours: 48, status: 'COMPLETED', videosGenerated: 30, nextPublishAt: null, platforms: ['tiktok'], createdAt: new Date(Date.now() - 60 * 24 * 3600000) },
];

export async function GET(req: Request) {
  try {
    let clerkId = 'mock-clerk-user';
    try {
      const session = auth();
      if (session?.userId) {
        clerkId = session.userId;
      }
    } catch {
      // clerk keys missing or offline
    }

    try {
      const series = await prisma.series.findMany({ 
        where: { user: { clerkId } },
        orderBy: { createdAt: 'desc' }, 
        include: { videos: { select: { id: true, status: true } } } 
      });
      return NextResponse.json({ series });
    } catch {
      return NextResponse.json({ series: MOCK_SERIES, mock: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, niche, videoCount, intervalHours, platforms, style, tone, language, voice } = body;

    if (!name || !niche || !videoCount) {
      return NextResponse.json({ error: 'name, niche, videoCount sont requis' }, { status: 400 });
    }

    let clerkId = 'mock-clerk-user';
    try {
      const session = auth();
      if (session?.userId) {
        clerkId = session.userId;
      }
    } catch {
      // clerk keys missing or offline
    }

    try {
      // Try to create in real DB
      const series = await prisma.series.create({
        data: {
          name,
          niche,
          videoCount: Number(videoCount),
          intervalHours: Number(intervalHours) || 24,
          status: 'ACTIVE',
          user: { connect: { clerkId } }
        }
      });
      return NextResponse.json({ series, created: true }, { status: 201 });
    } catch {
      // Mock creation
      const mockSeries = { id: `ser-${Date.now()}`, name, niche, videoCount, intervalHours: intervalHours || 24, status: 'ACTIVE', videosGenerated: 0, platforms: platforms || [], createdAt: new Date(), mock: true };
      return NextResponse.json({ series: mockSeries, created: true, mock: true }, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
