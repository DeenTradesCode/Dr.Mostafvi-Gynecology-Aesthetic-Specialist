import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { usePortalState } from '@/hooks/usePortalState'
import { mockApi } from '@/utils/mockApi'

export function AppointmentStep() {
  console.log('📅 AppointmentStep: Component rendered')
  
  const navigate = useNavigate()
  const { updateAppointmentDetails, nextStep } = usePortalState()
  
  const [formData, setFormData] = useState({
    reason: '',
    appointmentDate: '',
    appointmentTime: ''
  })
  
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  
  // Load available slots when date is selected
  useEffect(() => {
    if (formData.appointmentDate) {
      loadAvailableSlots(formData.appointmentDate)
    }
  }, [formData.appointmentDate])
  
  const loadAvailableSlots = async (date: string) => {
    setLoading(true)
    try {
      console.log(`📅 AppointmentStep: Loading slots for ${date}`)
      const response = await mockApi.getAvailability(date)
      const slots = response.available_slots.map(slot => slot.time)
      setAvailableSlots(slots)
      console.log(`📅 AppointmentStep: Found ${slots.length} available slots`)
    } catch (error) {
      console.error('Error loading available slots:', error)
      setAvailableSlots([])
    } finally {
      setLoading(false)
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user makes selection
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
    
    // Reset time selection when date changes
    if (name === 'appointmentDate') {
      setFormData(prev => ({ ...prev, appointmentTime: '' }))
    }
  }
  
  const handleTimeSelection = (time: string) => {
    setFormData(prev => ({ ...prev, appointmentTime: time }))
    
    // Clear error when user selects time
    if (errors.appointmentTime) {
      setErrors(prev => ({ ...prev, appointmentTime: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.reason) {
      newErrors.reason = 'Please select a reason for your visit'
    }
    
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'Please select a date'
    }
    
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = 'Please select a time slot'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('📅 AppointmentStep: Form submitted with data:', formData)
    
    if (validateForm()) {
      // Update portal state with appointment details
      updateAppointmentDetails({
        serviceType: formData.reason,
        date: formData.appointmentDate,
        time: formData.appointmentTime,
        reason: formData.reason
      })
      
      console.log('📅 AppointmentStep: Moving to review step')
      nextStep()
      navigate('/portal/review')
    } else {
      console.log('📅 AppointmentStep: Form validation failed:', errors)
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
            Appointment Details
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Select your preferred date, time, and reason for visit
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Reason for Booking */}
            <div>
              <label htmlFor="reason" className="form-label">
                <FileText className="mr-2 inline h-4 w-4" />
                Reason for Booking *
              </label>
              <select 
                id="reason" 
                name="reason"
                className={`form-input ${errors.reason ? 'border-red-500' : ''}`}
                value={formData.reason}
                onChange={handleInputChange}
                required
              >
                <option value="">Select the reason for your visit</option>
                <option value="gynecology">Gynecology Consultation</option>
                <option value="aesthetics">Aesthetic Medicine</option>
                <option value="cosmetic">Cosmetic Consultation</option>
                <option value="annual">Annual Checkup</option>
                <option value="follow-up">Follow-up Appointment</option>
                <option value="other">Other</option>
              </select>
              {errors.reason && <p className="mt-1 text-sm text-red-500">{errors.reason}</p>}
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
                name="appointmentDate"
                className={`form-input ${errors.appointmentDate ? 'border-red-500' : ''}`}
                min={new Date().toISOString().split('T')[0]}
                value={formData.appointmentDate}
                onChange={handleInputChange}
                required
              />
              {errors.appointmentDate && <p className="mt-1 text-sm text-red-500">{errors.appointmentDate}</p>}
            </div>

            {/* Time Selection */}
            <div>
              <label htmlFor="appointmentTime" className="form-label">
                <Clock className="mr-2 inline h-4 w-4" />
                Available Times *
              </label>
              <div className="mt-3">
                {loading ? (
                  <div className="text-center py-4">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      Loading available times...
                    </p>
                  </div>
                ) : availableSlots.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {availableSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelection(time)}
                        className={`rounded-lg border p-3 text-sm transition-colors duration-200 ${
                          formData.appointmentTime === time
                            ? 'border-blush-rose bg-blush-rose/10 text-blush-rose'
                            : 'border-gray-300 hover:border-blush-rose hover:bg-blush-rose/5 dark:border-gray-600 dark:hover:border-blush-rose'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                ) : formData.appointmentDate ? (
                  <div className="text-center py-4">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      No available times for this date. Please select another date.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-text-secondary-light dark:text-text-secondary-dark">
                      Please select a date to see available times.
                    </p>
                  </div>
                )}
                {errors.appointmentTime && <p className="mt-1 text-sm text-red-500">{errors.appointmentTime}</p>}
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
