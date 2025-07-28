import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Quicksand } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import HamburgerMenu from './components/HamburgerMenu'


const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Social Freezing – Din digitale eggbank',
  description: 'Utforsk fertilitetsbevaring på dine premisser. Finn klinikker, lær om eggfrysning og ta kontroll over din fremtid. Laget av kvinner, for kvinner.',
   icons: {
    icon: '/favicon.png', 
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className={quicksand.variable}>
      <body className="flex min-h-screen flex-col bg-[#ffffff] text-[#afb1ce] font-heading">
 <header className="sticky top-0 z-50 bg-white shadow-sm">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 min-h-[72px]">
    {/* Logo */}
    <Link href="/" className="text-2xl tracking-tight text-blue-400 whitespace-nowrap">
      Social Freezing
    </Link>

    {/* Desktop-meny */}
    <div className="hidden md:block">
      <Navbar />
    </div>

    {/* Hamburger-meny */}
    <div className="md:hidden">
      <HamburgerMenu />
    </div>
  </div>
</header>


        {/* MAIN CONTENT */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#ffffff] border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
            <p>© {new Date().getFullYear()} Social Freezing – Alle rettigheter reservert.</p>
            <ul className="flex gap-6 mt-4 md:mt-0">
              <li>
                <Link href="/" className="hover:underline">Hjem</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">Om</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Kontakt</Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
