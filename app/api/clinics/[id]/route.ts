import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const clinicId = context.params.id

  try {
    const clinic = await prisma.clinic.findUnique({
      where: { id: clinicId },
    })

    if (!clinic) {
      return NextResponse.json({ error: 'Klinikk ikke funnet' }, { status: 404 })
    }

    return NextResponse.json(clinic)
  } catch (error) {
    console.error('GET-feil:', error)
    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const clinicId = context.params.id

  try {
    const deletedClinic = await prisma.clinic.delete({
      where: { id: clinicId },
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
