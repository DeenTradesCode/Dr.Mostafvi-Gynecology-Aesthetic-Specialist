import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Dr. Noreen Mostafavi - OB/GYN & Aesthetics | Staten Island',
    template: '%s | Dr. Noreen Mostafavi'
  },
  description: 'Expert OB/GYN and Aesthetics care in Staten Island. Comprehensive women\'s health services including gynecology, cosmetic procedures, and aesthetic treatments.',
  keywords: ['OB/GYN', 'gynecology', 'aesthetics', 'Staten Island', 'women\'s health', 'cosmetic gynecology'],
  authors: [{ name: 'Dr. Noreen Mostafavi' }],
  creator: 'Dr. Noreen Mostafavi',
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
    siteName: 'Dr. Noreen Mostafavi',
    title: 'Dr. Noreen Mostafavi - OB/GYN & Aesthetics | Staten Island',
    description: 'Expert OB/GYN and Aesthetics care in Staten Island. Comprehensive women\'s health services.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Noreen Mostafavi - OB/GYN & Aesthetics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Noreen Mostafavi - OB/GYN & Aesthetics | Staten Island',
    description: 'Expert OB/GYN and Aesthetics care in Staten Island.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalClinic',
              name: 'Noreen Kamal-Mostafavi, MD PLLC',
              description: 'Expert OB/GYN and Aesthetics care in Staten Island',
              url: 'https://noreenmostafavimd.com',
              telephone: '+17184004588',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3860 Victory Blvd, 1st Floor',
                addressLocality: 'Staten Island',
                addressRegion: 'NY',
                postalCode: '10314',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 40.5894,
                longitude: -74.1505,
              },
              openingHours: 'Mo-Fr 10:00-18:00',
              medicalSpecialty: ['Obstetrics and Gynecology', 'Aesthetic Medicine'],
              physician: {
                '@type': 'Physician',
                name: 'Dr. Noreen Mostafavi',
                medicalSpecialty: ['Obstetrics and Gynecology', 'Aesthetic Medicine'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
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