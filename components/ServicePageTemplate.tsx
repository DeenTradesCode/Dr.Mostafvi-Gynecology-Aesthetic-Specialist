import { ReactNode } from 'react'
import { Clock, CheckCircle, Award } from 'lucide-react'

interface ServicePageTemplateProps {
  title: string
  description: string
  whatItHelps: string[]
  howItWorks: string[]
  visitTime?: string
  children?: ReactNode
}

export default function ServicePageTemplate({
  title,
  description,
  whatItHelps,
  howItWorks,
  visitTime,
  children
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="mx-auto max-w-4xl container-padding">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            {title}
          </h1>
          <p className="text-xl text-neutral-700 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-spacing">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* What It Helps */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary-600" />
                What It Helps
              </h2>
              <ul className="space-y-3">
                {whatItHelps.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary-600" />
                How It Works
              </h2>
              <ul className="space-y-3">
                {howItWorks.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-neutral-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Why Choose Dr. Mostafavi?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Award className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Board-certified expertise</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700">Minimally invasive techniques</span>
              </div>
            </div>
          </div>

          {/* Visit Time */}
          {visitTime && (
            <div className="bg-primary-50 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary-600" />
                <span className="text-neutral-700">
                  <strong>Typical visit time:</strong> {visitTime}
                </span>
              </div>
            </div>
          )}

          {/* Additional Content */}
          {children}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Consultation?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Take the first step toward better health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              aria-label="Book appointment - opens patient portal in new tab"
            >
              Book Appointment
            </a>
            <a
              href="tel:7184004588"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
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