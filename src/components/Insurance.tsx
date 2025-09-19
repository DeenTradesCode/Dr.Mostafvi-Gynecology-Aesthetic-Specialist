import { motion } from 'framer-motion'
import { CheckCircle, Phone, Calendar } from 'lucide-react'

const insurancePlans = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Kaiser Permanente',
  'Medicare',
  'Medicaid',
]

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
            Insurance & Coverage
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            We accept most major insurance plans to make quality care accessible
            and affordable.
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
                Don't see your insurance?
              </h4>
              <p className="mb-4 text-text-secondary-light dark:text-text-secondary-dark">
                Contact us to verify coverage or discuss payment options.
              </p>
              <button className="btn-outline text-sm">Contact Us</button>
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
              Verify Your Coverage
            </h3>

            <p className="mb-8 text-text-secondary-light dark:text-text-secondary-dark">
              Not sure if your insurance covers our services? We can help you
              verify your coverage and estimate your out-of-pocket costs.
            </p>

            <div className="space-y-4">
              <button className="btn-primary flex w-full items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call to Verify Coverage</span>
              </button>

              <button className="btn-secondary flex w-full items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </button>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
              <h4 className="mb-2 font-semibold text-heading-light dark:text-heading-dark">
                Payment Options
              </h4>
              <ul className="space-y-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                <li>• Insurance billing</li>
                <li>• Flexible payment plans</li>
                <li>• HSA/FSA accepted</li>
                <li>• Cash discounts available</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
