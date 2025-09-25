# Dr. Noreen Mostafavi - OB/GYN & Aesthetics Website

A production-ready Next.js 15 web application for Dr. Noreen Mostafavi's women's health and aesthetics practice in Staten Island, NY. Built with the latest framework standards and modern development practices.

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

- **Next.js 15.5.4** with App Router and TypeScript 5.9.2
- **React 19.1.1** with latest patterns and optimizations
- **Tailwind CSS 3.4.0** with custom brand tokens
- **Mobile-first responsive design**
- **Advanced search functionality** with fuzzy matching
- **SEO optimization** with structured data
- **Accessibility compliance** (WCAG 2.1 AA)
- **Performance optimized** for Lighthouse scores ≥ 90
- **Enhanced security headers** and modern best practices

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.5.4** with App Router (latest)
- **React 19.1.1** with modern patterns
- **TypeScript 5.9.2** with strict mode
- **Node.js 20+** runtime

### Styling & UI
- **Tailwind CSS 3.4.0** for styling
- **Lucide React 0.544.0** for icons
- **Custom design system** with brand tokens

### Functionality
- **Fuse.js 7.0.0** for fuzzy search
- **clsx & tailwind-merge** for conditional styling
- **Next.js Image** for optimized images

### Development Tools
- **ESLint 9.36.0** for code quality
- **Prettier 3.6.2** for code formatting
- **TypeScript** for type safety

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
Dr.Mostafvi-Gynecology-Aesthetic-Specialist/
├── app/                    # Next.js 15 App Router (root directory)
│   ├── gynecology/        # Gynecology services
│   ├── aesthetics/        # Aesthetics services
│   ├── cosmetic-gyn/      # Cosmetic gynecology
│   ├── contact/           # Contact page
│   ├── insurance-faqs/    # Insurance FAQs
│   ├── [legal-pages]/     # Privacy, Terms, Accessibility
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # SEO robots.txt
│   ├── manifest.ts        # PWA manifest
│   └── icon.tsx           # Favicon generation
├── components/            # Reusable React components
├── data/                  # Service data and search index
├── lib/                   # Utility functions
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
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

- `npm run dev` - Start development server (Next.js 15)
- `npm run build` - Build for production (optimized)
- `npm start` - Start production server
- `npm run lint` - Run ESLint 9.36.0
- `npm run type-check` - Run TypeScript 5.9.2 checks
- `npm run format` - Format code with Prettier

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file (see `env.local.example`):

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

### Enhanced Security Headers
- **X-Frame-Options**: DENY
- **X-Content-Type-Options**: nosniff
- **X-XSS-Protection**: 1; mode=block
- **Referrer-Policy**: origin-when-cross-origin
- **Permissions-Policy**: camera=(), microphone=(), geolocation=()
- **Strict-Transport-Security**: max-age=31536000; includeSubDomains

### Next.js 15 Security Features
- **Automatic HTTPS** in production
- **Secure headers** configuration
- **Content Security Policy** ready
- **Image optimization** with security checks

## 🚀 Latest Framework Features

### Next.js 15.5.4 Enhancements
- **Async Components**: All page components use async/await patterns
- **Enhanced Metadata API**: Dynamic metadata generation
- **Improved Image Optimization**: WebP/AVIF support
- **Turbopack**: Faster development builds
- **Server Actions**: Ready for form handling

### React 19.1.1 Features
- **Concurrent Features**: Automatic batching and transitions
- **Improved Hydration**: Better SSR/CSR consistency
- **Enhanced Error Boundaries**: Better error handling
- **Modern Hooks**: Latest React patterns

### TypeScript 5.9.2 Standards
- **Strict Mode**: Enhanced type checking
- **Exact Optional Properties**: Better type safety
- **No Unchecked Indexed Access**: Safer array/object access
- **Force Consistent Casing**: Better file naming

### Code Standards Compliance
- **ESLint 9.36.0**: Latest linting rules
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Lighthouse scores ≥ 90
- **SEO**: Structured data and meta optimization
- **Security**: Enhanced headers and CSP ready

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For technical support or questions about this website, please contact the development team.

---

**Built with ❤️ for Dr. Noreen Mostafavi's practice**