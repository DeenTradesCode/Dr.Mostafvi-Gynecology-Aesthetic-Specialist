import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Dr. Noreen Mostafavi\'s practice website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Use License</h2>
            <p className="text-gray-700 mb-6">
              Permission is granted to temporarily download one copy of the materials on this website 
              for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Medical Disclaimer</h2>
            <p className="text-gray-700 mb-6">
              The information on this website is not intended to replace professional medical advice, 
              diagnosis, or treatment. Always seek the advice of your physician or other qualified 
              health provider with any questions you may have regarding a medical condition.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Limitations</h2>
            <p className="text-gray-700 mb-6">
              In no event shall Dr. Noreen Mostafavi or her practice be liable for any damages 
              arising out of the use or inability to use the materials on this website.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these terms, please contact us:
            </p>
            <div className="bg-accent-2 rounded-xl p-6">
              <p className="text-gray-700">
                <strong>Noreen Kamal-Mostafavi, MD PLLC</strong><br />
                3860 Victory Blvd, 1st Floor<br />
                Staten Island, NY 10314<br />
                Phone: (718) 400-4588
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
