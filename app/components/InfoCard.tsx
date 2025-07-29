'use client'
import Image from 'next/image'
import Link from 'next/link'

interface InfoCardProps {
  title: string
  image: string
  href: string
  description: string
}

export default function InfoCard({ title, image, href, description }: InfoCardProps) {
  return (
   <Link
  href={href}
  className="block bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
>
  <div className="relative w-full h-52 mb-4">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
  <h3 className="text-xl mb-2 text-gray-900">{title}</h3>
  <p className="text-base text-gray-800 mb-3">{description}</p>
  <span className="text-gray-600 hover:text-blue-600">Les mer</span>
</Link>

  )
}
