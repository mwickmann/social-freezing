'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface User {
  id: string
  email: string
  createdAt: string
  eggCount?: number // legg gjerne til dette i databasen hvis det ikke finnes ennå
}

export default function UserPage() {
  const { id } = useParams()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    fetch(`/api/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('User not found')
        return res.json()
      })
      .then(setUser)
      .catch((err) => setError(err.message))
  }, [id])

  if (error) return <p className="text-red-500">{error}</p>
  if (!user) return <p className="text-center mt-10 text-gray-500">Laster brukerdata...</p>

  return (
    <main className="min-h-screen bg-[#d5edfa]">
      {/* Header med ikon */}
      <div className="bg-[#c7e5f5] py-12 flex justify-center relative">
        <img src="/egg-icon.png" alt="Egg" className="w-16 h-16" />
      </div>

      {/* Innhold */}
      <section className="bg-white rounded-t-3xl px-6 py-8 -mt-6">
        <h1 className="text-3xl font-bold mb-4">Mine egg</h1>
        <p className="text-lg font-medium mb-8">
          Du har <strong>{user.eggCount ?? 10}</strong> egg i banken din
        </p>

        {/* Valg */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Valg</h2>
          <div className="space-y-4">
            <Option title="Jeg vil kontakte legen min" />
            <Option title="Jeg vil bestille time" />
          </div>
        </div>

        {/* Faktura */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Faktura</h2>
          <div className="space-y-4">
            <Option title="Mine betalte fakturaer" />
            <Option title="Din neste faktura" />
          </div>
        </div>
      </section>
    </main>
  )
}

function Option({ title }: { title: string }) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50">
      <span>{title}</span>
      <span className="text-xl text-gray-400">›</span>
    </div>
  )
}
