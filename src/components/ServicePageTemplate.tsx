import { Service } from '@/data/services'
import CTAButton from './CTAButton'

interface ServicePageTemplateProps {
  service: Service
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
          {service.name}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {service.description}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* What It Helps */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-ink mb-6">What It Helps</h2>
          <ul className="space-y-3">
            {service.whatItHelps.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-ink mb-6">How It Works</h2>
          <ul className="space-y-3">
            {service.howItWorks.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Here */}
      <div className="bg-accent-2 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-ink mb-6">Why Choose Dr. Mostafavi</h2>
        <ul className="space-y-3">
          {service.whyHere.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-ink mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 mb-8">
          Schedule your consultation to discuss your treatment options.
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
  )
}
