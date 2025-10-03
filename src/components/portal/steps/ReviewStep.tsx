import { motion } from 'framer-motion'
import { Check, Edit, Calendar, Clock } from 'lucide-react'

export function ReviewStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center p-8"
    >
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-heading-light dark:text-heading-dark">
            Review Your Appointment
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Please review your information before confirming
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <div className="space-y-6">
            {/* Patient Information */}
            <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-heading-light dark:text-heading-dark">
                  Patient Information
                </h3>
                <button className="flex items-center space-x-1 text-blush-rose hover:text-blush-rose/80">
                  <Edit className="h-4 w-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Full Name:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    Jane Doe
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Date of Birth:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    12/**/1990
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Phone:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    --1234
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Email:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    j***@gmail.com
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Insurance:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    Blue Cross Blue Shield
                  </span>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-heading-light dark:text-heading-dark">
                  Appointment Details
                </h3>
                <button className="flex items-center space-x-1 text-blush-rose hover:text-blush-rose/80">
                  <Edit className="h-4 w-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blush-rose" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Date:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    October 15, 2025
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blush-rose" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Time:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    10:30 AM
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-warm-bronze" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    Reason:
                  </span>
                  <span className="font-medium text-heading-light dark:text-heading-dark">
                    Annual Checkup
                  </span>
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                <p className="text-sm text-green-800 dark:text-green-200">
                  Your appointment request will be submitted for confirmation.
                  We will contact you shortly.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button className="btn-primary flex w-full items-center justify-center space-x-2">
                <Check className="h-5 w-5" />
                <span>Confirm Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
