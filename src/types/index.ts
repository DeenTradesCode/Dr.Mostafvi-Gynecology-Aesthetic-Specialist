// Common types used throughout the application

export interface Service {
  id: string
  title: string
  description: string
  category: 'gynecology' | 'aesthetics' | 'cosmetics'
  icon: string
  features: string[]
  price?: string
}

export interface Testimonial {
  id: string
  name: string
  text: string
  rating: number
  avatar: string
  date: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: {
    weekdays: string
    weekends: string
  }
}

export interface BusinessInfo {
  name: string
  description: string
  contact: ContactInfo
  socialMedia: {
    facebook?: string
    instagram?: string
    twitter?: string
    linkedin?: string
  }
}

export interface InsurancePlan {
  id: string
  name: string
  type: 'primary' | 'secondary'
  accepted: boolean
}

export interface Expectation {
  id: string
  title: string
  description: string
  icon: string
}

export interface DoctorProfile {
  name: string
  title: string
  credentials: string[]
  bio: string
  image: string
  specialties: string[]
  experience: number
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
  service?: string
  preferredDate?: string
  preferredTime?: string
}

export interface ThemeContextType {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export interface LegalLink {
  label: string
  href: string
}

// Component prop types
export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export interface CardProps extends ComponentProps {
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

// API response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}
