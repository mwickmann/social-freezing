import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const clinic = await prisma.clinic.findUnique({
      where: { id: params.id },
    })

    if (!clinic) {
      return NextResponse.json({ error: 'Klinikk ikke funnet' }, { status: 404 })
    }

    return NextResponse.json(clinic)
  } catch (error) {
    console.error('GET-feil:', error)
    return NextResponse.json(
      { error: 'Kunne ikke hente klinikk' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deletedClinic = await prisma.clinic.delete({
      where: { id: params.id },
    })

    return NextResponse.json(deletedClinic, { status: 200 })
  } catch (error) {
    console.error('DELETE-feil:', error)
    return NextResponse.json(
      { error: 'Klinikk ikke funnet eller kunne ikke slettes' },
      { status: 404 }
    )
  }
}
