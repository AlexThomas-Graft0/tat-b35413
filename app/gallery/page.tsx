import { Suspense } from 'react';

async function GalleryContent() {
  // Simulating a data fetch that was causing the blocking error
  // Wrapping this in Suspense allows Next.js to prerender the page shell
  const images = await Promise.resolve(['/tattoo1.jpg', '/tattoo2.jpg']);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img, i) => (
        <div key={i} className="aspect-square bg-gray-200 animate-pulse" />
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#F3E9D8] p-8">
      <h1 className="text-4xl font-serif mb-8 text-[#C56A3C]">Gallery</h1>
      <Suspense fallback={<div className="text-[#C56A3C]">Loading gallery...</div>}>
        <GalleryContent />
      </Suspense>
    </main>
  );
}