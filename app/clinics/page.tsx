'use client'

import { useEffect, useState } from 'react'

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

  if (loading) return <p>Laster klinikker...</p>

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Fertilitetsklinikker</h1>
      {clinics.length === 0 ? (
        <p>Ingen klinikker funnet.</p>
      ) : (
       <ul className="space-y-4">
  {clinics.map((clinic) => (
    <li
      key={clinic.id}
      className="border rounded p-4 shadow-sm hover:shadow-md transition"
    >
      {clinic.imageUrl && (
        <img
          src={clinic.imageUrl}
          alt={clinic.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}
      <h2 className="text-xl font-bold">{clinic.name}</h2>
      <p>📍 {clinic.location}</p>
      <p>💰 {clinic.price} kr</p>
      {clinic.website && (
        <a
          href={clinic.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Besøk nettside
        </a>
      )}
    </li>
  ))}
</ul>

      )}
    </div>
  )
}
