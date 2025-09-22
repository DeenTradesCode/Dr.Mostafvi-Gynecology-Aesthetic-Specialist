import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Noreen Kamal-Mostafavi, MD PLLC | Women\'s Health & Wellness',
    template: '%s | Dr. Mostafavi'
  },
  description: 'Expert OB/GYN & Aesthetics care in Staten Island. Personalized women\'s health, done right. Board-certified physician specializing in gynecology, obstetrics, and aesthetic treatments.',
  keywords: ['gynecologist', 'obstetrician', 'women\'s health', 'aesthetics', 'Staten Island', 'NY', 'cosmetic gynecology'],
  authors: [{ name: 'Noreen Kamal-Mostafavi, MD' }],
  creator: 'Noreen Kamal-Mostafavi, MD PLLC',
  publisher: 'Noreen Kamal-Mostafavi, MD PLLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://noreenmostafavimd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noreenmostafavimd.com',
    title: 'Noreen Kamal-Mostafavi, MD PLLC | Women\'s Health & Wellness',
    description: 'Expert OB/GYN & Aesthetics care in Staten Island. Personalized women\'s health, done right.',
    siteName: 'Dr. Mostafavi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noreen Kamal-Mostafavi, MD PLLC | Women\'s Health & Wellness',
    description: 'Expert OB/GYN & Aesthetics care in Staten Island. Personalized women\'s health, done right.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}