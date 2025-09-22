import Link from 'next/link'
import { Metadata } from 'next'
import { Sparkles, ArrowRight } from 'lucide-react'
import { aestheticsServices } from '@/data/services'

export const metadata: Metadata = {
  title: 'Aesthetic Services',
  description: 'Advanced aesthetic treatments to help you look and feel your best. Expert cosmetic procedures and non-surgical treatments in Staten Island.',
  keywords: ['aesthetics', 'cosmetic treatments', 'botox', 'fillers', 'laser treatments', 'Staten Island'],
}

export default function AestheticsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Aesthetic Services
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Advanced aesthetic treatments using the latest technology to help you look and feel your best with natural, beautiful results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aestheticsServices.map((service) => (
              <Link
                key={service.slug}
                href={`/aesthetics/${service.slug}`}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary-200"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {service.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 text-sm font-medium group-hover:gap-2 gap-1 transition-all duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Schedule Your Aesthetic Consultation
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Discover how our advanced treatments can help you achieve your aesthetic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
              aria-label="Book appointment - opens patient portal in new tab"
            >
              Book Consultation
            </a>
            <a
              href="tel:7184004588"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
              aria-label="Call Dr. Mostafavi at (718) 400-4588"
            >
              Call (718) 400-4588
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}