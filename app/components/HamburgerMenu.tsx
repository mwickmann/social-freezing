'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId')
    setUserId(storedUserId)
  }, [])

  const closeMenu = () => setOpen(false)

  const handleLogout = () => {
    localStorage.removeItem('userId')
    closeMenu()
    window.location.href = '/'
  }

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl p-2"
        aria-label="Toggle menu"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu panel */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 px-6 py-6 space-y-6 rounded-b-xl">
          <Link href="/" onClick={closeMenu} className="block text-gray-800 hover:text-blue-500 font-medium text-sm">
            HJEM
          </Link>
          <Link href="/faq" onClick={closeMenu} className="block text-gray-800 hover:text-blue-500 font-medium text-sm">
            SPØRSMÅL & SVAR
          </Link>
          <Link href="/about" onClick={closeMenu} className="block text-gray-800 hover:text-blue-500 font-medium text-sm">
            OM
          </Link>
          {userId ? (
            <>
              <Link
                href={`/users/${userId}`}
                onClick={closeMenu}
                className="block w-full text-center py-2 rounded-full bg-blue-400 text-white font-semibold hover:bg-green-600 transition"
              >
                MIN SIDE
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-center py-2 rounded-full bg-red-100 text-red-500 font-semibold hover:bg-red-200 transition"
              >
                LOGG UT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="block w-full text-center py-2 rounded-full bg-blue-200 text-white font-semibold hover:bg-blue-800 transition"
            >
              LOGG INN
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
