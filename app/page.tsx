import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E9D8] text-[#111827]">
      <nav className="p-6 flex justify-between items-center border-b border-[#C56A3C]/20">
        <h1 className="text-2xl font-bold font-serif text-[#C56A3C]">tatŵ</h1>
        <div className="space-x-6">
          <Link href="/gallery" className="hover:text-[#C56A3C]">Gallery</Link>
          <Link href="/booking" className="bg-[#C56A3C] text-white px-4 py-2 rounded">Book Now</Link>
        </div>
      </nav>

      <header className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-serif mb-6">Your Story, Inked in Heritage.</h2>
        <p className="text-xl mb-8 leading-relaxed">
          Based in the heart of Cardiff, tatŵ is a studio dedicated to the art of Cymru. 
          We specialize in custom designs that honor Welsh history, language, and landscape.
        </p>
        <div className="space-x-4">
          <Link href="/booking" className="inline-block bg-[#C56A3C] text-white px-8 py-3 rounded font-bold">Start Your Design</Link>
          <Link href="/gallery" className="inline-block border border-[#C56A3C] text-[#C56A3C] px-8 py-3 rounded font-bold">View Gallery</Link>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-serif mb-6">Ink with Roots</h3>
          <p className="text-lg leading-loose">
            We believe a tattoo is more than just decoration; it’s a connection to your past and a statement of who you are today. 
            Whether you’re looking for traditional Welsh symbolism, modern script in <em>Cymraeg</em>, or a custom piece inspired 
            by our mountains and coastlines, our artists bring your vision to life with precision and care.
          </p>
          <p className="mt-8 italic text-[#C56A3C]">Croeso i tatŵ. Welcome to the studio.</p>
        </div>
      </section>
    </main>
  );
}