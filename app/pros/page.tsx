import Link from 'next/link';

export default function ProsPage() {
  return (
    <main className="min-h-screen bg-[#e6f0fa] text-[#1a237e] px-4 py-10">
      <section className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow">
        <h1 className="text-3xl text-center mb-10">Hva er fordelene?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kort 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <img
              src="/images/fordel1.png"
              alt="Kontroll"
              className="mx-auto w-full h-70 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2">Mer kontroll</h3>
            <p className="text-sm text-gray-700">
              Du får mer kontroll over egen reproduksjon og fremtidige valg.
            </p>
          </div>

          {/* Kort 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <img
              src="/images/fordel2.png"
              alt="Timing"
              className="mx-auto w-full h-70 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2">Riktig tidspunkt</h3>
            <p className="text-sm text-gray-700">
              Mulighet til å vente på riktig partner eller tid i livet.
            </p>
          </div>
          {/* Kort 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <img
              src="/images/fordel3.png"
              alt="Timing"
              className="mx-auto w-full h-70 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2">Riktig tidspunkt</h3>
            <p className="text-sm text-gray-700">
              Mulighet til å vente på riktig partner eller tid i livet.
            </p>
          </div>
             {/* Kort 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-sm text-center hover:shadow-md transition">
            <img
              src="/images/fordel4.png"
              alt="Timing"
              className="mx-auto w-full h-100 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl mb-2">Riktig tidspunkt</h3>
            <p className="text-sm text-gray-700">
              Mulighet til å vente på riktig partner eller tid i livet.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Tilbake til forsiden
          </Link>
        </div>
      </section>
    </main>
  );
}
