import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

// Portal state types
export interface PatientInfo {
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  insuranceProvider: string
  otherInsuranceText?: string
}

export interface AppointmentDetails {
  date: string
  time: string
  reason: string
  serviceType: string
}

export interface PortalState {
  currentStep: number
  totalSteps: number
  patientInfo: PatientInfo
  appointmentDetails: AppointmentDetails
  isGuest: boolean
  isCompleted: boolean
  errors: Record<string, string[]>
  isLoading: boolean
}

export interface PortalContextType extends PortalState {
  // Step navigation
  goToStep: (step: number) => void
  nextStep: () => void
  previousStep: () => void
  resetPortal: () => void
  
  // Data management
  updatePatientInfo: (info: Partial<PatientInfo>) => void
  updateAppointmentDetails: (details: Partial<AppointmentDetails>) => void
  setGuestMode: (isGuest: boolean) => void
  
  // Validation
  validateCurrentStep: () => boolean
  setErrors: (errors: Record<string, string[]>) => void
  clearErrors: () => void
  
  // Loading states
  setLoading: (loading: boolean) => void
  
  // Completion
  completeBooking: () => Promise<{ success: boolean; error?: string }>
}

// Default state
const defaultPortalState: PortalState = {
  currentStep: 1,
  totalSteps: 5,
  patientInfo: {
    fullName: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    insuranceProvider: '',
    otherInsuranceText: '',
  },
  appointmentDetails: {
    date: '',
    time: '',
    reason: '',
    serviceType: '',
  },
  isGuest: false,
  isCompleted: false,
  errors: {},
  isLoading: false,
}

// Create Portal Context
const PortalContext = createContext<PortalContextType | undefined>(undefined)

// Portal Provider Component
interface PortalProviderProps {
  children: ReactNode
}

export function PortalProvider({ children }: PortalProviderProps) {
  const navigate = useNavigate()
  const [portalState, setPortalState] = useState<PortalState>(defaultPortalState)

  // Load saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem('dr_mastafavi_portal_state')
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        setPortalState(prevState => ({
          ...prevState,
          ...parsedState,
          errors: {}, // Clear errors on load
          isLoading: false,
        }))
      } catch (error) {
        console.error('Failed to parse saved portal state:', error)
      }
    }
  }, [])

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dr_mastafavi_portal_state', JSON.stringify(portalState))
  }, [portalState])

  // Step navigation functions
  const goToStep = (step: number) => {
    if (step >= 1 && step <= portalState.totalSteps) {
      setPortalState(prev => ({
        ...prev,
        currentStep: step,
        errors: {}, // Clear errors when changing steps
      }))
      
      // Update URL to match step
      const stepRoutes = [
        '/portal/access',
        '/portal/patient-info',
        '/portal/appointment',
        '/portal/review',
        '/portal/confirmation',
      ]
      
      if (stepRoutes[step - 1]) {
        navigate(stepRoutes[step - 1])
      }
    }
  }

  const nextStep = () => {
    if (portalState.currentStep < portalState.totalSteps) {
      goToStep(portalState.currentStep + 1)
    }
  }

  const previousStep = () => {
    if (portalState.currentStep > 1) {
      goToStep(portalState.currentStep - 1)
    }
  }

  const resetPortal = () => {
    setPortalState(defaultPortalState)
    localStorage.removeItem('dr_mastafavi_portal_state')
    navigate('/portal/access')
  }

  // Data management functions
  const updatePatientInfo = (info: Partial<PatientInfo>) => {
    setPortalState(prev => ({
      ...prev,
      patientInfo: { ...prev.patientInfo, ...info },
      errors: {}, // Clear errors when updating data
    }))
  }

  const updateAppointmentDetails = (details: Partial<AppointmentDetails>) => {
    setPortalState(prev => ({
      ...prev,
      appointmentDetails: { ...prev.appointmentDetails, ...details },
      errors: {}, // Clear errors when updating data
    }))
  }

  const setGuestMode = (isGuest: boolean) => {
    setPortalState(prev => ({
      ...prev,
      isGuest,
    }))
  }

  // Validation functions
  const validateCurrentStep = (): boolean => {
    const errors: Record<string, string[]> = {}

    switch (portalState.currentStep) {
      case 1: // Access step - no validation needed
        return true

      case 2: // Patient Info step
        if (!portalState.patientInfo.fullName.trim()) {
          errors.fullName = ['Full name is required']
        }
        if (!portalState.patientInfo.email.trim()) {
          errors.email = ['Email is required']
        }
        if (!portalState.patientInfo.phoneNumber.trim()) {
          errors.phoneNumber = ['Phone number is required']
        }
        if (!portalState.patientInfo.dateOfBirth.trim()) {
          errors.dateOfBirth = ['Date of birth is required']
        }
        if (!portalState.patientInfo.insuranceProvider.trim()) {
          errors.insuranceProvider = ['Insurance provider is required']
        }
        if (portalState.patientInfo.insuranceProvider === 'other' && 
            !portalState.patientInfo.otherInsuranceText?.trim()) {
          errors.otherInsuranceText = ['Please specify your insurance provider']
        }
        break

      case 3: // Appointment step
        if (!portalState.appointmentDetails.date.trim()) {
          errors.appointmentDate = ['Appointment date is required']
        }
        if (!portalState.appointmentDetails.time.trim()) {
          errors.appointmentTime = ['Appointment time is required']
        }
        if (!portalState.appointmentDetails.reason.trim()) {
          errors.reason = ['Reason for visit is required']
        }
        break

      case 4: // Review step - no validation needed
        return true

      case 5: // Confirmation step - no validation needed
        return true

      default:
        return true
    }

    setPortalState(prev => ({
      ...prev,
      errors,
    }))

    return Object.keys(errors).length === 0
  }

  const setErrors = (errors: Record<string, string[]>) => {
    setPortalState(prev => ({
      ...prev,
      errors,
    }))
  }

  const clearErrors = () => {
    setPortalState(prev => ({
      ...prev,
      errors: {},
    }))
  }

  // Loading state management
  const setLoading = (loading: boolean) => {
    setPortalState(prev => ({
      ...prev,
      isLoading: loading,
    }))
  }

  // Booking completion
  const completeBooking = async (): Promise<{ success: boolean; error?: string }> => {
    setLoading(true)

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Mock successful booking
      setPortalState(prev => ({
        ...prev,
        isCompleted: true,
        isLoading: false,
      }))

      // Navigate to confirmation step
      navigate('/portal/confirmation')

      return { success: true }
    } catch (error) {
      console.error('Booking completion error:', error)
      setLoading(false)
      return { 
        success: false, 
        error: 'Failed to book appointment. Please try again.' 
      }
    }
  }

  const contextValue: PortalContextType = {
    ...portalState,
    goToStep,
    nextStep,
    previousStep,
    resetPortal,
    updatePatientInfo,
    updateAppointmentDetails,
    setGuestMode,
    validateCurrentStep,
    setErrors,
    clearErrors,
    setLoading,
    completeBooking,
  }

  return (
    <PortalContext.Provider value={contextValue}>
      {children}
    </PortalContext.Provider>
  )
}

