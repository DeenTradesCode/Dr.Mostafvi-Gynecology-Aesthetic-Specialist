# Dr. Noreen Kamal-Mostafavi, MD PLLC Website

A modern, accessible Next.js website for Dr. Noreen Kamal-Mostafavi's women's health and wellness practice in Staten Island, NY.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📋 Features

- **Next.js 14** with App Router and TypeScript
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant
- **SEO Optimized** - Structured data and meta tags
- **Performance** - Optimized for Core Web Vitals
- **Hero Video** - Background video with fallbacks
- **Search Functionality** - Fuzzy search across services
- **Service Pages** - Dynamic pages for all services

## 🏥 Services

### Gynecology
- Birth Control, Endometriosis, Fibroids, Incontinence
- Menopause, Menstrual Disorders, Ovarian Cysts, Pelvic Pain
- PCOS, UTI, Vaginitis, Vulvar Disorders
- Hysteroscopy, Laparoscopy, NovaSure Ablation, MonaLisa Touch

### Aesthetics
- Botox & Fillers, Chin Liposuction, Laser Hair Removal
- Lumecca, Morpheus8, PRP Hair Restoration, PRP (Skin)
- Skin Tightening

### Cosmetic Gynecology
- Labiaplasty, Vaginal Revitalization, Vaginoplasty
- Sexual Orgasm Surgeries, MonaLisa Touch

## 🎯 Key Features

- **Booking-First Design** - Prominent CTAs throughout
- **Patient Portal Integration** - Direct links to AdvancedMD
- **Insurance Information** - Comprehensive coverage details
- **Contact Forms** - Non-PHI contact forms with validation
- **Search** - Intelligent service search with synonyms
- **Structured Data** - Rich snippets for better SEO

## 📱 Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Components**: Radix UI for accessible components
- **Search**: Fuse.js for fuzzy search functionality
- **Icons**: Lucide React for consistent iconography
- **Performance**: Optimized images, code splitting, prefetching

## 🔧 Development

### Project Structure

```
app/                    # Next.js App Router pages
├── globals.css        # Global styles
├── layout.tsx         # Root layout
├── page.tsx          # Home page
├── gynecology/       # Gynecology services
├── aesthetics/       # Aesthetic services
├── cosmetic-gyn/     # Cosmetic gynecology services
├── insurance-faqs/   # Insurance and FAQs
├── contact/          # Contact page
├── privacy/          # Privacy policy
├── terms/            # Terms of service
└── accessibility/    # Accessibility statement

components/            # Reusable React components
├── Header.tsx        # Navigation header
├── Footer.tsx        # Site footer
├── HeroVideo.tsx     # Hero section with video
├── SearchBar.tsx     # Service search component
└── ServicePageTemplate.tsx  # Template for service pages

data/                 # Static data
├── services.ts       # Service definitions
└── searchIndex.json  # Search index data

lib/                  # Utility functions
└── structured-data.ts # JSON-LD generators
```

### Environment Variables

No environment variables are required for this static site. All external links are hardcoded for security.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📞 Contact Information

**Noreen Kamal-Mostafavi, MD PLLC**
- Address: 3860 Victory Blvd, 1st Floor, Staten Island, NY 10314
- Phone: (718) 400-4588
- Hours: Mon–Fri 10 AM – 6 PM, Sat–Sun Closed

## 🔗 Important Links

- **Patient Portal**: https://patientportal.advancedmd.com/
- **Emergency**: Call 911 or go to nearest emergency room

## 📄 License

This project is proprietary and confidential. All rights reserved.