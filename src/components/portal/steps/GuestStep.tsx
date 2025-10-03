import { motion } from 'framer-motion'
import { User, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function GuestStep() {
  const navigate = useNavigate()

  const handleGuestContinue = () => {
    navigate('/portal/patient-info')
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center bg-gradient-to-br from-lavender-mist/5 to-warm-bronze/10 p-8 dark:from-gray-800/20 dark:to-warm-bronze/10"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warm-bronze/10 dark:bg-warm-bronze/20">
            <User className="h-8 w-8 text-warm-bronze" />
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-heading-light dark:text-heading-dark">
            Continue as Guest
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Book your appointment quickly without creating an account
          </p>
        </div>

        <div className="space-y-6">
          {/* Benefits */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-warm-bronze"></div>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                No account creation required
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-warm-bronze"></div>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Quick appointment booking
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-warm-bronze"></div>
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Option to create account later
              </span>
            </div>
          </div>

          {/* Guest Continue Button */}
          <button
            onClick={handleGuestContinue}
            className="btn-outline group flex w-full items-center justify-center space-x-2"
          >
            <span>Continue as Guest</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          {/* Info Note */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> Guest bookings will be automatically merged
              with your account if you create one later using the same email
              address.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
