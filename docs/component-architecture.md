# 🖥️ Component Architecture

## App Structure (SPA)

```jsx
<App>
  <NavBar />
  <Hero />
  <Services />
  <DoctorBio />
  <Expectations />
  <Testimonials />
  <Insurance />
  <Contact />
  <Footer />
  <ChatWidget />
  <FloatingCTA />
</App>
```

## Component Specifications

### NavBar

- **Purpose:** Logo + brand + non-sticky nav. Sticky CTA (Book Appointment)
- **Props:** `isScrolled: boolean`, `onBookAppointment: () => void`
- **Features:** Responsive menu, dark/light mode toggle
- **Accessibility:** Keyboard navigation, ARIA labels

### Hero

- **Purpose:** Headline, specialties, location, CTA. Background carousel or placeholder image
- **Props:** `headline: string`, `specialties: string[]`, `location: string`
- **Features:** Background image carousel, animated text
- **Accessibility:** Alt text for images, semantic heading structure

### Services

- **Purpose:** Accordion cards → Gynecology | Aesthetics | Cosmetics
- **Props:** `services: Service[]`, `onServiceClick: (service: Service) => void`
- **Features:** Expandable cards, smooth animations
- **Accessibility:** ARIA expanded states, keyboard navigation

### DoctorBio

- **Purpose:** Portrait placeholder (green) + intro text. CTA beneath
- **Props:** `bio: string`, `credentials: string[]`, `image: string`
- **Features:** Image placeholder, credential badges
- **Accessibility:** Alt text for portrait, semantic structure

### Expectations

- **Purpose:** Icons or text blocks explaining patient process (paperless, tablets, advanced tech)
- **Props:** `expectations: Expectation[]`
- **Features:** Icon grid, animated reveals
- **Accessibility:** Icon descriptions, semantic list structure

### Testimonials

- **Purpose:** Carousel/swipeable. Placeholder avatars
- **Props:** `testimonials: Testimonial[]`
- **Features:** Touch/swipe gestures, auto-advance
- **Accessibility:** ARIA live region, pause on focus

### Insurance

- **Purpose:** List of accepted plans. CTA for "Verify Coverage & Book"
- **Props:** `insurancePlans: string[]`, `onVerifyCoverage: () => void`
- **Features:** Searchable list, verification flow
- **Accessibility:** Searchable with ARIA live regions

### Contact

- **Purpose:** Map preview placeholder + small contact form
- **Props:** `contactInfo: ContactInfo`, `onFormSubmit: (data: FormData) => void`
- **Features:** Form validation, map integration
- **Accessibility:** Form labels, error announcements

### Footer

- **Purpose:** Hours, address, phone, legal links
- **Props:** `businessInfo: BusinessInfo`, `legalLinks: LegalLink[]`
- **Features:** Collapsible sections on mobile
- **Accessibility:** Semantic footer structure

### ChatWidget

- **Purpose:** Floating bottom-right, styled with complementary palette
- **Props:** `isOpen: boolean`, `onToggle: () => void`
- **Features:** Dark/light aware, persistent state
- **Accessibility:** Focus management, ARIA expanded states

### FloatingCTA

- **Purpose:** Persistent bottom action bar → Ask Question / Book Appointment
- **Props:** `onAskQuestion: () => void`, `onBookAppointment: () => void`
- **Features:** Always visible, mobile-optimized
- **Accessibility:** High contrast, clear labels

## Component Patterns

### State Management

- **Local State:** useState for component-specific state
- **Global State:** Context API for theme, user preferences
- **Form State:** Custom hooks for form management
- **URL State:** React Router for navigation state

### Styling Approach

- **Tailwind CSS:** Utility-first styling
- **Component Variants:** CVA (Class Variance Authority) for component variants
- **Responsive Design:** Mobile-first breakpoints
- **Dark Mode:** CSS custom properties with Tailwind

### Performance Patterns

- **Lazy Loading:** React.lazy for route-based code splitting
- **Memoization:** React.memo for expensive components
- **Virtualization:** For large lists (testimonials, services)
- **Image Optimization:** Next.js Image component patterns

## Type Definitions

```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  category: "gynecology" | "aesthetics" | "cosmetics";
  icon: string;
}

interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
```
