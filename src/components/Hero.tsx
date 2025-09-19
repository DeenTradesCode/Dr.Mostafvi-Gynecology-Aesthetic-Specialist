import { motion } from 'framer-motion'
import { Calendar, MapPin, Star } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-bg-light to-lavender-mist/20 dark:from-bg-dark dark:to-gray-800/50">
      {/* Background Pattern */}
      <div className="bg-pattern absolute inset-0 opacity-5"></div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-xl mb-6 text-heading-light dark:text-heading-dark"
            >
              Expert Care for{' '}
              <span className="text-gradient">Women's Health</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 max-w-2xl text-lg text-text-secondary-light dark:text-text-secondary-dark md:text-xl"
            >
              Dr. Noreen Mastafavi provides comprehensive gynecology and
              aesthetic services with a focus on personalized, compassionate
              care for women of all ages.
            </motion.p>

            {/* Specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              {['Gynecology', 'Aesthetic Medicine', 'Cosmetic Procedures'].map(
                (specialty, index) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-blush-rose/10 px-4 py-2 text-sm font-medium text-blush-rose dark:bg-blush-rose/20"
                  >
                    {specialty}
                  </span>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </button>
              <button className="btn-outline flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>View Location</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12 flex items-center justify-center space-x-6 lg:justify-start"
            >
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  4.9/5 Rating
                </span>
              </div>
              <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                500+ Happy Patients
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-placeholder shadow-2xl lg:h-[500px]">
              {/* Placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white/20">
                    <span className="text-4xl">👩‍⚕️</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">
                    Dr. Noreen Mastafavi
                  </h3>
                  <p className="text-lg opacity-90">
                    Gynecology & Aesthetic Specialist
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-blush-rose/20"></div>
              <div className="absolute bottom-4 left-4 h-12 w-12 rounded-full bg-warm-bronze/20"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-blush-rose">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-2 h-3 w-1 rounded-full bg-blush-rose"
          />
        </div>
      </motion.div>
    </section>
  )
}
