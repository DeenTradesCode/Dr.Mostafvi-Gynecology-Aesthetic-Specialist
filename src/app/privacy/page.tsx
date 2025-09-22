import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Dr. Noreen Mostafavi\'s practice website.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      <section className="bg-white section-padding">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-6">
              We collect information you provide directly to us, such as when you create an account, 
              schedule an appointment, or contact us. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-6">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and process your requests.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this privacy policy.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-ink mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about this privacy policy, please contact us at:
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
