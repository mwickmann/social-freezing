import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop() // henter ut ID fra URL

  if (!id) {
    return NextResponse.json({ error: 'Ingen ID angitt' }, { status: 400 })
  }

  try {
    const clinic = await prisma.clinic.findUnique({
      where: { id },
    })

    if (!clinic) {
      return NextResponse.json({ error: 'Klinikk ikke funnet' }, { status: 404 })
    }

    return NextResponse.json(clinic)
  } catch (error) {
   console.error('Feil ved henting av klinikk:', error)}

    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ error: 'Ingen ID angitt' }, { status: 400 })
  }

  try {
    const deletedClinic = await prisma.clinic.delete({
      where: { id },
    })

    return NextResponse.json(deletedClinic)
  } catch (error) { 
    console.error('Feil ved sletting av klinikk:', error)}

    return NextResponse.json({ error: 'Kunne ikke slette klinikken' }, { status: 500 })
  }
