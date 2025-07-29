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
        className="text-3xl p-2 text-gray-700"
        aria-label="Toggle menu"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu panel */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 px-6 py-6 space-y-6 rounded-b-xl">
          <Link href="/" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium text-base">
            HJEM
          </Link>
          <Link href="/contact" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium text-base">
            KONTAKT
          </Link>
          <Link href="/about" onClick={closeMenu} className="block text-gray-700 hover:text-blue-600 font-medium text-base">
            OM
          </Link>
          {userId ? (
            <>
              <Link
                href={`/users/${userId}`}
                onClick={closeMenu}
                className="block w-full text-center py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-700 transition"
              >
                MIN SIDE
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-center py-2 rounded-full bg-red-100 text-red-600 font-semibold hover:bg-red-300 transition"
              >
                LOGG UT
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={closeMenu}
              className="block w-full text-center py-2 rounded-full bg-blue-300 text-white font-semibold hover:bg-blue-600 transition"
            >
              LOGG INN
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
