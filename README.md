# Dr. Noreen Mostafavi - OB/GYN & Aesthetics Website

A production-ready Next.js 14 web application for Dr. Noreen Mostafavi's women's health and aesthetics practice in Staten Island, NY.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build && npm start
```

## 📋 Project Overview

This is a modern, conversion-focused website featuring:

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** with custom brand tokens
- **Mobile-first responsive design**
- **Advanced search functionality** with fuzzy matching
- **SEO optimization** with structured data
- **Accessibility compliance** (WCAG 2.1 AA)
- **Performance optimized** for Lighthouse scores ≥ 90

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Fuse.js** for fuzzy search
- **Lucide React** for icons

## 🎨 Design System

### Brand Colors
- **Background**: `#FBFAFB` (soft near-white)
- **Text**: `#2A2530` (deep charcoal)
- **Primary Accent**: `#7B4B7F` (modern plum)
- **Secondary Accent**: `#E9D9EC` (plum tint)
- **Teal Accent**: `#2E8C89` (clinical balance)

### Typography
- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── gynecology/        # Gynecology services
│   ├── aesthetics/        # Aesthetics services
│   ├── cosmetic-gyn/      # Cosmetic gynecology
│   ├── contact/           # Contact page
│   ├── insurance-faqs/    # Insurance FAQs
│   └── [legal-pages]/     # Privacy, Terms, Accessibility
├── components/            # Reusable React components
├── data/                  # Service data and search index
└── lib/                   # Utility functions
```

## 🔍 Search Functionality

The website includes an advanced search system with:

- **Fuzzy matching** for typos and partial matches
- **Debounced input** (200ms delay)
- **Keyboard navigation** (arrow keys, enter, escape)
- **Accessibility features** (ARIA labels, screen reader support)
- **Category filtering** with visual pills

## 📱 Features

### Core Features
- **Hero video** with autoplay and intersection observer
- **Service categories** with detailed individual pages
- **Contact form** with validation
- **Insurance FAQs** with accordion interface
- **Responsive design** for all devices

### SEO & Performance
- **Structured data** (JSON-LD) for medical practice
- **Meta tags** and Open Graph optimization
- **Image optimization** with Next.js Image component
- **Lazy loading** for non-critical assets
- **Performance monitoring** ready

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Focus management** and visible indicators
- **Screen reader** compatibility

## 🏥 Business Information

- **Practice**: Noreen Kamal-Mostafavi, MD PLLC
- **Address**: 3860 Victory Blvd, 1st Floor, Staten Island, NY 10314
- **Phone**: (718) 400-4588
- **Hours**: Mon–Fri 10–6; Sat–Sun Closed
- **Patient Portal**: https://patientportal.advancedmd.com/

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file (see `.env.local.example`):

```bash
# No secrets required for this project
# All configuration is handled in the code
```

### Tailwind Configuration
Custom brand tokens are defined in `tailwind.config.js`:

```javascript
colors: {
  bg: '#FBFAFB',
  ink: '#2A2530',
  accent: '#7B4B7F',
  'accent-2': '#E9D9EC',
  teal: '#2E8C89',
}
```

## 📊 Performance

The website is optimized for:

- **Lighthouse Mobile Score**: ≥ 90
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with code splitting
- **Image Optimization**: Next.js Image component
- **Font Loading**: Optimized with preconnect

## 🔒 Security

- **Content Security Policy** headers
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: origin-when-cross-origin

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For technical support or questions about this website, please contact the development team.

---

**Built with ❤️ for Dr. Noreen Mostafavi's practice**