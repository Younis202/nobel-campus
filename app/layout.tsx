import { Footer } from "@/components/footer";
import Navigation from "@/components/navigation/index";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nobelcampus.com"),
  title: {
    default: "Nobel Campus | International Study Abroad Programs",
    template: "%s | Nobel Campus",
  },
  description:
    "Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.",
  keywords: [
    "study abroad",
    "international education",
    "global studies",
    "student exchange",
    "cultural immersion",
    "academic programs",
    "international students",
    "education abroad",
    "global learning",
    "foreign exchange",
    "university abroad",
    "international experience",
    "study overseas",
    "global education",
    "student visa",
    "international scholarships",
    "cultural exchange",
    "worldwide education",
    "study destinations",
    "academic opportunities",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', type: 'image/png' }
  },
  manifest: "/site.webmanifest",
  authors: [{ name: "Nobel Campus" }],
  creator: "Nobel Campus",
  publisher: "Nobel Campus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nobelcampus.com",
    title: "Nobel Campus | International Study Abroad Programs",
    description:
      "Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.",
    siteName: "Nobel Campus",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Nobel Campus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nobel Campus | International Study Abroad Programs",
    description:
      "Nobel Campus offers transformative study abroad programs for students seeking global education opportunities. Experience cultural immersion and academic excellence worldwide.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nobelcampus.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="google-site-verification" content="kcsfCx-k4bpK-DlLYsIohm6J204uT1rhspltxOpL2hQ" />
        {/* Explicitly add favicon link for search engines */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
