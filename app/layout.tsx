import '@/app/globals.css';
import { Footer } from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-[#111827]">
        {children}
        <Footer />
      </body>
    </html>
  );
}