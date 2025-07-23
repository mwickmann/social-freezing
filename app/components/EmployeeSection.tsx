import EmployeeCard from './EmployeeCard'

const employees = [
  {
    name: 'Ingrid Haug',
    title: 'Fertilitetsykepleier',
    image: '/images/spl3.png',
    description: 'Ingrid har jobbet med fertilitet i over 10 år og brenner for å hjelpe kvinner med å ta informerte valg.',
  },
  {
    name: 'Emma Nilsen',
    title: 'Gynekolog',
    image: '/images/dr3.png',
    description: 'Emma har spesialisert seg på reproduktiv helse og har bred erfaring fra norske fertilitetsklinikker.',
  },
  {
    name: 'Sofie Berg',
    title: 'Klinikk-koordinator',
    image: '/images/spl1.png',
    description: 'Sofie sørger for at du får en sømløs og trygg opplevelse når du tar kontakt med oss.',
  },
]

export default function EmployeeSection() {
  return (
    <section className="max-w-7xl mx-auto mb-20 bg-white p-10 rounded-2xl shadow">
      <h2 className="text-3xl text-center mb-12">Våre ansatte</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {employees.map((person, i) => (
          <EmployeeCard key={i} {...person} />
        ))}
      </div>
    </section>
  )
}
