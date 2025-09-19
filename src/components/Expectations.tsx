import { motion } from 'framer-motion'
import { Tablet, FileText, Shield, Clock } from 'lucide-react'

const expectations = [
  {
    icon: Tablet,
    title: 'Digital Experience',
    description: 'Paperless check-in and digital forms for a streamlined visit',
  },
  {
    icon: FileText,
    title: 'Comprehensive Care',
    description: 'Detailed health assessments and personalized treatment plans',
  },
  {
    icon: Shield,
    title: 'Privacy & Safety',
    description: 'HIPAA-compliant practices with the highest safety standards',
  },
  {
    icon: Clock,
    title: 'Efficient Scheduling',
    description: 'Flexible appointment times with minimal wait periods',
  },
]

export function Expectations() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="heading-lg mb-6 text-heading-light dark:text-heading-dark">
            What to Expect
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            We've modernized the patient experience with advanced technology and
            personalized care to ensure your comfort and convenience.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expectations.map((expectation, index) => (
            <motion.div
              key={expectation.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blush-rose/10 dark:bg-blush-rose/20">
                <expectation.icon className="h-8 w-8 text-blush-rose" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-heading-light dark:text-heading-dark">
                {expectation.title}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">
                {expectation.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
