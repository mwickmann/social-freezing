import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        email: true,
        createdAt: true,
        eggCount: true,
      },
    })

    if (!user) {
      return NextResponse.json({ error: 'Bruker ikke funnet' }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (error: any) {
    console.error('Feil i GET /api/users/[id]:', error)
    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }
}
