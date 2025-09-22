import { Metadata } from 'next'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Noreen Kamal-Mostafavi, MD PLLC. Important information about using our services and website.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-50 to-neutral-100 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6">
            <FileText className="h-8 w-8 text-neutral-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-700">
            Important information about using our services and website.
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

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website and our services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2>Medical Services</h2>
            <p>
              The information provided on this website is for general informational purposes only and 
              should not be considered medical advice. Always consult with a qualified healthcare provider 
              for medical diagnosis and treatment.
            </p>

            <h2>Appointment Scheduling</h2>
            <p>
              Appointments scheduled through our online portal or by phone are subject to confirmation. 
              We reserve the right to reschedule appointments when necessary due to emergencies or 
              unforeseen circumstances.
            </p>

            <h2>Cancellation Policy</h2>
            <p>
              We require at least 24 hours notice for appointment cancellations. Late cancellations or 
              no-shows may be subject to a fee.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment is due at the time of service unless other arrangements have been made in advance. 
              We accept cash, credit cards, and offer financing options for qualifying patients.
            </p>

            <h2>Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property 
              of Noreen Kamal-Mostafavi, MD PLLC and is protected by copyright and other intellectual 
              property laws.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided "as is" without any representations or warranties. 
              We make no warranties regarding the accuracy, completeness, or reliability of the information.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall Noreen Kamal-Mostafavi, MD PLLC be liable for any indirect, incidental, 
              special, or consequential damages arising out of or in connection with your use of this website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the State of New York.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these terms, please contact us:
            </p>
            <div className="bg-neutral-50 rounded-lg p-6 not-prose">
              <p className="font-semibold">Noreen Kamal-Mostafavi, MD PLLC</p>
              <p>3860 Victory Blvd, 1st Floor</p>
              <p>Staten Island, NY 10314</p>
              <p>Phone: (718) 400-4588</p>
            </div>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting to this website. Your continued use of our services constitutes acceptance of 
              any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}