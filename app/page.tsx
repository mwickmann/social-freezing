'use client'

import Link from 'next/link'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-blue-400 px-4 py-10">
<section className="relative max-w-7xl mx-auto mb-20 px-6 py-10">
  {/* Bilde i bakgrunnen */}
  <div className="relative h-[600px] md:h-[700px] w-full rounded-xl overflow-hidden shadow-lg">
   <Image
  src="/images/10.png"
  alt="Eggfrysning illustrasjon"
  fill
  priority
  className="object-cover"
  sizes="100vw"
/>


{/* Tekst over bildet */}
<div className="absolute inset-0 flex flex-col justify-start items-start px-8 md:px-16 pt-30 md:pt-80">
  <h1 className="text-3xl md:text-3xl text-gray-500 mb-4">
    Velkommen til din digitale eggbank!
  </h1>
  <p className="text-lg md:text-m text-gray-500 mb-6 max-w-xl">
    Ta kontroll over egen fertilitet – få innsikt, finn klinikker og lær mer om eggfrysning.
  </p>
  <Link
    href="/signup"
    className="inline-block bg-white text-gray-400 px-6 py-3 rounded-full hover:bg-blue-100 transition"
  >
    Kom i gang
  </Link>
</div>

  </div>
</section>

<section className="max-w-7xl mx-auto mb-20 bg-white p-10 rounded-2xl shadow">
  <h2 className="text-3xl text-center mb-12">Informasjon</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      { title: 'Hva er Social Freezing?', image: '/images/4.png', href: '/info' },
      { title: 'Fordeler & Ulemper', image: '/images/5.png', href: '/pros' },
      { title: 'Hvor kan man finne klinikker?', image: '/images/6.png', href: '/clinics' },
    ].map((item, i) => (
      <Link
        key={i}
        href={item.href}
        className="block bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
      >
        <div className="relative w-full h-52 mb-4">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover rounded-lg"
    sizes="(max-width: 768px) 100vw, 33vw"
  />
</div>

        <h3 className="text-xl mb-2">{item.title}</h3>
        <p className="text-sm text-gray-700 mb-3">Social Freezing er din digitale eggbank.</p>
        <span className="text-gray-400">Les mer</span>
      </Link>
    ))}
  </div>
</section>



      {/* Gift Yourself Section */}
      <section className="bg-white py-14 px-8 mb-20 rounded-2xl max-w-6xl mx-auto shadow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl mb-4">Gi en gave til din egen fremtid!</h2>
            <p className="text-gray-700 text-lg">
              Hos oss garanterer vi en trygg opplevelse, og vi har høy kvalitet på alle våre ansatte.
            </p>
          </div>
          <div className="relative h-44 w-64">
  <Image
    src="/images/4.png"
    alt="Gift choice"
    fill
    className="rounded-xl object-cover shadow"
  />
</div>

        </div>
      </section>

      {/* Most Common Questions */}
      <section className="max-w-7xl mx-auto mb-20 bg-white p-10 rounded-2xl shadow">
        <h2 className="text-3xl text-center mb-12">Ofte stilte spørsmål</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: 'Vitusminum', image: '/images/7.png' },
            { title: 'Merion ipsum', image: '/images/8.png' },
            { title: 'Cae fe ausum', image: '/images/women.png' },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-3">Lorem ipsum dolor sit amet.</p>
              <a href="#" className="text-gray-400 font-medium underline">Les mer</a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center mt-24">
        <h2 className="text-3xl mb-4">Lurer du på noe?</h2>
        <p className="text-gray-700 text-m mb-6">
          Henvend deg til oss nedenfor via vårt kontaktskjema, en av våre sykepleiere kontakter deg innen 24-48 timer.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-400 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Gå til kontaktskjema
        </Link>
      </section>
    </main>
  )
}
