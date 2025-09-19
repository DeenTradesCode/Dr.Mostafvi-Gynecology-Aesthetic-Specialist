import { motion } from 'framer-motion'
import { MessageCircle, Calendar, Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900 md:hidden"
    >
      <div className="container-custom py-4">
        <div className="grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center space-y-2 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            <MessageCircle className="h-6 w-6 text-blush-rose" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Ask Question
            </span>
          </button>

          <button className="flex flex-col items-center space-y-2 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Calendar className="h-6 w-6 text-warm-bronze" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Book Appointment
            </span>
          </button>

          <button className="flex flex-col items-center space-y-2 rounded-lg p-3 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Phone className="h-6 w-6 text-green-600" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Call Now
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  )
}
