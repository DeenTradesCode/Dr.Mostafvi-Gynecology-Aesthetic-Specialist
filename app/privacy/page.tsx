import { Metadata } from 'next'
import { Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Noreen Kamal-Mostafavi, MD PLLC. Learn how we protect your personal and health information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-50 to-neutral-100 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-neutral-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-700">
            Your privacy and the security of your personal information are our top priorities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-neutral-500 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you schedule an appointment, 
              fill out forms, or communicate with our office. This may include your name, contact information, 
              insurance details, and medical history.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide medical care and treatment</li>
              <li>Schedule and manage appointments</li>
              <li>Process insurance claims and billing</li>
              <li>Communicate with you about your care</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>HIPAA Compliance</h2>
            <p>
              As a healthcare provider, we are committed to protecting your health information in accordance 
              with the Health Insurance Portability and Accountability Act (HIPAA). We maintain physical, 
              electronic, and procedural safeguards to protect your personal health information.
            </p>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties without 
              your consent, except as necessary for treatment, payment, healthcare operations, or as required by law.
            </p>

            <h2>Website Information</h2>
            <p>
              Our website may collect certain information automatically, such as your IP address, browser type, 
              and pages visited. This information is used to improve our website and services.
            </p>

            <h2>Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal health information</li>
              <li>Request corrections to your information</li>
              <li>Request restrictions on the use of your information</li>
              <li>File a complaint if you believe your privacy rights have been violated</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="bg-neutral-50 rounded-lg p-6 not-prose">
              <p className="font-semibold">Noreen Kamal-Mostafavi, MD PLLC</p>
              <p>3860 Victory Blvd, 1st Floor</p>
              <p>Staten Island, NY 10314</p>
              <p>Phone: (718) 400-4588</p>
            </div>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by 
              posting the new policy on this page with an updated effective date.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}