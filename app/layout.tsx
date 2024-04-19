'use client';

import './globals.css';

import { Roboto } from 'next/font/google';

import { Header } from '@/src/widgets/header';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
