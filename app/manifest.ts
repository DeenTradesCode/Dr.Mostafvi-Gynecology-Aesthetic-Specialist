import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dr. Noreen Mostafavi - OB/GYN & Aesthetics',
    short_name: 'Dr. Mostafavi',
    description: 'Expert OB/GYN and Aesthetics care in Staten Island',
    start_url: '/',
    display: 'standalone',
    background_color: '#FBFAFB',
    theme_color: '#7B4B7F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
