import ContentCard from '@/components/ContentCard'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#e6f0fa] text-gray-700 px-4 py-10">
      <div className="max-w-xl mx-auto mb-10">
        <ContentCard
          image="/images/3.png"
          title="Om oss"
          text="Social Freezing er utviklet av kvinner, for kvinner. Vi vet hvor viktig det er å ha kontroll over egne valg, og hvor krevende det kan være å finne gode, trygge og økonomisk tilgjengelige løsninger for fertilitet.

Hos oss står brukeren i sentrum. Vi ønsker å gi deg verktøyene, kunnskapen og tryggheten du trenger for å ta informerte valg om egen fremtid.

Vi samarbeider med ledende fertilitetsklinikker i Norge for å gjøre eggfrysning mer tilgjengelig, forståelig og menneskelig. Plattformen vår er bygget for å være enkel å bruke, og tilpasset dine behov, uansett hvor du er i livet.

Takk for at du stoler på oss."
        />
      </div>
    </main>
  )
}
