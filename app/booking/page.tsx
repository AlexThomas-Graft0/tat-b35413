'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function BookingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('booking_enquiries').insert({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      placement: formData.get('placement'),
      size_description: formData.get('size'),
      date_preference: formData.get('date'),
    });

    setStatus(error ? 'error' : 'success');
  }

  return (
    <main className="min-h-screen bg-[#F3E9D8] p-8">
      <div className="max-w-xl mx-auto bg-white p-8 rounded shadow-sm">
        <h1 className="text-3xl font-serif mb-6">Let’s Start Your Story</h1>
        {status === 'success' ? (
          <div className="p-4 bg-green-100 text-green-800 rounded">Enquiry submitted successfully. We will be in touch!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" required placeholder="Name" className="w-full p-3 border rounded" />
            <input name="email" type="email" required placeholder="Email" className="w-full p-3 border rounded" />
            <input name="phone" placeholder="Phone" className="w-full p-3 border rounded" />
            <input name="placement" placeholder="Placement (e.g. Forearm)" className="w-full p-3 border rounded" />
            <textarea name="size" placeholder="Size description" className="w-full p-3 border rounded" />
            <input name="date" placeholder="Preferred date range" className="w-full p-3 border rounded" />
            <button 
              disabled={status === 'loading'}
              className="w-full bg-[#C56A3C] text-white p-3 rounded font-bold disabled:opacity-50"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
            </button>
            {status === 'error' && <p className="text-red-600">Something went wrong. Please try again.</p>}
          </form>
        )}
      </div>
    </main>
  );
}