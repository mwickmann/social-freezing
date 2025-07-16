// app/api/clinics/route.ts
import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

const defaultClinics = [
  {
    id: 'default-1',
    name: 'Oslo Fertility Center',
    location: 'Oslo',
    contact: 'kontakt@oslofertility.no'
  },
  {
    id: 'default-2',
    name: 'Fertilitetssenteret',
    location: 'Bergen',
    contact: 'post@fertilitetssenteret.no'
  }
]

export async function GET() {
  try {
    const clinics = await prisma.clinic.findMany()

    if (!clinics || clinics.length === 0) {
      return NextResponse.json(defaultClinics)
    }

    return NextResponse.json(clinics)
  } catch (error) {
    console.error('GET-feil:', error)
    return NextResponse.json(defaultClinics)
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, location, price, website, imageUrl } = await req.json()

    if (!name || !location || price === undefined) {
      return NextResponse.json(
        { error: 'name, location og price er påkrevd' },
        { status: 400 }
      )
    }

    const parsedPrice = Number(price)
    if (!Number.isInteger(parsedPrice) || parsedPrice < 0) {
      return NextResponse.json(
        { error: 'price må være et positivt heltall' },
        { status: 400 }
      )
    }

    const clinic = await prisma.clinic.create({
      data: {
        name,
        location,
        price: parsedPrice,
        website,
        imageUrl, 
      },
    })

return NextResponse.json(clinic, { status: 201 })
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('POST-feil:', error.message, error)
    return NextResponse.json(
      { error: error.message ?? 'Kunne ikke opprette klinikk' },
      { status: 500 }
    )
  }

  console.error('POST-feil: ukjent feil', error)
  return NextResponse.json(
    { error: 'Kunne ikke opprette klinikk (ukjent feil)' },
    { status: 500 }
  )
}
}