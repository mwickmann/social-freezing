import { NextRequest, NextResponse } from 'next/server'
import { prisma }from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  })
  return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json()

    if (!email || !password || !name) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    return NextResponse.json({
      id: newUser.id,
      email: newUser.email,
      createdAt: newUser.createdAt,
      name: newUser.name,
    }, { status: 201 })

  } catch (error) {
    console.error('POST /api/users error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
