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
    <nav className="flex justify-between items-center w-full">
      {/* Logo */}
      <Link href="/" className="text-2xl tracking-tight text-blue-400">
        Social Freezing
      </Link>

      {/* Desktop meny */}
      <ul className="hidden md:flex gap-8 items-center font-medium text-sm">
        <li><Link href="/" className="hover:underline underline-offset-4">HJEM</Link></li>
        <li><Link href="/faq" className="hover:underline underline-offset-4">SPØRSMÅL & SVAR</Link></li>
        <li><Link href="/about" className="hover:underline underline-offset-4">OM</Link></li>
        <li>
          {userId ? (
            <Link
              href={`/users/${userId}`}
              className="px-4 py-2 rounded-full bg-blue-400 text-white hover:bg-green-600 transition font-semibold"
            >
              MIN SIDE
            </Link>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-blue-200 text-white hover:bg-blue-800 transition font-semibold"
            >
              LOGG INN
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
