import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await prisma.$queryRaw`SELECT * FROM "User" LIMIT 1`;
    return NextResponse.json({ ok: true, data: res });
  } catch (error: any) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
}
