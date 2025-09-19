# 🚀 Project Setup Guide

## Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   ```

3. **Open in browser:**
   - The app will automatically open at `http://localhost:3000`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm type-check` - Run TypeScript checks
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Project Structure

```
src/
├── components/          # React components
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── DoctorBio.tsx
│   ├── Expectations.tsx
│   ├── Testimonials.tsx
│   ├── Insurance.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ChatWidget.tsx
│   └── FloatingCTA.tsx
├── hooks/              # Custom React hooks
│   ├── useTheme.ts
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   └── useIntersectionObserver.ts
├── utils/              # Utility functions
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── styles/             # Global styles
│   └── globals.css
├── App.tsx             # Main app component
└── main.tsx            # App entry point
```

## Features Included

✅ **React 18** with TypeScript  
✅ **Vite** for fast development  
✅ **Tailwind CSS** with custom design system  
✅ **Framer Motion** for animations  
✅ **React Router** for navigation  
✅ **React Helmet** for SEO  
✅ **Dark/Light mode** support  
✅ **Mobile-first** responsive design  
✅ **ESLint + Prettier** for code quality  
✅ **Husky** for git hooks  
✅ **Path aliases** for clean imports

## Next Steps

1. **Customize content** - Update placeholder text and images
2. **Add real data** - Replace mock data with actual content
3. **Implement forms** - Connect contact forms to backend
4. **Add analytics** - Integrate Google Analytics or similar
5. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform

## Development Tips

- Use `@/` imports for clean paths (configured in tsconfig.json)
- All components are TypeScript with proper prop interfaces
- Tailwind classes are optimized for the design system
- Dark mode is handled automatically with the theme provider
- All animations respect `prefers-reduced-motion`

## Troubleshooting

- **Port already in use?** Change the port in `vite.config.ts`
- **TypeScript errors?** Run `pnpm type-check` to see issues
- **Styling issues?** Check Tailwind classes and custom CSS
- **Build errors?** Run `pnpm build` to see detailed error messages
