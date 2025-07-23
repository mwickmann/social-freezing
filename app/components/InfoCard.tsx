'use client'
import Image from 'next/image'
import Link from 'next/link'

interface InfoCardProps {
  title: string
  image: string
  href: string
}

export default function InfoCard({ title, image, href }: InfoCardProps) {
  return (
    <Link
      href={href}
      className="block bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition"
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
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-3">Social Freezing er din digitale eggbank.</p>
      <span className="text-gray-400">Les mer</span>
    </Link>
  )
}
