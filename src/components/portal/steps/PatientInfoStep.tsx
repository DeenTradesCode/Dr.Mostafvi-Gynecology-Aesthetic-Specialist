import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Calendar, Phone, Mail, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { usePortalState } from '@/hooks/usePortalState'

export function PatientInfoStep() {
  console.log('📝 PatientInfoStep: Component rendered')
  
  const navigate = useNavigate()
  const { updatePatientInfo, nextStep } = usePortalState()
  
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    insuranceProvider: '',
    otherInsuranceText: ''
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showOtherInsurance, setShowOtherInsurance] = useState(false)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    // Show/hide other insurance field
    if (name === 'insuranceProvider') {
      setShowOtherInsurance(value === 'other')
    }
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    
    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of birth is required'
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(formData.dateOfBirth)) {
      newErrors.dateOfBirth = 'Please enter date in MM/DD/YYYY format'
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required'
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter phone in (555) 123-4567 format'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.insuranceProvider) {
      newErrors.insuranceProvider = 'Insurance provider is required'
    }
    
    if (formData.insuranceProvider === 'other' && !formData.otherInsuranceText.trim()) {
      newErrors.otherInsuranceText = 'Please specify your insurance provider'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('📝 PatientInfoStep: Form submitted with data:', formData)
    
    if (validateForm()) {
      // Update portal state with patient info
      updatePatientInfo({
        fullName: formData.fullName,
        dateOfBirth: formData.dateOfBirth,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        insuranceProvider: formData.insuranceProvider === 'other' 
          ? formData.otherInsuranceText 
          : formData.insuranceProvider
      })
      
      console.log('📝 PatientInfoStep: Moving to next step')
      nextStep()
      navigate('/portal/appointment')
    } else {
      console.log('📝 PatientInfoStep: Form validation failed:', errors)
    }
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
          <h2 className="mb-4 text-3xl font-semibold text-heading-light dark:text-heading-dark">
            Patient Information
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Please provide your personal and insurance information
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="form-label">
                <User className="mr-2 inline h-4 w-4" />
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
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
                  name="dateOfBirth"
                  className={`form-input ${errors.dateOfBirth ? 'border-red-500' : ''}`}
                  placeholder="MM/DD/YYYY"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
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
                  name="phoneNumber"
                  className={`form-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
                  placeholder="(555) 123-4567"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
                {errors.phoneNumber && <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>}
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
                name="email"
                className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Insurance Provider */}
            <div>
              <label htmlFor="insuranceProvider" className="form-label">
                <Shield className="mr-2 inline h-4 w-4" />
                Insurance Provider *
              </label>
              <select 
                id="insuranceProvider" 
                name="insuranceProvider"
                className={`form-input ${errors.insuranceProvider ? 'border-red-500' : ''}`}
                value={formData.insuranceProvider}
                onChange={handleInputChange}
                required
              >
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
              {errors.insuranceProvider && <p className="mt-1 text-sm text-red-500">{errors.insuranceProvider}</p>}
            </div>

            {/* Other Insurance Input (conditional) */}
            {showOtherInsurance && (
              <div>
                <label htmlFor="otherInsuranceText" className="form-label">
                  Please specify your insurance provider
                </label>
                <input
                  type="text"
                  id="otherInsuranceText"
                  name="otherInsuranceText"
                  className={`form-input ${errors.otherInsuranceText ? 'border-red-500' : ''}`}
                  placeholder="Enter your insurance provider"
                  value={formData.otherInsuranceText}
                  onChange={handleInputChange}
                />
                {errors.otherInsuranceText && <p className="mt-1 text-sm text-red-500">{errors.otherInsuranceText}</p>}
              </div>
            )}

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
