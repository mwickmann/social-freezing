import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Quicksand } from 'next/font/google'
import type { Metadata } from 'next'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand',
})

export const metadata: Metadata = {
  title: 'Social Freezing',
  description: 'Informasjon og støtte rundt fertilitetsbevaring',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no" className={quicksand.variable}>
      <body className="flex min-h-screen flex-col bg-[#ffffff] text-[#afb1ce] font-heading">
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#ffffff]">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl tracking-tight text-blue-400">
              Social Freezing
            </Link>
            <ul className="hidden md:flex gap-8 items-center font-medium text-sm">
              <li>
                <Link href="/" className="hover:underline underline-offset-4">
                  HJEM
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline underline-offset-4">
                  SPØRSMÅL &amp; SVAR
                </Link>
              </li>
                <li>
                <Link href="/about" className="hover:underline underline-offset-4">
                  OM
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-full bg-blue-200 text-white hover:bg-blue-800 transition font-semibold"
                >
                  LOGG INN
                </Link>
                
              </li>
            </ul>
          </nav>
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
                <Link href="/faq" className="hover:underline">Spørsmål & Svar</Link>
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
