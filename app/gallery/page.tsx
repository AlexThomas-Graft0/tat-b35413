import { supabase } from '@/lib/supabaseClient';

export default async function GalleryPage() {
  const { data: tattoos } = await supabase.from('tattoos').select('*');

  return (
    <main className="min-h-screen bg-[#F3E9D8] p-8">
      <h1 className="text-4xl font-serif mb-12 text-center">Curated in Cymru</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tattoos?.map((t) => (
          <div key={t.id} className="bg-white p-2 shadow-sm rounded">
            <img src={t.image_url} alt={t.title || 'Tattoo'} className="w-full h-64 object-cover" />
            <p className="mt-2 font-bold">{t.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}