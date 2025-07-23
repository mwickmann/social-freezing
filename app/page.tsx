'use client'

import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import GiftSection from './components/GiftSection'
import EmployeeSection from './components/EmployeeSection'
import CTAFooter from './components/CTAFooter'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-blue-400 px-4 py-10">
      <HeroSection />
      <InfoSection />
      <GiftSection />
      <EmployeeSection />
      <CTAFooter />
    </main>
  )
}
