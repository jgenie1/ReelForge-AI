import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    try {
      const videos = await prisma.video.findMany({ where: { seriesId: params.id }, orderBy: { createdAt: 'desc' } });
      return NextResponse.json({ videos });
    } catch {
      return NextResponse.json({ videos: [], mock: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
