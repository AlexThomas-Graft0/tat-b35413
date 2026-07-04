'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
    <main className="min-h-screen bg-[#F3E9D8] p-6 md:p-12">
      <div className="max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-[#111827]">Let’s Start Your Story</CardTitle>
          </CardHeader>
          <CardContent>
            {status === 'success' ? (
              <div className="p-4 bg-green-50 text-green-800 rounded border border-green-200">
                Enquiry submitted successfully. We will be in touch!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="name" required placeholder="Full Name" />
                <Input name="email" type="email" required placeholder="Email Address" />
                <Input name="phone" placeholder="Phone Number" />
                <Input name="placement" placeholder="Placement (e.g. Forearm)" />
                <Textarea name="size" placeholder="Size description and details" className="min-h-[100px]" />
                <Input name="date" placeholder="Preferred date range" />
                <Button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#C56A3C] hover:bg-[#A35932] text-white"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
                {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}