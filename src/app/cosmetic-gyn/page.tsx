import { Metadata } from 'next'
import ServiceTile from '@/components/ServiceTile'
import CTAButton from '@/components/CTAButton'
import { serviceCategories } from '@/data/services'

export const metadata: Metadata = {
  title: 'Cosmetic Gynecology Services',
  description: 'Specialized intimate wellness procedures including labiaplasty, vaginal revitalization, and sexual function enhancement.',
}

export default function CosmeticGynPage() {
  const services = serviceCategories['cosmetic-gyn'].services

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              Cosmetic Gynecology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized intimate wellness procedures to enhance comfort, confidence, and quality of life. 
              Expert care in a compassionate, private setting.
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
            Ready to Enhance Your Intimate Wellness?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a private consultation to discuss your intimate wellness goals in a safe, comfortable environment.
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
