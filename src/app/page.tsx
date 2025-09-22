import HeroVideo from '@/components/HeroVideo'
import ServiceTile from '@/components/ServiceTile'
import CTAButton from '@/components/CTAButton'
import { serviceCategories } from '@/data/services'

export default function HomePage() {
  const testimonials = [
    "Dr. Mostafavi made me feel comfortable and heard throughout my entire treatment.",
    "The aesthetic results exceeded my expectations. I feel more confident than ever.",
    "Professional, caring, and knowledgeable. I highly recommend her services.",
  ]

  return (
    <>
      <HeroVideo />
      
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
              Comprehensive Women's Health Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care across gynecology, aesthetics, and cosmetic gynecology services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <div key={key} className="text-center">
                <div className="bg-accent-2 rounded-xl p-8 mb-6">
                  <h3 className="text-2xl font-semibold text-ink mb-4">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <CTAButton
                    variant="primary"
                    href={`/${key}`}
                    className="w-full"
                  >
                    View Services
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-bg">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most requested treatments and procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              serviceCategories.gynecology.services[0], // Birth Control
              serviceCategories.aesthetics.services[0], // Botox & Fillers
              serviceCategories.gynecology.services[14], // MonaLisa Touch
              serviceCategories.aesthetics.services[4], // Morpheus8
              serviceCategories['cosmetic-gyn'].services[0], // Labiaplasty
              serviceCategories.gynecology.services[1], // Endometriosis
            ].map((service) => (
              <ServiceTile key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-accent-2 rounded-xl p-8 text-center">
                <p className="text-gray-700 italic mb-4">"{testimonial}"</p>
                <div className="text-accent font-semibold">— Patient</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and take the first step toward better health and confidence.
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
    </>
  )
}
