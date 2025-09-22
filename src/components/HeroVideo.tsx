'use client'

import { useEffect, useRef } from 'react'
import CTAButton from './CTAButton'

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed, which is expected in some browsers
              console.log('Autoplay blocked by browser')
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        preload="metadata"
        loop
        muted
        playsInline
        poster="/api/placeholder/1920/1080"
      >
        <source
          src="https://noreenmostafavimd.com/wp-content/uploads/2022/03/Noreen-header-short-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Personalized Women's Health, Done Right.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Expert OB/GYN & Aesthetics care in Staten Island.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="primary"
              size="lg"
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Appointment
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              href="tel:+17184004588"
              className="text-white border-white hover:bg-white hover:text-ink"
            >
              Call (718) 400-4588
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
