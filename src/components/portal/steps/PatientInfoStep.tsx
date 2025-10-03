import { motion } from 'framer-motion'
import { User, Calendar, Phone, Mail, Shield } from 'lucide-react'

export function PatientInfoStep() {
  console.log('📝 PatientInfoStep: Component rendered')
  
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
            Patient Information
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Please provide your personal and insurance information
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="form-label">
                <User className="mr-2 inline h-4 w-4" />
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                className="form-input"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="form-label">
                  <Calendar className="mr-2 inline h-4 w-4" />
                  Date of Birth *
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  className="form-input"
                  placeholder="MM/DD/YYYY"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="form-label">
                  <Phone className="mr-2 inline h-4 w-4" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-input"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label">
                <Mail className="mr-2 inline h-4 w-4" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            {/* Insurance Provider */}
            <div>
              <label htmlFor="insuranceProvider" className="form-label">
                <Shield className="mr-2 inline h-4 w-4" />
                Insurance Provider *
              </label>
              <select id="insuranceProvider" className="form-input" required>
                <option value="">Select your insurance provider</option>
                <option value="blue-cross">Blue Cross Blue Shield</option>
                <option value="aetna">Aetna</option>
                <option value="cigna">Cigna</option>
                <option value="humana">Humana</option>
                <option value="kaiser">Kaiser Permanente</option>
                <option value="medicare">Medicare</option>
                <option value="medicaid">Medicaid</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Other Insurance Input (conditional) */}
            <div id="otherInsurance" className="hidden">
              <label htmlFor="otherInsuranceText" className="form-label">
                Please specify your insurance provider
              </label>
              <input
                type="text"
                id="otherInsuranceText"
                className="form-input"
                placeholder="Enter your insurance provider"
              />
            </div>

            <div className="pt-6">
              <button type="submit" className="btn-primary w-full">
                Continue to Appointment Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}
