# Scope & Success Tracker

This tracker consolidates MVP acceptance criteria, target personas, success metrics, open questions, and startup tasks for the Dr. Mastafavi marketing site and patient portal. It should be updated as decisions are made or requirements shift.

## MVP Summary

- **Purpose**: Deliver a modern, mobile-first marketing and patient-engagement experience for Dr. Noreen Mastafavi’s gynecology and aesthetics practice (`docs/project-overview.md:5-16`).
- **Surfaces**: Public marketing site (`/`) and multi-step patient portal (`/portal`) as captured in `agents.md:13-28`.
- **Key Capabilities**: Service education, doctor biography, testimonials, insurance details, contact pathways, appointment booking flow, and exploratory portal dashboard (`docs/project-overview.md:26-31`).

## Acceptance Criteria

### Marketing Site (`/`)

- [ ] Hero section communicates value proposition on first paint with CTA buttons for booking and contact.
- [ ] Services, testimonials, insurance, and doctor bio content render responsively across mobile, tablet, and desktop breakpoints.
- [ ] Navigation provides smooth anchor scrolling, dark/light theme toggle, and persistent chat/floating CTA utilities (`agents.md:18-23`).
- [ ] Contact flows validate required fields, surface success/error states, and expose at least two contact options (phone + form/email).
- [ ] Metadata and structured data cover homepage, services, and contact details using `react-helmet-async`.

### Patient Portal (`/portal`)

- [ ] Access step offers both login (auth) and guest entry points; authentication state controls downstream routes.
- [ ] Patient information step persists data in `usePortalState` and rehydrates on refresh (`agents.md:30-37`).
- [ ] Appointment selection fetches availability from API (or approved mock), enforces validation, and advances to review.
- [ ] Review confirms captured information with masking consistent with `utils/dataMasking.ts`; confirmation step shows a success state and next actions.
- [ ] Dashboard reads real booking data and exposes edit/cancel actions via the same API layer used for booking.

### Shared Platform Requirements

- [ ] Bundle size stays under 200KB gzipped for initial load (`docs/project-overview.md:33-37`).
- [ ] All critical flows (marketing scroll, contact submit, booking path) pass axe-core checks and manual keyboard testing.
- [ ] Lighthouse performance score ≥ 90 on mobile; accessibility score ≥ 95.
- [ ] Error logging and basic analytics instrumentation are configured prior to launch.

## Personas & Stakeholders

- **Primary Persona**: Prospective patients researching gynecology/aesthetics services (`docs/project-overview.md:20-21`).
- **Secondary Persona**: Existing patients seeking insurance details or follow-up appointments (`docs/project-overview.md:21-22`).
- **Tertiary Persona**: Referral partners or healthcare professionals assessing the practice (`docs/project-overview.md:22-23`).
- **Business Stakeholder**: Dr. Noreen Mastafavi (practice owner).
- **Product/Project Owner**: ChatGPT Codex agent acting on behalf of the client unless reassigned.
- **Technical Stakeholders**: Frontend engineering (Codex), future backend/API team (TBD).

## Success Metrics

- **Performance**: Largest Contentful Paint < 2.5 s, First Input Delay < 100 ms, Cumulative Layout Shift < 0.1 (`docs/project-overview.md:35-36`).
- **Bundle Budget**: Initial bundle < 200 KB gzipped (`docs/project-overview.md:36`).
- **Accessibility**: WCAG 2.1 AA compliance across surfaces (`docs/project-overview.md:14-15`).
- **SEO**: Improved rankings for target local medical terms through metadata and structured data (`docs/project-overview.md:15-16`).
- **Engagement**: Lowered bounce rate and increased time on page for marketing flows (`docs/project-overview.md:38-39`).

## Open Questions & Assumptions

| Topic                | Details                                                                                                                  | Owner                       | Due        |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------ | --------------------------- | ---------- |
| Centralized content  | Confirm if marketing copy should be moved into shared data modules or CMS, replacing inline strings (`agents.md:50-51`). | Codex                       | 2025-02-03 |
| Authentication scope | Decide whether to enable full auth (with backend integration) or keep guest-only portal (`agents.md:51-52`).             | Codex → Client for approval | 2025-02-03 |
| Validation strategy  | Align on adopting `utils/validation.ts` across portal steps (`agents.md:52-53`).                                         | Codex                       | 2025-01-31 |
| SEO metadata         | Determine required metadata/JSON-LD coverage beyond homepage (`agents.md:53-54`).                                        | Codex                       | 2025-02-05 |
| API integration      | Identify real appointment API provider or define expanded mock contract for dashboard actions (`agents.md:54-55`).       | Codex ↔ Backend TBD        | 2025-02-07 |

> Update owners/dates as soon as responsibilities or timelines are confirmed.

## Reference Notes for Future Development

- Maintain alignment with UX guidelines in `docs/user-experience.md` for mobile-first patterns and accessibility cues.
- Follow `docs/development-guidelines.md` for TypeScript strictness, linting, testing, and Git workflow expectations.
- Use `todo.md` for day-to-day execution items; mirror updates back into this tracker when scope or success criteria evolve.
- Marketing copy is now centralized in `src/data/marketing.ts`; extend this module (or additional files under `src/data/`) as new content surfaces are defined.

## Kickoff Checklist

- [ ] Validate local environment prerequisites (Node 18+, pnpm 8+, Tailwind CLI) per `setup.md`.
- [ ] Install dependencies (`pnpm install`) and run smoke tests (`pnpm dev`, `pnpm lint`, `pnpm type-check`).
- [ ] Adopt branch naming/PR practices from `docs/development-guidelines.md`.
- [ ] Define sprint length or release cadence; document in project README or tracker.
- [ ] Set up shared dashboards for Lighthouse CI, axe-core scans, and bundle analysis prior to feature implementation.
- [ ] Schedule recurring syncs/check-ins with business stakeholder for demos and approvals.
