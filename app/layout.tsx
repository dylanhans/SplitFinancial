import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import LoadingOverlay from '@/components/MainLayout/LoadingOverlay';
import { LoadingProvider } from './context/LoadingContext';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibm_Plex_Serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
});

export const metadata: Metadata = {
  title: "Split Financial",
  description: "Finance payments for in-store purchases",
  icons: {
    icon: '/icons/testlogo4.jpeg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibm_Plex_Serif.variable}`}>
        <LoadingProvider>
          <LoadingOverlay />
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
