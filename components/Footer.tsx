import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Gynecology', href: '/gynecology' },
    { name: 'Aesthetics', href: '/aesthetics' },
    { name: 'Cosmetic Gynecology', href: '/cosmetic-gyn' },
  ],
  support: [
    { name: 'Insurance & FAQs', href: '/insurance-faqs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Accessibility', href: '/accessibility' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: Facebook,
    },
    {
      name: 'YouTube',
      href: '#',
      icon: Youtube,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl container-padding py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Noreen Kamal-Mostafavi, MD PLLC</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <address className="not-italic text-neutral-300">
                  3860 Victory Blvd, 1st Floor<br />
                  Staten Island, NY 10314
                </address>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="tel:7184004588"
                  className="text-neutral-300 hover:text-white transition-colors duration-200"
                >
                  (718) 400-4588
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-neutral-300">
                  <div>Mon–Fri: 10 AM – 6 PM</div>
                  <div>Sat–Sun: Closed</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <a
                href="https://patientportal.advancedmd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
                aria-label="Book appointment - opens patient portal in new tab"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {navigation.social.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              )
            })}
          </div>
          
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Noreen Kamal-Mostafavi, MD PLLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}