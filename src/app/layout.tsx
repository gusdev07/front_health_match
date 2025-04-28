import './../styles/globals.css';
import CoreProvider from '@/provider/core-provider';

import { Poppins, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Health Match',
  description: 'Health Match',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' className={`${poppins.variable} ${montserrat.variable}`}>
      <body className='font-poppins antialiased'>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
