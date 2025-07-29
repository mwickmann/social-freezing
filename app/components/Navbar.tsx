'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    setUserId(storedUserId)
  }, [])

  return (
    <nav className="w-full flex items-center justify-between">
  
      {/* Menyvalg */}
     <ul className="hidden md:flex gap-8 items-center font-medium text-base text-gray-700">
  <li>
    <Link href="/" className="hover:underline underline-offset-4">HJEM</Link>
  </li>
  <li>
    <Link href="/contact" className="hover:underline underline-offset-4">KONTAKT</Link>
  </li>
  <li>
    <Link href="/about" className="hover:underline underline-offset-4">OM</Link>
  </li>
  <li>
    {userId ? (
      <Link
        href={`/users/${userId}`}
        className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
      >
        MIN SIDE
      </Link>
    ) : (
      <Link
        href="/login"
        className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-semibold"
      >
        LOGG INN
      </Link>
    )}
  </li>
</ul>

    </nav>
  )
}
