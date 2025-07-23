import InfoCard from './InfoCard'

const infoItems = [
  { title: 'Hva er Social Freezing?', image: '/images/4.png', href: '/info' },
  { title: 'Fordeler & Ulemper', image: '/images/5.png', href: '/pros' },
  { title: 'Hvor kan man finne klinikker?', image: '/images/9.png', href: '/clinics' },
]

export default function InfoSection() {
  return (
    <section className="max-w-7xl mx-auto mb-20 bg-white p-10 rounded-2xl shadow">
      <h2 className="text-3xl text-center mb-12">Informasjon</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {infoItems.map((item, i) => (
          <InfoCard key={i} {...item} />
        ))}
      </div>
    </section>
  )
}
