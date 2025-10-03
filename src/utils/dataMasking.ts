// Data masking utilities for PII protection
// Following the masking rules defined in the Patient Portal Prototype

export interface MaskingOptions {
  preserveFirst?: number
  preserveLast?: number
  maskChar?: string
  showAtSymbol?: boolean
}

// Default masking options based on prototype specifications (currently unused but kept for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const DEFAULT_MASKING_OPTIONS: Record<string, MaskingOptions> = {
  email: {
    preserveFirst: 1,
    preserveLast: 0,
    maskChar: '*',
    showAtSymbol: true,
  },
  phone: {
    preserveFirst: 0,
    preserveLast: 4,
    maskChar: '*',
  },
  dob: {
    preserveFirst: 2,
    preserveLast: 4,
    maskChar: '*',
  },
  ssn: {
    preserveFirst: 0,
    preserveLast: 4,
    maskChar: '*',
  },
}

/**
 * Mask email address following prototype specification: j***@gmail.com
 */
export const maskEmail = (email: string): string => {
  console.log(`🔒 DataMasking: Masking email ${email}`)
  if (!email || !email.includes('@')) return email
  
  const [localPart, domain] = email.split('@')
  
  if (localPart.length <= 2) {
    return `${localPart.charAt(0)}***@${domain}`
  }
  
  return `${localPart.charAt(0)}***@${domain}`
}

/**
 * Mask phone number following prototype specification: --1234
 */
export const maskPhone = (phone: string): string => {
  console.log(`🔒 DataMasking: Masking phone ${phone}`)
  if (!phone) return phone
  
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '')
  
  if (digits.length < 4) return '--****'
  
  // Show last 4 digits: --1234
  const lastFour = digits.slice(-4)
  return `--${lastFour}`
}

/**
 * Mask date of birth following prototype specification: MM/**/YYYY
 */
export const maskDateOfBirth = (dob: string): string => {
  if (!dob) return dob
  
  // Handle MM/DD/YYYY format
  if (dob.includes('/')) {
    const parts = dob.split('/')
    if (parts.length === 3) {
      const [month, day, year] = parts
      return `${month}/**/${year}`
    }
  }
  
  // Handle YYYY-MM-DD format
  if (dob.includes('-')) {
    const parts = dob.split('-')
    if (parts.length === 3) {
      const [year, month, day] = parts
      return `${month}/**/${year}`
    }
  }
  
  // Fallback: mask middle characters
  if (dob.length > 4) {
    const first = dob.slice(0, 2)
    const last = dob.slice(-4)
    return `${first}/**/${last}`
  }
  
  return dob
}

/**
 * Mask SSN following prototype specification: ***-**-1234
 */
export const maskSSN = (ssn: string): string => {
  if (!ssn) return ssn
  
  // Remove all non-digit characters
  const digits = ssn.replace(/\D/g, '')
  
  if (digits.length !== 9) return '***-**-****'
  
  // Show last 4 digits: ***-**-1234
  const lastFour = digits.slice(-4)
  return `***-**-${lastFour}`
}

/**
 * Mask credit card number (for future use)
 */
export const maskCreditCard = (cardNumber: string): string => {
  if (!cardNumber) return cardNumber
  
  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '')
  
  if (digits.length < 4) return '****-****-****-****'
  
  // Show last 4 digits: ****-****-****-1234
  const lastFour = digits.slice(-4)
  return `****-****-****-${lastFour}`
}

/**
 * Mask full name (shows first name, masks last name)
 */
export const maskFullName = (fullName: string): string => {
  if (!fullName) return fullName
  
  const parts = fullName.trim().split(' ')
  if (parts.length === 1) {
    // Single name - mask all but first character
    const name = parts[0]
    return name.length > 1 ? `${name.charAt(0)}***` : name
  }
  
  // Multiple names - show first name, mask others
  const firstName = parts[0]
  const maskedOthers = parts.slice(1).map(name => 
    name.length > 1 ? `${name.charAt(0)}***` : name
  )
  
  return [firstName, ...maskedOthers].join(' ')
}

