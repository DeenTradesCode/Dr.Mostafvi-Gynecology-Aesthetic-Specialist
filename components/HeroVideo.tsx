'use client'

import { useEffect, useRef } from 'react'

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
              // Autoplay failed, which is fine
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source
          src="https://noreenmostafavimd.com/wp-content/uploads/2022/03/Noreen-header-short-1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-padding max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Personalized Women's Health, Done Right.
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up">
          Expert OB/GYN & Aesthetics care in Staten Island.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="https://patientportal.advancedmd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-black/40"
            aria-label="Book appointment - opens patient portal in new tab"
          >
            Book Appointment
          </a>
          <a
            href="tel:7184004588"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg border border-white/30 transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/40"
            aria-label="Call Dr. Mostafavi at (718) 400-4588"
          >
            Call (718) 400-4588
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}