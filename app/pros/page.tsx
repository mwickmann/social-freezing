import Link from 'next/link';

export default function ProsPage() {
  return (
    <main className="min-h-screen bg-[#e6f0fa] text-blue-400 px-4 py-10 space-y-16">

      {/* Fordeler */}
      <section className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl text-center mb-10">Hva er fordelene?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Mer kontroll',
              image: '/images/fordel1.png',
              text: 'Du får mer kontroll over egen reproduksjon og fremtidige valg.',
            },
            {
              title: 'Riktig tidspunkt',
              image: '/images/fordel2.png',
              text: 'Mulighet til å vente på riktig partner eller tid i livet.',
            },
            {
              title: 'Karriere og frihet',
              image: '/images/fordel3.png',
              text: 'Gir fleksibilitet for karriere, reise eller selvutvikling.',
            },
            {
              title: 'Trygghet',
              image: '/images/fordel4.png',
              text: 'Gir trygghet om du ønsker barn senere i livet.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ulemper */}
      <section className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h2 className="text-3xl text-center mb-10">Hva er ulempene?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Kostbart',
              image: '/images/2.png',
              text: 'Prosessen kan være dyr og ikke alltid dekket av det offentlige.',
            },
            {
              title: 'Ingen garanti',
              image: '/images/8.png',
              text: 'Det er ingen garanti for at eggene fører til graviditet senere.',
            },
            {
              title: 'Krevende behandling',
              image: '/images/6.png',
              text: 'Hormonsprøyter og egguttak kan være fysisk og psykisk krevende.',
            },
            {
              title: 'Aldersbegrensning',
              image: '/images/3.png',
              text: 'Man må gjennomføre innsetting før en viss alder.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-red-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tilbake-link */}
      <div className="text-center">
        <Link href="/" className="text-blue-400 hover:underline">
          ← Tilbake til forsiden
        </Link>
      </div>
    </main>
  );
}
