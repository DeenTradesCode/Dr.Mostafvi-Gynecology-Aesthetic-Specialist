# ⚙️ Technical Requirements

## Core Framework & Build Tools

- **React:** 18.2+ (latest stable)
- **Build Tool:** Vite 4+ (lightweight, fast HMR)
- **TypeScript:** 5.0+ (type safety, better DX)
- **Package Manager:** pnpm (faster, disk-efficient)

## Essential Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "react-helmet-async": "^1.3.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.263.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.0",
    "typescript": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.3.0"
  }
}
```

## Performance Optimizations

- **Code Splitting:** Route-based lazy loading
- **Image Optimization:** WebP format, responsive images
- **Bundle Size:** Target < 200KB gzipped initial bundle
- **Core Web Vitals:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Tree Shaking:** ES modules, dead code elimination

## Styling & UI

- **CSS Framework:** Tailwind CSS (utility-first, purged)
- **Icons:** Lucide React (tree-shakeable, lightweight)
- **Animations:** Framer Motion (optimized, gesture-friendly)
- **Fonts:** Google Fonts with `font-display: swap`

## Browser Support

- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile:** iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement:** Graceful degradation for older browsers

## Development Tools

- **Linting:** ESLint + Prettier
- **Type Checking:** TypeScript strict mode
- **Git Hooks:** Husky + lint-staged
- **Bundle Analysis:** Vite Bundle Analyzer

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
└── assets/             # Static assets (images, icons)
```

## Environment Setup

### Prerequisites

- Node.js 18+
- pnpm 8+
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd dr-mastafavi-website

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Performance Monitoring

- **Lighthouse CI:** Automated performance testing
- **Bundle Analyzer:** Monitor bundle size and dependencies
- **Core Web Vitals:** Real user monitoring setup
- **Error Tracking:** Sentry or similar for production monitoring
