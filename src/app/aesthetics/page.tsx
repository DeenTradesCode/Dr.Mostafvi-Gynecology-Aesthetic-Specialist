import { Metadata } from 'next'
import ServiceTile from '@/components/ServiceTile'
import CTAButton from '@/components/CTAButton'
import { serviceCategories } from '@/data/services'

export const metadata: Metadata = {
  title: 'Aesthetics Services',
  description: 'Advanced aesthetic treatments including Botox, fillers, laser hair removal, skin tightening, and more.',
}

export default function AestheticsPage() {
  const services = serviceCategories.aesthetics.services

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              Aesthetics Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced cosmetic treatments to enhance your natural beauty. 
              Safe, effective procedures with stunning results.
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
              >
                Call (718) 400-4588
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceTile key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Enhance Your Beauty?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your aesthetic goals and discover the perfect treatment for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="secondary"
              size="lg"
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-accent hover:bg-white/90"
            >
              Book Appointment
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              href="tel:+17184004588"
              className="text-white border-white hover:bg-white hover:text-accent"
            >
              Call (718) 400-4588
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
