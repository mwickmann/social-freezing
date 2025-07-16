import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const id = url.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ error: 'Mangler bruker-ID' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: { id },
    select: { id: true, email: true, createdAt: true },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user)
}
