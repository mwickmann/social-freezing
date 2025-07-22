'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HiMenu, HiX } from 'react-icons/hi'

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('userId')
    router.push('/')
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md rounded-b-lg p-4 space-y-4 z-50">
          <button
            className="block w-full text-left text-gray-800 hover:text-blue-500"
            onClick={() => router.push('/users/' + localStorage.getItem('userId'))}
          >
            Min side
          </button>
          <button
            className="block w-full text-left text-gray-800 hover:text-blue-500"
            onClick={() => router.push('/kontakt')}
          >
            Kontakt oss
          </button>
          <button
            className="block w-full text-left text-gray-800 hover:text-red-500"
            onClick={handleLogout}
          >
            Logg ut
          </button>
        </div>
      )}
    </div>
  )
}
