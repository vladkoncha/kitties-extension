import './globals.css';

import { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { CatsProvider } from '@/src/_app/store/cats';
import { EditorProvider } from '@/src/_app/store/editor';
import { ThemeProvider } from '@/src/_app/theme-context';
import { Header } from '@/src/widgets/header';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Котики',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ThemeProvider>
          <EditorProvider>
            <CatsProvider>
              <Header />
              {children}
            </CatsProvider>
          </EditorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
