import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import {
  doctorProfile,
  doctorAdditionalBio,
  doctorStats,
} from '@/data/marketing'

export function DoctorBio() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-placeholder shadow-2xl lg:h-[500px]">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-white/20">
                    <span className="text-6xl">👩‍⚕️</span>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold">
                    {doctorProfile.name}
                  </h3>
                  <p className="text-xl opacity-90">{doctorProfile.title}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-blush-rose/20"></div>
              <div className="absolute bottom-6 left-6 h-16 w-16 rounded-full bg-warm-bronze/20"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-6 text-heading-light dark:text-heading-dark">
              Meet {doctorProfile.name}
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
              {doctorProfile.bio}
            </p>

            <p className="mb-8 text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
              {doctorAdditionalBio}
            </p>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-semibold text-heading-light dark:text-heading-dark">
                Credentials & Experience
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {doctorProfile.credentials.map((credential, index) => (
                  <motion.div
                    key={credential}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-blush-rose"></div>
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">
                      {credential}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {doctorStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blush-rose/10 dark:bg-blush-rose/20">
                    <stat.icon className="h-6 w-6 text-blush-rose" />
                  </div>
                  <div className="mb-1 text-2xl font-bold text-heading-light dark:text-heading-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Schedule Consultation</span>
              </button>
              <button className="btn-outline">View Full Bio</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
