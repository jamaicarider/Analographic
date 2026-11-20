import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

const neueHaas = localFont({
  src: [
    {
      path: '../../public/Neue Haas Grotesk Display (Round Dots) Family/NeueHaasGrotDispRound-55Roman-Trial.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Neue Haas Grotesk Display (Round Dots) Family/NeueHaasGrotDispRound-65Medium-Trial.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/Neue Haas Grotesk Display (Round Dots) Family/NeueHaasGrotDispRound-75Bold-Trial.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
  display: 'swap',
});

export const metadata: Metadata = { title: 'Analographic', description: 'Analographic — estúdio criativo.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={neueHaas.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
