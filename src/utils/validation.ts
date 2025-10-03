// Form validation utilities for Patient Portal
// Real-time validation with error handling

export interface ValidationRule {
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
  custom?: (value: any) => string | null
  message?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
  firstError?: string
}

export interface FieldValidation {
  [key: string]: ValidationRule
}

// Common validation patterns
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(\d{3}\)\s\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{10}$/,
  dateOfBirth: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
  ssn: /^\d{3}-\d{2}-\d{4}$|^\d{9}$/,
  name: /^[a-zA-Z\s'-]+$/,
  zipCode: /^\d{5}(-\d{4})?$/,
}

// Common validation messages
export const messages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number (e.g., (555) 123-4567)',
  dateOfBirth: 'Please enter a valid date of birth (MM/DD/YYYY)',
  ssn: 'Please enter a valid SSN (XXX-XX-XXXX)',
  name: 'Please enter a valid name (letters, spaces, hyphens, and apostrophes only)',
  minLength: (min: number) => `Must be at least ${min} characters long`,
  maxLength: (max: number) => `Must be no more than ${max} characters long`,
  zipCode: 'Please enter a valid ZIP code',
}

/**
 * Validate a single field value against a validation rule
 */
export const validateField = (
  value: any,
  rule: ValidationRule,
  fieldName?: string
): ValidationResult => {
  const errors: string[] = []
  
  // Check if value is empty
  const isEmpty = value === null || value === undefined || value === ''
  
  // Required validation
  if (rule.required && isEmpty) {
    errors.push(rule.message || messages.required)
    return { isValid: false, errors, firstError: errors[0] }
  }
  
  // Skip other validations if field is empty and not required
  if (isEmpty) {
    return { isValid: true, errors: [], firstError: undefined }
  }
  
  // Convert to string for length validations
  const stringValue = String(value).trim()
  
  // Min length validation
  if (rule.minLength && stringValue.length < rule.minLength) {
    errors.push(rule.message || messages.minLength(rule.minLength))
  }
  
  // Max length validation
  if (rule.maxLength && stringValue.length > rule.maxLength) {
    errors.push(rule.message || messages.maxLength(rule.maxLength))
  }
  
  // Pattern validation
  if (rule.pattern && !rule.pattern.test(stringValue)) {
    errors.push(rule.message || 'Invalid format')
  }
  
  // Custom validation
  if (rule.custom) {
    const customError = rule.custom(value)
    if (customError) {
      errors.push(customError)
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    firstError: errors[0],
  }
}

/**
 * Validate multiple fields against their validation rules
 */
export const validateFields = (
  data: Record<string, any>,
  rules: FieldValidation
): Record<string, ValidationResult> => {
  const results: Record<string, ValidationResult> = {}
  
  Object.keys(rules).forEach(fieldName => {
    const value = data[fieldName]
    const rule = rules[fieldName]
    results[fieldName] = validateField(value, rule, fieldName)
  })
  
  return results
}

/**
 * Check if all fields are valid
 */
export const isFormValid = (results: Record<string, ValidationResult>): boolean => {
  return Object.values(results).every(result => result.isValid)
}

/**
 * Get all validation errors from form results
 */
export const getFormErrors = (results: Record<string, ValidationResult>): string[] => {
  const errors: string[] = []
  Object.values(results).forEach(result => {
    errors.push(...result.errors)
  })
  return errors
}

// Predefined validation rules for Patient Portal
export const portalValidationRules: FieldValidation = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: patterns.name,
    message: 'Please enter your full name (2-50 characters)',
  },
  
  email: {
    required: true,
    pattern: patterns.email,
    message: messages.email,
  },
  
  phoneNumber: {
    required: true,
    pattern: patterns.phone,
    message: messages.phone,
  },
  
  dateOfBirth: {
    required: true,
    pattern: patterns.dateOfBirth,
    custom: (value: string) => {
      if (!value) return null
      
      // Check if date is in the future
      const [month, day, year] = value.split('/').map(Number)
      const birthDate = new Date(year, month - 1, day)
      const today = new Date()
      
      if (birthDate > today) {
        return 'Date of birth cannot be in the future'
      }
      
      // Check if person is too old (reasonable limit)
      const age = today.getFullYear() - year
      if (age > 120) {
        return 'Please enter a valid date of birth'
      }
      
      // Check if person is too young
      if (age < 13) {
        return 'Patient must be at least 13 years old'
      }
      
      return null
    },
    message: messages.dateOfBirth,
  },
  
  insuranceProvider: {
    required: true,
    message: 'Please select your insurance provider',
  },
  
  appointmentDate: {
    required: true,
    custom: (value: string) => {
      if (!value) return null
      
      const selectedDate = new Date(value)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (selectedDate < today) {
        return 'Appointment date cannot be in the past'
      }
      
      // Check if date is too far in the future (90 days)
      const maxDate = new Date()
      maxDate.setDate(today.getDate() + 90)
      
      if (selectedDate > maxDate) {
        return 'Appointment date cannot be more than 90 days in the future'
      }
      
      // Check if it's a weekend
      const dayOfWeek = selectedDate.getDay()
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return 'Appointments are not available on weekends'
      }
      
      return null
    },
    message: 'Please select a valid appointment date',
  },
  
  appointmentTime: {
    required: true,
    message: 'Please select an appointment time',
  },
  
  reason: {
    required: true,
    minLength: 3,
    maxLength: 100,
    message: 'Please select a reason for your visit',
  },
}

