# Patient Portal Prototype – Dr. Mastafavi

## Purpose

Build a multi-step, account-based patient portal that allows patients to:

- Book appointments via guest or logged-in flow
- Enter personal and insurance information
- Select a date and time based on dynamically fetched availability using a mock dataset
- View and manage appointments from a dashboard if logged in
- Handle sensitive data securely through field masking

## Component Architecture

- **PatientPortal**
- **StepController**
- **LoginStep** OR **GuestStep**
- **PatientInfoStep**
- **AppointmentStep**
- **ReviewStep**
- **ConfirmationStep**
- **Dashboard** (for logged-in users)

## Flow Breakdown

### Step 1 – Access

**Options:**

- Continue as Guest
- Login with Social (Google, Apple, Facebook) – highlighted
- Email + Password

Patients can bypass account creation to quickly book appointments. Guest bookings will be merged with accounts on the backend if matching records exist.

### Step 2 – Patient Information

**Fields (all required):**

- Full Name (text input)
- Date of Birth (masked MM/DD/YYYY)
- Phone Number (masked ###-###-####)
- Email (validated and masked)
- Insurance Provider (dropdown + "Other" free text)

### Step 3 – Appointment Details

**Reason for Booking:**

- Dropdown + free text
- Gynecology, Aesthetics, Cosmetic Consultation, Other

**Date/Time Selection:**

- Date Picker with unavailable days disabled
- Time slots populated through a mock dynamic fetch

**Example mock availability structure (conceptual):**

```
2025-10-05: 09:00 AM, 10:30 AM, 02:00 PM
2025-10-06: 08:00 AM, 11:00 AM, 01:30 PM, 03:00 PM
2025-10-07: 09:15 AM, 12:00 PM
```

### Step 4 – Review

Display masked information for confirmation:

- Name (full)
- DOB masked as `MM/**/YYYY`
- Phone masked `--1234`
- Email masked `j***@gmail.com`
- Insurance Provider shown full
- Appointment Date and Time

**CTA:** Confirm Appointment

### Step 5 – Confirmation

**Stub success message:**

> "Your appointment request has been submitted. We will contact you shortly."

**CTA options:**

- If guest: Save booking by creating an account
- If logged in: Go to Dashboard

No download or print options at this stage.

### Step 6 – Dashboard (Logged-In Patients Only)

**Features:**

- View upcoming appointments
- Update contact and insurance information with periodic limit (e.g., 30 days for insurance changes)
- Cancel or reschedule appointments (future backend integration)

PDF download and printing are excluded for now.

## Styling and Placeholders

- Use the global light/dark color palette
- Use placeholder green (`#A3CFA4`) for images and icons (doctor portraits, empty states)
- Display a progress indicator (Step X of Y) at the top of each step
- **Mobile:** full-width inputs
- **Tablet/Desktop:** centered card layout

## Privacy and Security

- Mask DOB, phone, and email on review and dashboard
- Prioritize social logins for speed and security
- Guest and account merging handled later by backend
- Periodic limits on sensitive field changes to prevent abuse

## API Stubs

- `POST /api/appointments` for appointment requests (no real backend)
- `GET /api/availability?date=YYYY-MM-DD` returns mock dataset time slots

No backend response handling is required during the prototype. The frontend shows stubbed confirmation messages.

## Integration with Main Website

### Entry Points

- **Primary**: "Book Appointment" buttons in Hero and Contact sections redirect to `/portal`
- **Secondary**: New "Patient Portal" link in main navigation menu
- **Direct**: Users can navigate directly to `/portal` URL
- **Dashboard Access**: Logged-in users see "My Appointments" in navigation

### Technical Integration

- Extends existing React + TypeScript + Vite architecture
- Uses shared theme system (light/dark mode) from `useTheme` hook
- Integrates with existing component library and Tailwind CSS classes
- Leverages existing routing system (React Router) for seamless navigation
- Shares design tokens and color palette from `design-system.md`

### User Journey Mapping

#### From Main Website

1. **Guest User Flow**:
   - User clicks "Book Appointment" → Redirects to `/portal`
   - User selects "Continue as Guest" → Proceeds through steps 2-5
   - After confirmation → Returns to main site with success message
   - Option to create account for future bookings

2. **Returning User Flow**:
   - User clicks "Book Appointment" → Redirects to `/portal`
   - User logs in with social/email → Proceeds through steps 2-5
   - After confirmation → Redirects to Dashboard
   - Can access dashboard anytime via navigation menu

3. **Dashboard Integration**:
   - Dashboard accessible from main site navigation when logged in
   - Seamless transition between main site and portal sections
   - Consistent branding and navigation experience

## Technical Architecture

### Shared Resources

- **Theme System**: Extends existing light/dark mode implementation
- **Component Library**: Reuses existing buttons, forms, inputs, and layout components
- **State Management**: Uses React Context for portal-specific state (step navigation, form data)
- **API Configuration**: Integrates with existing API structure for consistency
- **Routing**: Extends current React Router setup with `/portal/*` routes

### Portal-Specific Components

- **Multi-step Form System**: Custom step controller with progress tracking
- **Authentication Logic**: Social login integration (Google, Apple, Facebook)
- **Appointment Management**: Date/time picker with mock availability API
- **Data Masking Utilities**: Reusable functions for PII protection
- **Validation System**: Form validation with real-time feedback

### File Structure

```
src/
├── components/
│   ├── portal/
│   │   ├── PatientPortal.tsx
│   │   ├── StepController.tsx
│   │   ├── steps/
│   │   │   ├── LoginStep.tsx
│   │   │   ├── GuestStep.tsx
│   │   │   ├── PatientInfoStep.tsx
│   │   │   ├── AppointmentStep.tsx
│   │   │   ├── ReviewStep.tsx
│   │   │   └── ConfirmationStep.tsx
│   │   └── dashboard/
│   │       └── Dashboard.tsx
│   └── shared/ (existing components)
├── hooks/
│   ├── usePortalState.ts
│   └── useAppointmentBooking.ts
└── utils/
    ├── dataMasking.ts
    └── validation.ts
```

## Portal-Specific Styling

### Design System Adherence

Following the established `design-system.md` principles:

#### Color Palette Integration

- **Background**: Inherits `bg-light` (`#F5F5F7`) / `bg-dark` (`#0B0C0E`)
- **Primary Text**: `text-heading-light` (`#334E68`) / `text-heading-dark` (`#D9B4C3`)
- **Accent Colors**:
  - Primary CTA: `blush-rose` (`#D9B4C3`)
  - Secondary actions: `lavender-mist` (`#E6D6E1`)
  - Success states: `warm-bronze` (`#C19A6B`)
- **Placeholder Elements**: `#A3CFA4` (muted green) for icons and empty states

#### Typography

- **Page Headers**: Playfair Display, 600 weight, `text-heading-light/dark`
- **Step Titles**: Playfair Display, 600 weight, 1.5rem (24px)
- **Form Labels**: Nunito, 600 weight, 0.875rem (14px)
- **Body Text**: Nunito, 400 weight, 1rem (16px)
- **Button Text**: Nunito, 700 weight, uppercase, 0.875rem (14px)

#### Layout & Spacing

- **Container**: Max-width 768px, centered, with `container-custom` class
- **Card Design**: Rounded corners (1rem), subtle shadow, consistent padding
- **Form Spacing**: 1.5rem (24px) between form sections
- **Button Spacing**: 1rem (16px) between action buttons
- **Progress Indicator**: Fixed top positioning, full-width background

#### Responsive Design

- **Mobile (320px-767px)**:
  - Full-width form inputs
  - Single-column layout
  - Larger touch targets (44px minimum)
  - Simplified progress indicator
- **Tablet (768px-1023px)**:
  - Centered card layout (max 600px width)
  - Two-column form fields where appropriate
  - Enhanced progress visualization
- **Desktop (1024px+)**:
  - Centered card with sidebar for progress
  - Multi-column form layouts
  - Hover states and micro-interactions

#### Component States

- **Form Inputs**:
  - Default: Light border, subtle background
  - Focus: Blush rose border, enhanced shadow
  - Error: Red border, error message below
  - Success: Green border, checkmark icon
- **Buttons**:
  - Primary: Blush rose background, white text
  - Secondary: Transparent with blush rose border
  - Disabled: Muted colors, reduced opacity
- **Progress Steps**:
  - Active: Blush rose background
  - Completed: Warm bronze background
  - Pending: Light gray background

#### Animation & Transitions

- **Step Transitions**: 300ms slide animation between steps
- **Form Validation**: 200ms fade-in for error messages
- **Button Interactions**: 200ms color transitions
- **Loading States**: Subtle pulse animation for API calls
- **Success Feedback**: 500ms scale animation for confirmations

#### Accessibility

- **Focus Management**: Clear focus indicators with 2px blush rose outline
- **Color Contrast**: Minimum 4.5:1 ratio for all text elements
- **Screen Reader**: Proper ARIA labels and semantic HTML structure
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Error Handling**: Clear, descriptive error messages with visual indicators

## Additional Notes

- No multilingual support in this prototype
- The dynamic availability mock dataset simulates realistic scheduling behavior
- The patient flow is designed for minimal friction while preserving the structure for future account-based features
- All styling follows the established design system for brand consistency
- Portal maintains the same high-quality user experience as the main website
