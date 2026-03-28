import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'L Plus P Driving School | Driving Lessons Sydney | Est. 1997',
  description:
    "L Plus P Driving School — Sydney's most trusted driving school since 1997. Expert driving lessons in North Ryde, Ryde, Epping, Castle Hill and 20+ suburbs. Learner drivers, test prep, overseas licence conversion. Call Mick 0469 370 978.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0f1623] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
