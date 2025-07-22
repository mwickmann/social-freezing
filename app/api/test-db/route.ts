import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany({ take: 1 })
    return NextResponse.json({ success: true, users })
  } catch (error: unknown) {
  if (error instanceof Error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: false, error: 'Ukjent feil' }, { status: 500 })
}

}
