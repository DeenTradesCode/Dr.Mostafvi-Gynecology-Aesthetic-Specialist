import { Phone, MapPin, Clock } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="section-spacing bg-primary-600">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Schedule your consultation today and discover personalized care that puts your health and wellness first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <a
              href="tel:7184004588"
              className="text-primary-100 hover:text-white transition-colors duration-200"
            >
              (718) 400-4588
            </a>
          </div>

          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <address className="text-primary-100 not-italic">
              3860 Victory Blvd, 1st Floor<br />
              Staten Island, NY 10314
            </address>
          </div>

          <div className="text-center text-white">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-2">Hours</h3>
            <div className="text-primary-100">
              Mon–Fri: 10 AM – 6 PM<br />
              Sat–Sun: Closed
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://patientportal.advancedmd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 inline-block"
            aria-label="Book appointment - opens patient portal in new tab"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  )
}