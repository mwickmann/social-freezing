import Link from 'next/link';

export default function SocialFreezingPage() {
  return (
    <main className="min-h-screen bg-[#e6f0fa] text-[#1a237e] px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-6">Hva er Social Freezing?</h1>
        <p className="text-lg mb-4">
          Social Freezing, eller sosial nedfrysing av egg, er en metode hvor kvinner kan fryse ned eggene sine for senere bruk – uten medisinsk grunn. 
          Dette gir større frihet til å bestemme når man ønsker barn.
        </p>
        <p className="text-lg mb-6">
          I Norge ble dette tillatt i 2020, og det blir stadig vanligere. Det innebærer hormonsprøyter, egguthenting og nedfrysning av modne egg.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          ← Tilbake til forsiden
        </Link>
      </div>
    </main>
  );
}
