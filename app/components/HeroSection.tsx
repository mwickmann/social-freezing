'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto mb-20 px-6 py-10">
      <div className="relative h-[600px] md:h-[700px] w-full rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/10.png"
          alt="Eggfrysning illustrasjon"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16">
          <h1 className="text-3xl md:text-3xl text-gray-700 mb-4">
            Velkommen til din digitale eggbank!
          </h1>
          <p className="text-lg md:text-m text-gray-700 mb-6 max-w-xl">
            Ta kontroll over egen fertilitet – få innsikt, finn klinikker og lær mer om eggfrysning.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-gray-700 px-6 py-3 rounded-full hover:bg-blue-100 transition"
          >
            Kom i gang
          </Link>
        </div>
      </div>
    </section>
  )
}
