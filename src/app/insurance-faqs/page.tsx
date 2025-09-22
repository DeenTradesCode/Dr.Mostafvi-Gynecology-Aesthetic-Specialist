import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Insurance FAQs',
  description: 'Frequently asked questions about insurance coverage, accepted plans, and billing for Dr. Noreen Mostafavi\'s practice.',
}

export default function InsuranceFAQsPage() {
  const faqs = [
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, and many others. Please contact our office to verify your specific plan coverage.',
    },
    {
      question: 'Do I need a referral for gynecology services?',
      answer: 'Most gynecology services do not require a referral, but some insurance plans may require one for specialist visits. We recommend checking with your insurance provider.',
    },
    {
      question: 'Are aesthetic treatments covered by insurance?',
      answer: 'Most aesthetic treatments are considered cosmetic and are not covered by insurance. However, some procedures may be covered if they are medically necessary. We can help you understand your coverage options.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, credit cards (Visa, MasterCard, American Express), and HSA/FSA cards. We also offer payment plans for certain procedures.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans for qualifying procedures. Please speak with our billing department to discuss your options.',
    },
    {
      question: 'How do I verify my insurance coverage?',
      answer: 'You can call your insurance provider directly or contact our office with your insurance information. We\'re happy to help verify your coverage before your appointment.',
    },
    {
      question: 'What if my insurance doesn\'t cover a procedure?',
      answer: 'If a procedure is not covered by insurance, we will discuss all available options with you, including self-pay rates and payment plans.',
    },
    {
      question: 'Do you accept Medicare?',
      answer: 'Yes, we accept Medicare for covered services. Please note that Medicare typically does not cover cosmetic procedures.',
    },
    {
      question: 'Can I use my HSA or FSA for treatments?',
      answer: 'Yes, you can use your Health Savings Account (HSA) or Flexible Spending Account (FSA) for eligible medical treatments. Cosmetic procedures are generally not eligible.',
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your insurance card, photo ID, list of current medications, and any relevant medical records. We also recommend arriving 15 minutes early to complete paperwork.',
    },
  ]

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-6">
              Insurance & Billing FAQs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get answers to common questions about insurance coverage, billing, and payment options.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container max-w-4xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help you understand your insurance coverage and payment options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="secondary"
              size="lg"
              href="tel:+17184004588"
              className="bg-white text-accent hover:bg-white/90"
            >
              Call (718) 400-4588
            </CTAButton>
            <CTAButton
              variant="secondary"
              size="lg"
              href="/contact"
              className="text-white border-white hover:bg-white hover:text-accent"
            >
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}