// Custom validation functions
export const customValidators = {
  // Validate insurance provider selection
  validateInsuranceProvider: (value: string, otherValue?: string): string | null => {
    if (!value) return 'Please select your insurance provider'
    
    if (value === 'other' && (!otherValue || otherValue.trim().length < 2)) {
      return 'Please specify your insurance provider'
    }
    
    return null
  },
  
  // Validate appointment time selection
  validateAppointmentTime: (time: string, date: string): string | null => {
    if (!time) return 'Please select an appointment time'
    
    if (!date) return null
    
    const appointmentDateTime = new Date(`${date}T${time}:00`)
    const now = new Date()
    
    // Check if appointment is in the past
    if (appointmentDateTime < now) {
      return 'Selected appointment time is in the past'
    }
    
    // Check if appointment is too early (before 8 AM)
    const hour = appointmentDateTime.getHours()
    if (hour < 8) {
      return 'Appointments are not available before 8:00 AM'
    }
    
    // Check if appointment is too late (after 5 PM)
    if (hour >= 17) {
      return 'Appointments are not available after 5:00 PM'
    }
    
    return null
  },
  
  // Validate password strength
  validatePassword: (password: string): string | null => {
    if (!password) return 'Password is required'
    
    if (password.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    
    if (!/(?=.*[a-z])/.test(password)) {
      return 'Password must contain at least one lowercase letter'
    }
    
    if (!/(?=.*[A-Z])/.test(password)) {
      return 'Password must contain at least one uppercase letter'
    }
    
    if (!/(?=.*\d)/.test(password)) {
      return 'Password must contain at least one number'
    }
    
    return null
  },
  
  // Validate password confirmation
  validatePasswordConfirmation: (password: string, confirmation: string): string | null => {
    if (!confirmation) return 'Please confirm your password'
    
    if (password !== confirmation) {
      return 'Passwords do not match'
    }
    
    return null
  },
}

// Real-time validation hook helper
export const createFieldValidator = (rules: FieldValidation) => {
  return (fieldName: string, value: any, additionalData?: Record<string, any>) => {
    const rule = rules[fieldName]
    if (!rule) return { isValid: true, errors: [], firstError: undefined }
    
    // Handle custom validations that depend on other fields
    if (fieldName === 'insuranceProvider' && additionalData?.otherInsuranceText) {
      rule.custom = (val: string) => customValidators.validateInsuranceProvider(val, additionalData.otherInsuranceText)
    }
    
    if (fieldName === 'appointmentTime' && additionalData?.appointmentDate) {
      rule.custom = (val: string) => customValidators.validateAppointmentTime(val, additionalData.appointmentDate)
    }
    
    return validateField(value, rule, fieldName)
  }
}

// Form submission validation
export const validateFormSubmission = (
  data: Record<string, any>,
  rules: FieldValidation = portalValidationRules
): { isValid: boolean; errors: Record<string, string[]>; hasErrors: boolean } => {
  const results = validateFields(data, rules)
  const errors: Record<string, string[]> = {}
  let hasErrors = false
  
  Object.keys(results).forEach(fieldName => {
    const result = results[fieldName]
    if (!result.isValid) {
      errors[fieldName] = result.errors
      hasErrors = true
    }
  })
  
  return {
    isValid: !hasErrors,
    errors,
    hasErrors,
  }
}

// Export validation utilities
export const validationUtils = {
  validateField,
  validateFields,
  isFormValid,
  getFormErrors,
  portalValidationRules,
  customValidators,
  createFieldValidator,
  validateFormSubmission,
  patterns,
  messages,
}
