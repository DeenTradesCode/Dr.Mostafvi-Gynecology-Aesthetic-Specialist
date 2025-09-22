import { Metadata } from 'next'
import { Eye, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility statement for Noreen Kamal-Mostafavi, MD PLLC. Our commitment to making our services accessible to all patients.',
}

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-50 to-neutral-100 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-full mb-6">
            <Eye className="h-8 w-8 text-neutral-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-neutral-700">
            We are committed to ensuring our services are accessible to all patients.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="mx-auto max-w-4xl container-padding">
          <div className="prose prose-lg max-w-none">
            <h2>Our Commitment</h2>
            <p>
              Noreen Kamal-Mostafavi, MD PLLC is committed to providing equal access to our healthcare 
              services for all patients, including those with disabilities. We strive to ensure that 
              our website and physical facilities are accessible to everyone.
            </p>

            <h2>Website Accessibility</h2>
            <p>
              We have designed our website to be accessible and user-friendly for people with disabilities. 
              Our website includes:
            </p>
            <ul>
              <li>Alternative text for images</li>
              <li>Keyboard navigation support</li>
              <li>High contrast color schemes</li>
              <li>Clear and consistent navigation</li>
              <li>Readable fonts and appropriate text sizing</li>
              <li>Screen reader compatibility</li>
            </ul>

            <h2>Physical Accessibility</h2>
            <p>Our medical office is designed to be accessible to patients with disabilities:</p>
            <ul>
              <li>Wheelchair accessible entrance and facilities</li>
              <li>Accessible parking spaces</li>
              <li>Wide doorways and hallways</li>
              <li>Accessible restroom facilities</li>
              <li>Adjustable examination tables</li>
            </ul>

            <h2>Communication Assistance</h2>
            <p>We provide various forms of communication assistance:</p>
            <ul>
              <li>Sign language interpreters (with advance notice)</li>
              <li>Large print materials</li>
              <li>Verbal descriptions of procedures</li>
              <li>Patient advocates to assist with communication</li>
            </ul>

            <h2>Assistive Technology</h2>
            <p>
              Our website is compatible with common assistive technologies including:
            </p>
            <ul>
              <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
              <li>Voice recognition software</li>
              <li>Keyboard navigation</li>
              <li>Browser zoom functionality</li>
            </ul>

            <h2>Standards Compliance</h2>
            <p>
              We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
              standards and comply with the Americans with Disabilities Act (ADA) requirements.
            </p>

            <h2>Ongoing Improvements</h2>
            <p>
              We continuously work to improve the accessibility of our services. We regularly:
            </p>
            <ul>
              <li>Review and update our website for accessibility</li>
              <li>Train our staff on disability awareness and accommodation</li>
              <li>Evaluate our physical facilities for accessibility improvements</li>
              <li>Seek feedback from patients about their accessibility needs</li>
            </ul>

            <h2>Feedback and Assistance</h2>
            <p>
              If you encounter any accessibility barriers or need assistance accessing our services, 
              please contact us. We are committed to working with you to find solutions.
            </p>

            <div className="bg-primary-50 rounded-lg p-6 not-prose">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Us for Accessibility Support</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <a href="tel:7184004588" className="text-primary-600 hover:text-primary-700">
                    (718) 400-4588
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary-600 mt-0.5" />
                  <div>
                    <p className="text-neutral-700">
                      Email us or use our contact form to request accommodations or report accessibility issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Third-Party Content</h2>
            <p>
              While we strive to ensure accessibility across our entire website, some third-party 
              content or services may not be fully accessible. We work with our vendors to improve 
              accessibility whenever possible.
            </p>

            <h2>Updates to This Statement</h2>
            <p>
              This accessibility statement may be updated periodically to reflect changes in our 
              accessibility practices and compliance efforts.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}