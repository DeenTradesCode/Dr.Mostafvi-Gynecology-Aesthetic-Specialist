import { Metadata } from 'next'
import { Shield, HelpCircle, Phone, CreditCard } from 'lucide-react'
import { generateFAQJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Insurance & FAQs',
  description: 'Insurance information and frequently asked questions about our gynecology and aesthetic services. Learn about coverage and payment options.',
  keywords: ['insurance', 'FAQ', 'payment', 'coverage', 'gynecology', 'aesthetics'],
}

const insurancePlans = [
  'Aetna',
  'Blue Cross Blue Shield',
  'Cigna',
  'Empire BlueCross BlueShield',
  'Fidelis Care',
  'Healthfirst',
  'MetroPlus',
  'Oxford Health Plans',
  'United Healthcare',
  'WellCare'
]

const faqs = [
  {
    question: 'What insurance plans do you accept?',
    answer: 'We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, Empire, Fidelis Care, Healthfirst, MetroPlus, Oxford, United Healthcare, and WellCare. Please call to verify your specific plan coverage.'
  },
  {
    question: 'Do I need a referral for gynecology services?',
    answer: 'Most gynecology services do not require a referral, but some insurance plans may require one. We recommend checking with your insurance provider or calling our office to confirm.'
  },
  {
    question: 'Are aesthetic treatments covered by insurance?',
    answer: 'Most aesthetic treatments are considered elective and are not covered by insurance. However, some procedures may be covered if they are medically necessary. We offer flexible payment options for aesthetic services.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards (Visa, MasterCard, American Express), and offer financing options for qualifying patients. Payment is due at the time of service unless other arrangements have been made.'
  },
  {
    question: 'How do I verify my insurance coverage?',
    answer: 'You can verify your coverage by calling the number on your insurance card or by calling our office. We recommend verifying coverage before your appointment to understand any copays or deductibles.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer financing options through third-party providers for qualifying patients. This allows you to spread the cost of treatment over time with affordable monthly payments.'
  },
  {
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records from previous providers. Arrive 15 minutes early to complete paperwork.'
  },
  {
    question: 'How far in advance should I schedule?',
    answer: 'We recommend scheduling routine appointments 2-4 weeks in advance. For urgent concerns, we offer same-day or next-day appointments when available. New patient appointments may require more advance notice.'
  }
]

export default function InsuranceFAQsPage() {
  const jsonLd = generateFAQJsonLd(faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
          <div className="mx-auto max-w-4xl container-padding text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Insurance & FAQs
            </h1>
            <p className="text-xl text-neutral-700">
              Everything you need to know about insurance coverage, payment options, and frequently asked questions.
            </p>
          </div>
        </section>

        {/* Insurance Plans */}
        <section className="section-spacing">
          <div className="mx-auto max-w-4xl container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Accepted Insurance Plans
              </h2>
              <p className="text-lg text-neutral-600">
                We work with most major insurance providers to make your care accessible and affordable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {insurancePlans.map((plan) => (
                <div
                  key={plan}
                  className="bg-neutral-50 rounded-lg p-4 text-center font-medium text-neutral-700"
                >
                  {plan}
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-6 text-center">
              <CreditCard className="h-8 w-8 text-primary-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Verify Your Coverage
              </h3>
              <p className="text-neutral-700 mb-4">
                Don't see your plan listed? Call us to verify coverage and discuss payment options.
              </p>
              <a
                href="https://patientportal.advancedmd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mr-4"
                aria-label="Verify coverage - opens patient portal in new tab"
              >
                Verify Coverage & Book
              </a>
              <a
                href="tel:7184004588"
                className="btn-outline"
                aria-label="Call Dr. Mostafavi at (718) 400-4588"
              >
                Call (718) 400-4588
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-spacing bg-neutral-50">
          <div className="mx-auto max-w-4xl container-padding">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Find answers to common questions about our services, insurance, and appointments.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-spacing">
          <div className="mx-auto max-w-4xl container-padding text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our friendly staff is here to help with insurance verification, scheduling, and any other questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7184004588"
                className="btn-primary flex items-center justify-center gap-2"
                aria-label="Call Dr. Mostafavi at (718) 400-4588"
              >
                <Phone className="h-5 w-5" />
                Call (718) 400-4588
              </a>
              <a
                href="https://patientportal.advancedmd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Book appointment - opens patient portal in new tab"
              >
                Book Online
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}