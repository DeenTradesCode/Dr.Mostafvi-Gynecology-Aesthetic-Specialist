import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Medical Plaza, Suite 100\nCity, State 12345',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@drmastafavi.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri: 8:00 AM - 5:00 PM\nSat: 9:00 AM - 2:00 PM',
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg mb-6 text-heading-light dark:text-heading-dark">
            Contact Us
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            Ready to schedule your appointment or have questions? We're here to
            help.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-semibold text-heading-light dark:text-heading-dark">
              Get in Touch
            </h3>

            <div className="mb-8 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blush-rose/10 dark:bg-blush-rose/20">
                    <info.icon className="h-6 w-6 text-blush-rose" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-heading-light dark:text-heading-dark">
                      {info.label}
                    </h4>
                    <p className="whitespace-pre-line text-text-secondary-light dark:text-text-secondary-dark">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="flex h-64 w-full items-center justify-center rounded-lg bg-placeholder">
              <div className="text-center text-white">
                <MapPin className="mx-auto mb-2 h-12 w-12" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm opacity-90">Click to view location</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-900"
          >
            <h3 className="mb-6 text-2xl font-semibold text-heading-light dark:text-heading-dark">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="form-label">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a service</option>
                  <option value="gynecology">Gynecology</option>
                  <option value="aesthetics">Aesthetic Medicine</option>
                  <option value="cosmetics">Cosmetic Procedures</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="form-input"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary flex w-full items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