/**
 * Mask address (shows city/state, masks street)
 */
export const maskAddress = (address: string): string => {
  if (!address) return address
  
  // Simple masking - show last part (usually city, state, zip)
  const parts = address.split(',')
  if (parts.length > 1) {
    const cityState = parts.slice(-1).join(',').trim()
    return `***, ${cityState}`
  }
  
  // Fallback - mask first part
  return `***${address.slice(-10)}`
}

/**
 * Generic masking function with custom options
 */
export const maskValue = (
  value: string, 
  options: MaskingOptions = {}
): string => {
  if (!value) return value
  
  const {
    preserveFirst = 0,
    preserveLast = 0,
    maskChar = '*',
  } = options
  
  if (value.length <= preserveFirst + preserveLast) {
    return value
  }
  
  const firstPart = value.slice(0, preserveFirst)
  const lastPart = value.slice(-preserveLast)
  const middlePart = maskChar.repeat(Math.max(3, value.length - preserveFirst - preserveLast))
  
  return `${firstPart}${middlePart}${lastPart}`
}

/**
 * Mask patient data object
 */
export interface PatientData {
  fullName?: string
  email?: string
  phoneNumber?: string
  dateOfBirth?: string
  ssn?: string
  address?: string
  [key: string]: any
}

export const maskPatientData = (data: PatientData): PatientData => {
  const maskedData: PatientData = { ...data }
  
  if (maskedData.email) {
    maskedData.email = maskEmail(maskedData.email)
  }
  
  if (maskedData.phoneNumber) {
    maskedData.phoneNumber = maskPhone(maskedData.phoneNumber)
  }
  
  if (maskedData.dateOfBirth) {
    maskedData.dateOfBirth = maskDateOfBirth(maskedData.dateOfBirth)
  }
  
  if (maskedData.ssn) {
    maskedData.ssn = maskSSN(maskedData.ssn)
  }
  
  if (maskedData.address) {
    maskedData.address = maskAddress(maskedData.address)
  }
  
  // Note: fullName is typically shown unmasked in the prototype
  // but can be masked if needed for security
  
  return maskedData
}

/**
 * Unmask data for authorized users (admin/doctor view)
 * This would typically be used in secure, authenticated contexts
 */
export const unmaskPatientData = (maskedData: PatientData, originalData: PatientData): PatientData => {
  return {
    ...maskedData,
    ...originalData,
  }
}

/**
 * Check if a value appears to be masked
 */
export const isMasked = (value: string): boolean => {
  if (!value) return false
  
  // Check for common masking patterns
  const maskingPatterns = [
    /^\*{2,}/, // Starts with multiple asterisks
    /--\d{4}$/, // Phone pattern: --1234
    /\d{2}\/\*{2}\/\d{4}/, // DOB pattern: MM/**/YYYY
    /^\*{3}-\*{2}-\d{4}$/, // SSN pattern: ***-**-1234
    /^.{1}\*{3}@/, // Email pattern: j***@domain.com
  ]
  
  return maskingPatterns.some(pattern => pattern.test(value))
}

/**
 * Get display value - shows masked or unmasked based on context
 */
export const getDisplayValue = (
  value: string, 
  isSecureContext: boolean = false
): string => {
  if (isSecureContext) {
    return value
  }
  
  // Apply appropriate masking based on value type
  if (value.includes('@')) {
    return maskEmail(value)
  }
  
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value) || /^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return maskDateOfBirth(value)
  }
  
  if (/^\d{3}-\d{3}-\d{4}$/.test(value) || /^\d{10}$/.test(value)) {
    return maskPhone(value)
  }
  
  if (/^\d{3}-\d{2}-\d{4}$/.test(value) || /^\d{9}$/.test(value)) {
    return maskSSN(value)
  }
  
  return value
}

// Export all masking functions
export const maskingUtils = {
  maskEmail,
  maskPhone,
  maskDateOfBirth,
  maskSSN,
  maskCreditCard,
  maskFullName,
  maskAddress,
  maskValue,
  maskPatientData,
  unmaskPatientData,
  isMasked,
  getDisplayValue,
}
