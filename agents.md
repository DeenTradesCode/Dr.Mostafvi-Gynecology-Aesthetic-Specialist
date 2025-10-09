# Codebase Agents & Architecture

## 1. Project Snapshot

- **Purpose**: Marketing and patient-engagement site for Dr. Noreen Mastafavi, combining a public marketing landing page with an exploratory patient portal experience.
- **Primary surfaces**: Single-page marketing site at `/` and a multi-step patient portal flow under `/portal`.
- **Tech stack**: React 18 with TypeScript, Vite, React Router v7, Tailwind CSS (with custom utility classes), Framer Motion, Lucide icons, and `react-helmet-async`.
- **Build & deploy**: `npm run build` (Vite) produces the static bundle; `render.yaml` and `Procfile` run `npm run preview` on Render’s Node environment.
- **Developer tooling**: ESLint (flat config), Prettier with Tailwind plugin, Husky + lint-staged pre-commit automation, TypeScript strictness via `tsconfig.json`.

## 2. Runtime Architecture

- `src/main.tsx` bootstraps the app with `React.StrictMode`, `HelmetProvider`, and `BrowserRouter`, then renders `<App />`.
- `src/App.tsx` wraps all routes in `ThemeProvider` (`useTheme` hook) to manage light/dark mode with localStorage persistence.
- Marketing route: `/` renders `MainWebsite`, which composes page sections (`NavBar`, `Hero`, `Services`, `DoctorBio`, `Expectations`, `Testimonials`, `Insurance`, `Contact`, `Footer`) plus utility widgets (`ChatWidget`, `FloatingCTA`).
- Portal route: `/portal/*` renders `PortalLayout` (shared nav/footer shell) and `<PatientPortal />`, which owns its own nested router for the booking flow.
- `PatientPortal` (in `src/components/portal/PatientPortal.tsx`) mounts a `PortalProvider` (`usePortalState`) and defines nested routes for each booking step, a confirmation page, and a dashboard stub.

## 3. UI Surface Areas

### Marketing Site (`/`)

- Section components in `src/components/*.tsx` render anchored sections with Tailwind utility classes and Framer Motion animations for reveal effects.
- Copy and content (services, testimonials, insurance, etc.) live inline inside each component; there is no shared CMS or data module yet.
- `NavBar` includes responsive navigation, appointment CTA, and theme toggle; IDs such as `#services` or `#contact` align with anchor navigation.
- `ChatWidget` and `FloatingCTA` provide persistent conversion affordances layered over the marketing page.

### Patient Portal (`/portal`)

- `portal/StepController.tsx` shows the multi-step progress header and manages visual state.
- Step components under `portal/steps/` implement each phase: access (`LoginStep` and `GuestStep`), patient info capture, appointment selection, review, and confirmation.
- `AppointmentStep` integrates with the local `mockApi` to load available times; other steps currently store form state locally and commit to `usePortalState` when advancing.
- `portal/dashboard/Dashboard.tsx` renders a static dashboard prototype with masked PII, demonstrating how post-booking content could look.

## 4. State, Data, and Domain Utilities

- `src/hooks/useTheme.tsx`: Context provider storing theme preference in localStorage and syncing with the document root.
- `src/hooks/usePortalState.tsx`: Central state machine for the booking flow (step tracking, patient data, appointment details, persistence to localStorage, navigation helpers).
- `src/hooks/useAuth.tsx`: Mocked authentication provider with localStorage token handling; currently unused by the marketing route or portal router.
- Supporting hooks: `useLocalStorage`, `useDebounce`, `useIntersectionObserver`, and `useAuth` helpers for future interaction patterns.
- `src/types/index.ts` defines domain models (services, testimonials, contact info, portal payloads) for consistency across components.
- `src/utils/index.ts` aggregates view helpers (`cn`, formatters, scroll helpers, storage utilities); `utils/dataMasking.ts` and `utils/validation.ts` provide patient-portal-specific masking and form validation logic.
- `src/utils/mockApi.ts` simulates appointment availability, booking, and dashboard data used by the portal prototype.

## 5. Styling & Motion System

- Tailwind configured via `tailwind.config.js` with a custom palette (e.g., `blush-rose`, `warm-bronze`) matching the brand direction.
- Global styles in `src/styles/globals.css` define typography (Playfair + Nunito), utility classes (`container-custom`, `section-padding`, button variants), scrollbars, and animation helpers.
- Framer Motion (`motion`, `AnimatePresence`) animates section entrances, accordion expansions, and portal step transitions.
- Icons rely on `lucide-react`, keeping the visual system consistent across marketing and portal components.

## 6. Documentation & Operational Assets

- `docs/` contains working reference material: component architecture, design system, SEO strategy, technical requirements, and UX notes.
- `setup.md` outlines local development steps, prerequisites, and known issues encountered during initial scaffolding.
- `render.yaml` and `Procfile` codify deployment to Render; environment variables are minimal (`NODE_ENV`, `PORT`), and the preview server listens on the Render-assigned port.

## 7. Open Questions & Next Steps

- The marketing site renders static content; consider centralizing copy and structured data if repeated across sections or needed for translations/SEO.
- `AuthProvider` and auth-related hooks are not yet wired into the portal UI—decide whether to activate authentication or simplify the guest flow.
- Portal validation utilities exist in `utils/validation.ts` but steps still implement bespoke validation; unifying them would reduce duplication.
- `react-helmet-async` is initialized but no `<Helmet>` usage exists yet; metadata management remains a to-do.
- Mock API responses power the portal prototype; plan for real API integration or additional mocking for dashboard actions (edit/cancel appointments).
