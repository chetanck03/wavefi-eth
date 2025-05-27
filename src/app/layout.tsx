'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen arcade-bg">
            <Header />
            <main className="pt-20 relative z-20">
              {children}
            </main>
            <footer className="text-center py-4 text-sm text-gray-500">
              <p>© 2025 WaveFi | Built on monad chain</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}