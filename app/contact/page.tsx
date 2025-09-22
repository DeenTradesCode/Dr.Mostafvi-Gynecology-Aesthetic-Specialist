'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-neutral-700">
            Get in touch with our team. We're here to help with your questions and scheduling needs.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-spacing">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Address</h3>
                    <address className="text-neutral-600 not-italic">
                      3860 Victory Blvd, 1st Floor<br />
                      Staten Island, NY 10314
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a
                      href="tel:7184004588"
                      className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    >
                      (718) 400-4588
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Hours</h3>
                    <div className="text-neutral-600">
                      <div>Monday – Friday: 10 AM – 6 PM</div>
                      <div>Saturday – Sunday: Closed</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-100 rounded-xl h-64 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive map coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for your message. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-yellow-800">
                      <strong>Important:</strong> Do not include medical details or personal health information in this form. 
                      For medical questions, please call our office or use the patient portal.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical"
                      placeholder="How can we help you? (No medical details please)"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 py-16">
        <div className="mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book online through our patient portal or call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://patientportal.advancedmd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 hover:bg-neutral-50 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
              aria-label="Book appointment - opens patient portal in new tab"
            >
              Book Online
            </a>
            <a
              href="tel:7184004588"
              className="bg-primary-700 hover:bg-primary-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
              aria-label="Call Dr. Mostafavi at (718) 400-4588"
            >
              Call (718) 400-4588
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}