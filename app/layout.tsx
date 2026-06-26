import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    default: 'Safe Campus Initiative - FUOYE Emergency Response Hub',
    template: '%s | Safe Campus Initiative - FUOYE',
  },
  description:
    'Strengthening Emergency Preparedness, First Aid, and Drug Safety Through Smart QR Infrastructure at Federal University Oye-Ekiti. Instant access to emergency protocols, contacts, and health resources.',
  keywords: [
    'FUOYE',
    'emergency',
    'first aid',
    'campus safety',
    'QR code',
    'health center',
    'Federal University Oye-Ekiti',
    'drug safety',
  ],
  openGraph: {
    title: 'Safe Campus Initiative - FUOYE Emergency Response Hub',
    description:
      'Immediate access to emergency response protocols through QR code-enabled access points installed across FUOYE campus.',
    type: 'website',
    locale: 'en_NG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-body text-surface-dark bg-surface-light antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}