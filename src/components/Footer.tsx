import Link from 'next/link'
import CTAButton from './CTAButton'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Gynecology', href: '/gynecology' },
      { name: 'Aesthetics', href: '/aesthetics' },
      { name: 'Cosmetic Gynecology', href: '/cosmetic-gyn' },
    ],
    practice: [
      { name: 'Insurance FAQs', href: '/insurance-faqs' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  }

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Noreen Kamal-Mostafavi, MD PLLC
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>3860 Victory Blvd, 1st Floor</p>
              <p>Staten Island, NY 10314</p>
              <p>
                <a
                  href="tel:+17184004588"
                  className="hover:text-white transition-colors"
                >
                  (718) 400-4588
                </a>
              </p>
              <p className="mt-4">
                <strong>Hours:</strong> Mon–Fri 10–6; Sat–Sun Closed
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Practice</h4>
            <ul className="space-y-2">
              {footerLinks.practice.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">
              Ready to Schedule Your Appointment?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                variant="primary"
                size="lg"
                href="https://patientportal.advancedmd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90"
              >
                Book Appointment
              </CTAButton>
              <CTAButton
                variant="secondary"
                size="lg"
                href="tel:+17184004588"
                className="text-white border-white hover:bg-white hover:text-ink"
              >
                Call (718) 400-4588
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Noreen Kamal-Mostafavi, MD PLLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
