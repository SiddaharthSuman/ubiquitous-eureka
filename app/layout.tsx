import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Yanone_Kaffeesatz } from 'next/font/google';
import { Container } from '@mui/material';

import './styles/globals.scss';
import ThemeRegistry from './themes/ThemeRegistry';
import Header from './components/header/Header';
import { Footer } from './components/footer';

const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  description:
    'Leading AI consulting services helping businesses transform with artificial intelligence solutions',
  title: 'AI Consulting Solutions | Transform Your Business',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${yanoneKaffeesatz.variable}`}>
        <ThemeRegistry>
          <Header />
          <Container component={'main'} maxWidth="lg">
            {children}
          </Container>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
