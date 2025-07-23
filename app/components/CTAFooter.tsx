'use client'

import Link from 'next/link'

export default function CtaFooter() {
  return (
    <section className="text-center mt-24">
      <h2 className="text-3xl mb-4">Lurer du på noe?</h2>
      <p className="text-gray-700 text-m mb-6">
        Henvend deg til oss nedenfor via vårt kontaktskjema, en av våre sykepleiere kontakter deg innen 24–48 timer.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-blue-400 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Gå til kontaktskjema
      </Link>
    </section>
  )
}
