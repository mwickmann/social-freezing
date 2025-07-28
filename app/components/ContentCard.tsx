'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ContentCardProps {
  image: string
  title: string
  text: string
}

export default function ContentCard({ image, title, text }: ContentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center">
      <div className="relative w-full h-52 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <h3 className="text-2xl font-semibold text-blue-400 mb-2">{title}</h3>
     <p className="text-gray-700 text-base leading-loose whitespace-pre-line">{text}</p>
<Link href="/" className="text-blue-400 hover:underline mt-6 block">
  ← Tilbake til forsiden
</Link>
    </div>
  )
}
