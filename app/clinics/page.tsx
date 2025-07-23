'use client'

import { useEffect, useState } from 'react'
import ClinicModal from '@/components/ClinicModal'

interface Clinic {
  id: string
  name: string
  location: string
  price: number
  website?: string
  imageUrl?: string
  createdAt: string
}

export default function ClinicsPage() {
  const [clinics, setClinics] = useState<Clinic[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedClinicId, setSelectedClinicId] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/clinics')
      .then((res) => res.json())
      .then((data) => {
        setClinics(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Feil ved henting av klinikker:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="text-center text-blue-400 mt-10">Laster klinikker...</p>
  }

  return (
    <main className="min-h-screen bg-[#e6f0fa] text-gray-700 px-4 py-10">
      <section className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl text-center text-blue-400 font-semibold mb-10">
          Finn en fertilitetsklinikk
        </h1>

        {clinics.length === 0 ? (
          <p className="text-center">Ingen klinikker funnet.</p>
        ) : (
          <div className="flex flex-col space-y-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.id}
                className="bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => setSelectedClinicId(clinic.id)}
              >
                {clinic.imageUrl && (
                  <img
                    src={clinic.imageUrl}
                    alt={clinic.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-xl font-semibold mb-1">{clinic.name}</h2>
                <p className="text-sm text-gray-700 mb-1">{clinic.location}</p>
                <p className="text-sm text-gray-700 mb-2">{clinic.price} kr</p>
                {clinic.website && (
                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Besøk nettside
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {selectedClinicId && (
          <ClinicModal
            clinicId={selectedClinicId}
            onClose={() => setSelectedClinicId(null)}
          />
        )}
      </section>
    </main>
  )
}
