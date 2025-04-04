import { ExitIntentPopup } from '@/components/exit-intent-popup';
import { Footer } from '@/components/footer';
import Navigation from '@/components/navigation/index';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nobelcampus.com'),
  title: {
    default: 'Nobel Campus | International Study Abroad Programs',
    template: '%s | Nobel Campus'
  },
  description: 'Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.',
  keywords: [
    'study abroad',
    'international education',
    'global studies',
    'student exchange',
    'cultural immersion',
    'academic programs',
    'international students',
    'education abroad',
    'global learning',
    'foreign exchange',
    'university abroad',
    'international experience',
    'study overseas',
    'global education',
    'student visa',
    'international scholarships',
    'cultural exchange',
    'worldwide education',
    'study destinations',
    'academic opportunities'
  ],
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png'
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png'
      }
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        sizes: 'any'
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  },
  manifest: '/site.webmanifest',
  authors: [{ name: 'Nobel Campus' }],
  creator: 'Nobel Campus',
  publisher: 'Nobel Campus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nobelcampus.com',
    title: 'Nobel Campus | International Study Abroad Programs',
    description: 'Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.',
    siteName: 'Nobel Campus'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nobel Campus | International Study Abroad Programs',
    description: 'Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://nobelcampus.com'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
        {/* <ExitIntentPopup /> */}
      </body>
    </html>
  );
}