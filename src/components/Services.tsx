import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Heart, Sparkles, Scissors } from 'lucide-react'

const services = [
  {
    id: 'gynecology',
    title: 'Gynecology',
    icon: Heart,
    description: "Comprehensive women's health services",
    services: [
      'Annual Exams & Pap Smears',
      'Family Planning & Contraception',
      'Menopause Management',
      'Pelvic Pain Treatment',
      'Sexual Health Counseling',
    ],
  },
  {
    id: 'aesthetics',
    title: 'Aesthetic Medicine',
    icon: Sparkles,
    description: 'Advanced cosmetic treatments',
    services: [
      'Botox & Dermal Fillers',
      'Laser Treatments',
      'Chemical Peels',
      'Microneedling',
      'Body Contouring',
    ],
  },
  {
    id: 'cosmetics',
    title: 'Cosmetic Procedures',
    icon: Scissors,
    description: 'Surgical and non-surgical options',
    services: [
      'Vaginal Rejuvenation',
      'Labiaplasty',
      'Breast Procedures',
      'Tummy Tuck',
      'Liposuction',
    ],
  },
]

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            We offer comprehensive gynecology and aesthetic services tailored to
            meet your unique needs and goals.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-hover cursor-pointer"
              onClick={() =>
                setActiveService(
                  activeService === service.id ? null : service.id
                )
              }
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blush-rose/10 dark:bg-blush-rose/20">
                    <service.icon className="h-6 w-6 text-blush-rose" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                      {service.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-text-secondary-light transition-transform duration-200 dark:text-text-secondary-dark ${
                    activeService === service.id ? 'rotate-180' : ''
                  }`}
                />
              </div>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
                      {service.services.map((item, itemIndex) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="flex items-center space-x-2 text-text-secondary-light dark:text-text-secondary-dark"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blush-rose"></div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <button className="btn-primary mt-6 w-full">
                      Learn More
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
