import { motion } from 'framer-motion'
import { CheckCircle, Phone, Calendar } from 'lucide-react'
import { insurancePlans, insuranceContent } from '@/data/marketing'

export function Insurance() {
  return (
    <section
      id="insurance"
      className="section-padding bg-white dark:bg-gray-900"
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
            {insuranceContent.headline}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            {insuranceContent.subheading}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Insurance Plans */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-2xl font-semibold text-heading-light dark:text-heading-dark">
              Accepted Insurance Plans
            </h3>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              {insurancePlans.map((plan, index) => (
                <motion.div
                  key={plan}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-text-primary-light dark:text-text-primary-dark">
                    {plan}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-lg bg-blush-rose/10 p-6 dark:bg-blush-rose/20">
              <h4 className="mb-2 font-semibold text-heading-light dark:text-heading-dark">
                {insuranceContent.callout.title}
              </h4>
              <p className="mb-4 text-text-secondary-light dark:text-text-secondary-dark">
                {insuranceContent.callout.description}
              </p>
              <button className="btn-outline text-sm">
                {insuranceContent.callout.ctaLabel}
              </button>
            </div>
          </motion.div>

          {/* Verification CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-blush-rose/10 to-warm-bronze/10 p-8 dark:from-blush-rose/20 dark:to-warm-bronze/20"
          >
            <h3 className="mb-6 text-2xl font-semibold text-heading-light dark:text-heading-dark">
              {insuranceContent.verificationSection.title}
            </h3>

            <p className="mb-8 text-text-secondary-light dark:text-text-secondary-dark">
              {insuranceContent.verificationSection.description}
            </p>

            <div className="space-y-4">
              <button className="btn-primary flex w-full items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>
                  {insuranceContent.verificationSection.primaryCtaLabel}
                </span>
              </button>

              <button className="btn-secondary flex w-full items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {insuranceContent.verificationSection.secondaryCtaLabel}
                </span>
              </button>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h4 className="mb-2 font-semibold text-heading-light dark:text-heading-dark">
                Payment Options
              </h4>
              <ul className="space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {insuranceContent.paymentOptions.map(option => (
                  <li key={option}>• {option}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
