import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()
  if (!id) {
    return NextResponse.json({ error: 'Ingen ID angitt' }, { status: 400 })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        eggCount: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'Bruker ikke funnet' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error: unknown) {
  console.error('Feil i GET /api/users:', error)
  return NextResponse.json({ error: 'Serverfeil', details: error }, { status: 500 })
}

}


