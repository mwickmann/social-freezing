'use client'

import Image from 'next/image'

export default function GiftSection() {
  return (
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
            src="/images/1.png"
            alt="Gift choice"
            fill
            className="rounded-xl object-cover shadow"
          />
        </div>
      </div>
    </section>
  )
}
