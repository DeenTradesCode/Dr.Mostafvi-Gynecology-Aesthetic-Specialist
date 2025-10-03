import { motion } from 'framer-motion'
import { Calendar, Clock, FileText } from 'lucide-react'

export function AppointmentStep() {
  console.log('📅 AppointmentStep: Component rendered')
  
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
            Appointment Details
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Select your preferred date, time, and reason for visit
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <form className="space-y-8">
            {/* Reason for Booking */}
            <div>
              <label htmlFor="reason" className="form-label">
                <FileText className="mr-2 inline h-4 w-4" />
                Reason for Booking *
              </label>
              <select id="reason" className="form-input" required>
                <option value="">Select the reason for your visit</option>
                <option value="gynecology">Gynecology Consultation</option>
                <option value="aesthetics">Aesthetic Medicine</option>
                <option value="cosmetic">Cosmetic Consultation</option>
                <option value="annual">Annual Checkup</option>
                <option value="follow-up">Follow-up Appointment</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label htmlFor="appointmentDate" className="form-label">
                <Calendar className="mr-2 inline h-4 w-4" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="appointmentDate"
                className="form-input"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="appointmentTime" className="form-label">
                <Clock className="mr-2 inline h-4 w-4" />
                Available Times *
              </label>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  '09:00 AM',
                  '10:30 AM',
                  '02:00 PM',
                  '08:00 AM',
                  '11:00 AM',
                  '01:30 PM',
                  '09:15 AM',
                  '12:00 PM',
                  '03:00 PM',
                ].map(time => (
                  <button
                    key={time}
                    type="button"
                    className="rounded-lg border border-gray-300 p-3 text-sm transition-colors duration-200 hover:border-blush-rose hover:bg-blush-rose/5 dark:border-gray-600 dark:hover:border-blush-rose"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button type="submit" className="btn-primary w-full">
                Review Appointment Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
