import { motion } from 'framer-motion'
import { Calendar, Clock, Phone, Mail, Edit, Trash2, Plus } from 'lucide-react'

export function Dashboard() {
  console.log('📊 Dashboard: Component rendered')
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-bg-light py-8 dark:bg-bg-dark"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-semibold text-heading-light dark:text-heading-dark">
            My Appointments
          </h1>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Manage your appointments and personal information
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                  Upcoming Appointments
                </h2>
                <button className="btn-primary flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Book New</span>
                </button>
              </div>

              {/* Appointment Cards */}
              <div className="space-y-4">
                <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blush-rose" />
                      <span className="font-semibold text-heading-light dark:text-heading-dark">
                        October 15, 2025
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blush-rose hover:text-blush-rose/80">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-red-500 hover:text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        10:30 AM - 11:00 AM
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        Annual Checkup
                      </span>
                    </div>
                  </div>
                </div>

                {/* Empty State */}
                <div className="py-8 text-center text-text-secondary-light dark:text-text-secondary-dark">
                  <Calendar className="mx-auto mb-4 h-12 w-12 text-gray-400" />
                  <p>No other upcoming appointments</p>
                </div>
              </div>
            </div>
          </div>

          {/* Patient Information */}
          <div>
            <div className="rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                  My Information
                </h2>
                <button className="text-blush-rose hover:text-blush-rose/80">
                  <Edit className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    --1234
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-text-secondary-light dark:text-text-secondary-dark">
                    j***@gmail.com
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                  <h3 className="mb-2 font-semibold text-heading-light dark:text-heading-dark">
                    Insurance
                  </h3>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark">
                    Blue Cross Blue Shield
                  </p>
                </div>

                <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
                  <p className="text-xs text-blue-800 dark:text-blue-200">
                    Insurance information can only be updated every 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
              <h2 className="mb-4 text-xl font-semibold text-heading-light dark:text-heading-dark">
                Quick Actions
              </h2>

              <div className="space-y-3">
                <button className="btn-outline flex w-full items-center space-x-3 text-left">
                  <Calendar className="h-4 w-4" />
                  <span>Book New Appointment</span>
                </button>

                <button className="btn-outline flex w-full items-center space-x-3 text-left">
                  <Edit className="h-4 w-4" />
                  <span>Update Information</span>
                </button>

                <button className="btn-outline flex w-full items-center space-x-3 text-left">
                  <Phone className="h-4 w-4" />
                  <span>Contact Office</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
