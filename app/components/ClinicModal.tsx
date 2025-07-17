'use client'

import { useEffect, useState } from 'react'

interface ClinicModalProps {
  clinicId: string
  onClose: () => void
}

export default function ClinicModal({ clinicId, onClose }: ClinicModalProps) {
  const [clinic, setClinic] = useState<any>(null)

  useEffect(() => {
    const fetchClinic = async () => {
      const res = await fetch(`/api/clinics/${clinicId}`)
      const data = await res.json()
      setClinic(data)
    }

    fetchClinic()
  }, [clinicId])

  if (!clinic) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-2">{clinic.name}</h2>
        <p className="text-gray-600 mb-1">Sted: {clinic.location}</p>
        <p className="text-gray-600 mb-1">Pris: {clinic.price} kr</p>
        {clinic.website && (
          <a href={clinic.website} target="_blank" className="text-blue-500 underline">
            Besøk nettside
          </a>
        )}
        {clinic.imageUrl && (
          <img
            src={clinic.imageUrl}
            alt={clinic.name}
            className="mt-4 rounded-lg w-full h-48 object-cover"
          />
        )}
      </div>
    </div>
  )
}
