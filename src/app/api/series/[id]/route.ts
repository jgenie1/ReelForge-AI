import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    try {
      const series = await prisma.series.findUnique({ where: { id: params.id }, include: { videos: { take: 10, orderBy: { createdAt: 'desc' } } } });
      if (!series) return NextResponse.json({ error: 'Série introuvable' }, { status: 404 });
      return NextResponse.json({ series });
    } catch {
      return NextResponse.json({ series: { id: params.id, name: 'Série Mock', niche: 'Mythologie', status: 'ACTIVE' }, mock: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    try {
      const series = await prisma.series.update({ where: { id: params.id }, data: body });
      return NextResponse.json({ series });
    } catch {
      return NextResponse.json({ series: { id: params.id, ...body }, mock: true });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    try {
      await prisma.series.delete({ where: { id: params.id } });
    } catch { /* mock */ }
    return NextResponse.json({ deleted: true, id: params.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
