import {
  Calendar,
  MapPin,
  Heart,
  Sparkles,
  Scissors,
  Award,
  Users,
  Clock,
} from 'lucide-react'
import type { DoctorProfile, Testimonial } from '@/types'
import type { LucideIcon } from 'lucide-react'

export interface HeroContent {
  headlinePrefix: string
  headlineHighlight: string
  headlineSuffix?: string
  description: string
  specialties: string[]
  primaryCta: {
    label: string
    href: string
    icon: LucideIcon
  }
  secondaryCta: {
    label: string
    icon: LucideIcon
  }
  trustSignals: {
    ratingLabel: string
    totalPatientsLabel: string
  }
}

export const heroContent: HeroContent = {
  headlinePrefix: 'Expert Care for ',
  headlineHighlight: "Women's Health",
  description:
    'Dr. Noreen Mastafavi provides comprehensive gynecology and aesthetic services with a focus on personalized, compassionate care for women of all ages.',
  specialties: ['Gynecology', 'Aesthetic Medicine', 'Cosmetic Procedures'],
  primaryCta: {
    label: 'Book Appointment',
    href: '/portal',
    icon: Calendar,
  },
  secondaryCta: {
    label: 'View Location',
    icon: MapPin,
  },
  trustSignals: {
    ratingLabel: '4.9/5 Rating',
    totalPatientsLabel: '500+ Happy Patients',
  },
}

export interface ServiceContent {
  id: string
  title: string
  icon: LucideIcon
  description: string
  services: string[]
}

export const servicesContent: ServiceContent[] = [
  {
    id: 'gynecology',
    title: 'Gynecology',
    icon: Heart,
    description: "Comprehensive women's health services",
    services: [
      'Annual Exams & Pap Smears',
      'Family Planning & Contraception',
      'Menopause Management',
      'Pelvic Pain Treatment',
      'Sexual Health Counseling',
    ],
  },
  {
    id: 'aesthetics',
    title: 'Aesthetic Medicine',
    icon: Sparkles,
    description: 'Advanced cosmetic treatments',
    services: [
      'Botox & Dermal Fillers',
      'Laser Treatments',
      'Chemical Peels',
      'Microneedling',
      'Body Contouring',
    ],
  },
  {
    id: 'cosmetics',
    title: 'Cosmetic Procedures',
    icon: Scissors,
    description: 'Surgical and non-surgical options',
    services: [
      'Vaginal Rejuvenation',
      'Labiaplasty',
      'Breast Procedures',
      'Tummy Tuck',
      'Liposuction',
    ],
  },
]

export const testimonialsContent: Testimonial[] = [
  {
    id: 'testimonial-sarah-johnson',
    name: 'Sarah Johnson',
    text: 'Dr. Mastafavi provided exceptional care during my procedure. Her expertise and compassion made me feel completely comfortable throughout the entire process.',
    rating: 5,
    avatar: 'placeholder-sarah',
    date: '2 weeks ago',
  },
  {
    id: 'testimonial-emily-chen',
    name: 'Emily Chen',
    text: "I've been seeing Dr. Mastafavi for years and she always takes the time to listen and explain everything clearly. Highly recommend her services!",
    rating: 5,
    avatar: 'placeholder-emily',
    date: '1 month ago',
  },
  {
    id: 'testimonial-maria-rodriguez',
    name: 'Maria Rodriguez',
    text: "The aesthetic treatments I received exceeded my expectations. Dr. Mastafavi's attention to detail and natural results are outstanding.",
    rating: 5,
    avatar: 'placeholder-maria',
    date: '3 weeks ago',
  },
]

export const doctorProfile: DoctorProfile = {
  name: 'Dr. Noreen Mastafavi',
  title: 'Gynecology & Aesthetic Specialist',
  credentials: [
    'Board Certified Gynecologist',
    'Aesthetic Medicine Specialist',
    '15+ Years Experience',
    '500+ Successful Procedures',
  ],
  bio: "Dr. Mastafavi is a board-certified gynecologist with over 15 years of experience in women's health and aesthetic medicine. She combines her medical expertise with a passion for helping women look and feel their best.",
  specialties: [
    'Personalized care',
    'Advanced techniques',
    'Holistic wellness',
  ],
  experience: 15,
  image: 'placeholder',
}

export const insurancePlans: string[] = [
  'Blue Cross Blue Shield',
  'Aetna',
  'Cigna',
  'UnitedHealthcare',
  'Humana',
  'Kaiser Permanente',
  'Medicare',
  'Medicaid',
]

export const insuranceContent = {
  headline: 'Insurance & Coverage',
  subheading:
    'We accept most major insurance plans to make quality care accessible and affordable.',
  callout: {
    title: "Don't see your insurance?",
    description: 'Contact us to verify coverage or discuss payment options.',
    ctaLabel: 'Contact Us',
  },
  verificationSection: {
    title: 'Verify Your Coverage',
    description:
      'Not sure if your insurance covers our services? We can help you verify your coverage and estimate your out-of-pocket costs.',
    primaryCtaLabel: 'Call to Verify Coverage',
    secondaryCtaLabel: 'Schedule Consultation',
  },
  paymentOptions: [
    'Insurance billing',
    'Flexible payment plans',
    'HSA/FSA accepted',
    'Cash discounts available',
  ],
}

export interface DoctorStat {
  label: string
  value: string
  icon: LucideIcon
}

export const doctorAdditionalBio =
  'Her approach focuses on personalized care, using the latest techniques and technologies to provide safe, effective treatments that enhance both health and confidence.'

export const doctorStats: DoctorStat[] = [
  { icon: Users, label: 'Happy Patients', value: '500+' },
  { icon: Clock, label: 'Years Experience', value: '15+' },
  { icon: Award, label: 'Certifications', value: '8' },
  { icon: Calendar, label: 'Procedures Done', value: '1000+' },
]
