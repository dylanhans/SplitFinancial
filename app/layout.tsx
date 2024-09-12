import { ReactNode, Suspense } from 'react';
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import LoadingOverlay from '@/components/MainLayout/LoadingOverlay'; // Ensure this is the correct path
import { LoadingProvider } from './context/LoadingContext'; // Ensure this is the correct path

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
          <Suspense fallback={<LoadingOverlay />}>
            <LoadingOverlay />
            {children}
          </Suspense>
        </LoadingProvider>
      </body>
    </html>
  );
}