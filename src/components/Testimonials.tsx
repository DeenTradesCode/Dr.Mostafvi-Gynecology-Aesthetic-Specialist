import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    text: 'Dr. Mastafavi provided exceptional care during my procedure. Her expertise and compassion made me feel completely comfortable throughout the entire process.',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: 2,
    name: 'Emily Chen',
    text: "I've been seeing Dr. Mastafavi for years and she always takes the time to listen and explain everything clearly. Highly recommend her services!",
    rating: 5,
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    text: "The aesthetic treatments I received exceeded my expectations. Dr. Mastafavi's attention to detail and natural results are outstanding.",
    rating: 5,
    date: '3 weeks ago',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section
      id="testimonials"
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
            Patient Testimonials
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary-light dark:text-text-secondary-dark">
            Hear from our patients about their experiences and the quality of
            care they received.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-900 md:p-12"
          >
            {/* Rating */}
            <div className="mb-6 flex justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-current text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="mb-8 text-xl leading-relaxed text-text-primary-light dark:text-text-primary-dark md:text-2xl">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Patient Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-placeholder">
                <span className="text-2xl">👩</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-heading-light dark:text-heading-dark">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {testimonials[currentIndex].date}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-200 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ChevronLeft className="h-6 w-6 text-text-secondary-light dark:text-text-secondary-dark" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex
                      ? 'bg-blush-rose'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors duration-200 hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <ChevronRight className="h-6 w-6 text-text-secondary-light dark:text-text-secondary-dark" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
