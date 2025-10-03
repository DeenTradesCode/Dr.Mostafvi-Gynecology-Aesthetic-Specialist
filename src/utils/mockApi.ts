// Mock API utilities for Patient Portal
// These simulate backend endpoints for development and testing

export interface AppointmentSlot {
  time: string
  duration: number
  type: 'standard' | 'consultation' | 'extended'
  available: boolean
}

export interface AvailabilityResponse {
  date: string
  available_slots: AppointmentSlot[]
  unavailable_reasons?: Record<string, string>
}

export interface AppointmentRequest {
  patient_id?: string
  date: string
  time: string
  service_type: string
  reason: string
  insurance_provider: string
  is_guest: boolean
  patient_info: {
    fullName: string
    dateOfBirth: string
    phoneNumber: string
    email: string
  }
}

export interface AppointmentResponse {
  id: string
  status: 'pending' | 'confirmed' | 'cancelled'
  appointment_date: string
  appointment_time: string
  service_type: string
  reason: string
  patient_info: {
    name: string
    email_masked: string
    phone_masked: string
  }
  confirmation_message: string
}

// Mock availability data
const mockAvailabilityData: Record<string, AppointmentSlot[]> = {
  '2025-10-05': [
    { time: '09:00', duration: 30, type: 'standard', available: true },
    { time: '10:30', duration: 30, type: 'standard', available: true },
    { time: '14:00', duration: 60, type: 'consultation', available: true },
    { time: '15:30', duration: 30, type: 'standard', available: false },
  ],
  '2025-10-06': [
    { time: '08:00', duration: 30, type: 'standard', available: true },
    { time: '11:00', duration: 30, type: 'standard', available: true },
    { time: '13:30', duration: 60, type: 'consultation', available: true },
    { time: '15:00', duration: 30, type: 'standard', available: true },
    { time: '16:30', duration: 30, type: 'standard', available: false },
  ],
  '2025-10-07': [
    { time: '09:15', duration: 30, type: 'standard', available: true },
    { time: '12:00', duration: 60, type: 'consultation', available: true },
    { time: '14:30', duration: 30, type: 'standard', available: true },
  ],
  '2025-10-08': [
    { time: '10:00', duration: 30, type: 'standard', available: true },
    { time: '11:30', duration: 30, type: 'standard', available: true },
    { time: '13:00', duration: 60, type: 'consultation', available: true },
    { time: '15:30', duration: 30, type: 'standard', available: true },
  ],
  '2025-10-09': [
    { time: '09:00', duration: 30, type: 'standard', available: true },
    { time: '10:30', duration: 30, type: 'standard', available: true },
    { time: '14:00', duration: 60, type: 'consultation', available: true },
    { time: '16:00', duration: 30, type: 'standard', available: true },
  ],
}

// Mock unavailable reasons
const mockUnavailableReasons: Record<string, Record<string, string>> = {
  '2025-10-05': {
    '15:30': 'Existing appointment',
  },
  '2025-10-06': {
    '16:30': 'Lunch break',
  },
}

// Mock API functions
export const mockApi = {
  // Get available appointment slots for a specific date
  getAvailability: async (date: string): Promise<AvailabilityResponse> => {
    console.log(`📅 MockAPI: Fetching availability for ${date}`)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const availableSlots = mockAvailabilityData[date] || []
    const unavailableReasons = mockUnavailableReasons[date] || {}
    
    // Filter only available slots
    const filteredSlots = availableSlots.filter(slot => slot.available)
    
    console.log(`📅 MockAPI: Found ${filteredSlots.length} available slots for ${date}`)
    
    return {
      date,
      available_slots: filteredSlots,
      unavailable_reasons: unavailableReasons,
    }
  },

  // Book an appointment
  bookAppointment: async (request: AppointmentRequest): Promise<AppointmentResponse> => {
    console.log('📝 MockAPI: Booking appointment', {
      date: request.date,
      time: request.time,
      service: request.service_type,
      isGuest: request.is_guest
    })
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Generate a mock appointment ID
    const appointmentId = `APT-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`
    
    // Mock successful booking
    return {
      id: appointmentId,
      status: 'pending',
      appointment_date: request.date,
      appointment_time: request.time,
      service_type: request.service_type,
      reason: request.reason,
      patient_info: {
        name: request.patient_info.fullName,
        email_masked: request.patient_info.email.replace(/(.{2}).*(@.*)/, '$1***$2'),
        phone_masked: `--${request.patient_info.phoneNumber.slice(-4)}`,
      },
      confirmation_message: 'Your appointment request has been submitted successfully. We will contact you shortly to confirm the details.',
    }
  },

  // Get patient appointments (for dashboard)
  getPatientAppointments: async (patientId: string): Promise<AppointmentResponse[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    console.log(`📊 MockAPI: Fetching appointments for patient ${patientId}`)
    
    // Mock appointment data
    return [
      {
        id: 'APT-1735123456789-ABC12',
        status: 'confirmed',
        appointment_date: '2025-10-15',
        appointment_time: '10:30',
        service_type: 'gynecology',
        reason: 'Annual Checkup',
        patient_info: {
          name: 'Jane Doe',
          email_masked: 'j***@gmail.com',
          phone_masked: '--1234',
        },
        confirmation_message: 'Appointment confirmed for October 15, 2025 at 10:30 AM',
      },
    ]
  },

  // Cancel an appointment
  cancelAppointment: async (appointmentId: string): Promise<{ success: boolean; message: string }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 400))
    
    console.log(`🗑️ MockAPI: Cancelling appointment ${appointmentId}`)
    
    return {
      success: true,
      message: 'Appointment cancelled successfully. You will receive a confirmation email shortly.',
    }
  },

  // Update appointment
  updateAppointment: async (
    appointmentId: string, 
    updates: Partial<AppointmentRequest>
  ): Promise<AppointmentResponse> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600))
    
    // Mock updated appointment
    return {
      id: appointmentId,
      status: 'pending',
      appointment_date: updates.date || '2025-10-15',
      appointment_time: updates.time || '10:30',
      service_type: updates.service_type || 'gynecology',
      reason: updates.reason || 'Annual Checkup',
      patient_info: {
        name: 'Jane Doe',
        email_masked: 'j***@gmail.com',
        phone_masked: '--1234',
      },
      confirmation_message: 'Your appointment has been updated successfully. We will contact you shortly to confirm the new details.',
    }
  },
}

// Utility function to check if a date is valid for booking
export const isValidBookingDate = (date: string): boolean => {
  const selectedDate = new Date(date)
  const today = new Date()
  const maxDate = new Date()
  maxDate.setDate(today.getDate() + 90) // Allow booking up to 90 days in advance
  
  // Don't allow past dates
  if (selectedDate < today) return false
  
  // Don't allow dates too far in the future
  if (selectedDate > maxDate) return false
  
  // Don't allow weekends (Saturday = 6, Sunday = 0)
  const dayOfWeek = selectedDate.getDay()
  if (dayOfWeek === 0 || dayOfWeek === 6) return false
  
  return true
}

// Utility function to format time slots for display
export const formatTimeSlot = (time: string): string => {
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours, 10)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  
  return `${displayHour}:${minutes} ${ampm}`
}

// Utility function to get next available dates
export const getNextAvailableDates = (count: number = 7): string[] => {
  const dates: string[] = []
  const today = new Date()
  
  for (let i = 1; i <= 30 && dates.length < count; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    
    if (isValidBookingDate(date.toISOString().split('T')[0])) {
      dates.push(date.toISOString().split('T')[0])
    }
  }
  
  return dates
}
