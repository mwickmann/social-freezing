'use client'

import Image from 'next/image'

interface EmployeeCardProps {
  name: string
  title: string
  image: string
  description: string
}

export default function EmployeeCard({ name, title, image, description }: EmployeeCardProps) {
  return (
    <div className="bg-blue-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition">
      <div className="relative w-full h-52 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-xl mb-1 text-blue-500 font-semibold">{name}</h3>
      <p className="text-blue-600 mb-3 font-medium">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  )
}
