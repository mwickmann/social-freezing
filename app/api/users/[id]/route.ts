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
  } catch (error: unknown) {
  const message = error instanceof Error ? error.message : 'Ukjent feil'
  console.error('Feil i API:', message)
  return NextResponse.json({ error: message }, { status: 500 })
}

}
