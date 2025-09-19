import { motion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Gynecology', href: '#services' },
    { label: 'Aesthetic Medicine', href: '#services' },
    { label: 'Cosmetic Procedures', href: '#services' },
    { label: 'Consultations', href: '#contact' },
  ],
  about: [
    { label: 'About Dr. Mastafavi', href: '#about' },
    { label: 'Patient Testimonials', href: '#testimonials' },
    { label: 'Insurance & Coverage', href: '#insurance' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'HIPAA Notice', href: '/hipaa' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Practice Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Dr. Mastafavi
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                Providing expert gynecology and aesthetic services with
                personalized care and the latest medical technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-blush-rose" />
                  <span className="text-sm text-gray-300">
                    123 Medical Plaza, Suite 100
                    <br />
                    City, State 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blush-rose" />
                  <span className="text-sm text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blush-rose" />
                  <span className="text-sm text-gray-300">
                    info@drmastafavi.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 flex-shrink-0 text-blush-rose" />
                  <span className="text-sm text-gray-300">
                    Mon-Fri: 8:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 2:00 PM
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-lg font-semibold text-white">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors duration-200 hover:text-blush-rose"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-lg font-semibold text-white">About</h4>
              <ul className="space-y-3">
                {footerLinks.about.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors duration-200 hover:text-blush-rose"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal & Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-lg font-semibold text-white">Legal</h4>
              <ul className="mb-8 space-y-3">
                {footerLinks.legal.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors duration-200 hover:text-blush-rose"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h5 className="mb-4 text-sm font-semibold text-white">
                  Follow Us
                </h5>
                <div className="flex space-x-4">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 transition-colors duration-200 hover:bg-blush-rose"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Dr. Noreen Mastafavi. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              HIPAA Compliant • Licensed Medical Practice
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
