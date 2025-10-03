import { motion } from 'framer-motion'
import { CheckCircle, Calendar, User, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function ConfirmationStep() {
  const navigate = useNavigate()

  const handleCreateAccount = () => {
    // Navigate to account creation or dashboard
    console.log('Create account clicked')
  }

  const handleReturnHome = () => {
    navigate('/')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center p-8"
    >
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20"
          >
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </motion.div>

          <h2 className="mb-4 text-3xl font-semibold text-heading-light dark:text-heading-dark">
            Appointment Request Submitted!
          </h2>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
            Your appointment request has been submitted successfully. We will
            contact you shortly.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          {/* Appointment Summary */}
          <div className="mb-6 border-b border-gray-200 pb-6 dark:border-gray-700">
            <h3 className="mb-4 text-lg font-semibold text-heading-light dark:text-heading-dark">
              Appointment Summary
            </h3>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blush-rose" />
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Date & Time:
                </span>
                <span className="font-medium text-heading-light dark:text-heading-dark">
                  October 15, 2025 at 10:30 AM
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-blush-rose" />
                <span className="text-text-secondary-light dark:text-text-secondary-dark">
                  Patient:
                </span>
                <span className="font-medium text-heading-light dark:text-heading-dark">
                  Jane Doe
                </span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-semibold text-heading-light dark:text-heading-dark">
              What happens next?
            </h3>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blush-rose/20">
                  <span className="text-xs font-semibold text-blush-rose">
                    1
                  </span>
                </div>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Our team will review your appointment request within 24 hours
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blush-rose/20">
                  <span className="text-xs font-semibold text-blush-rose">
                    2
                  </span>
                </div>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  You'll receive a confirmation email with appointment details
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blush-rose/20">
                  <span className="text-xs font-semibold text-blush-rose">
                    3
                  </span>
                </div>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  We may call to confirm details or discuss any questions
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleCreateAccount}
              className="btn-primary flex w-full items-center justify-center space-x-2"
            >
              <User className="h-5 w-5" />
              <span>Create Account for Future Bookings</span>
            </button>

            <button
              onClick={handleReturnHome}
              className="btn-outline flex w-full items-center justify-center space-x-2"
            >
              <ArrowRight className="h-5 w-5" />
              <span>Return to Homepage</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