// Custom hook to use portal context
export function usePortalState(): PortalContextType {
  const context = useContext(PortalContext)

  if (context === undefined) {
    throw new Error('usePortalState must be used within a PortalProvider')
  }

  return context
}

// Utility functions for portal state
export const portalUtils = {
  // Get step route from step number
  getStepRoute: (step: number): string => {
    const routes = [
      '/portal/access',
      '/portal/patient-info',
      '/portal/appointment',
      '/portal/review',
      '/portal/confirmation',
    ]
    return routes[step - 1] || '/portal/access'
  },

  // Get step number from route
  getStepFromRoute: (route: string): number => {
    const routes = [
      '/portal/access',
      '/portal/patient-info',
      '/portal/appointment',
      '/portal/review',
      '/portal/confirmation',
    ]
    const index = routes.indexOf(route)
    return index >= 0 ? index + 1 : 1
  },

  // Check if step is accessible
  canAccessStep: (step: number, currentState: PortalState): boolean => {
    // Step 1 (Access) is always accessible
    if (step === 1) return true

    // Step 2 (Patient Info) - requires guest mode or authentication
    if (step === 2) return currentState.isGuest || true // Allow for demo

    // Step 3 (Appointment) - requires patient info
    if (step === 3) {
      return currentState.patientInfo.fullName.trim() !== '' &&
             currentState.patientInfo.email.trim() !== ''
    }

    // Step 4 (Review) - requires appointment details
    if (step === 4) {
      return currentState.appointmentDetails.date.trim() !== '' &&
             currentState.appointmentDetails.time.trim() !== ''
    }

    // Step 5 (Confirmation) - requires completed booking
    if (step === 5) {
      return currentState.isCompleted
    }

    return false
  },

  // Get next accessible step
  getNextAccessibleStep: (currentStep: number, currentState: PortalState): number | null => {
    for (let step = currentStep + 1; step <= currentState.totalSteps; step++) {
      if (portalUtils.canAccessStep(step, currentState)) {
        return step
      }
    }
    return null
  },

  // Get previous accessible step
  getPreviousAccessibleStep: (currentStep: number, currentState: PortalState): number | null => {
    for (let step = currentStep - 1; step >= 1; step--) {
      if (portalUtils.canAccessStep(step, currentState)) {
        return step
      }
    }
    return null
  },
}
