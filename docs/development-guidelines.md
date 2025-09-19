# 💻 Development Guidelines

## Code Standards

### TypeScript Configuration

- **Strict Mode:** Enable all strict TypeScript checks
- **No Implicit Any:** Explicit typing for all variables
- **Interface over Type:** Prefer interfaces for object shapes
- **Generic Constraints:** Use generic constraints for type safety

### React Best Practices

- **Functional Components:** Use function components with hooks
- **Custom Hooks:** Extract reusable logic into custom hooks
- **Props Interface:** Define clear prop interfaces for all components
- **Error Boundaries:** Implement error boundaries for graceful error handling

### Component Structure

```typescript
// Component file structure
interface ComponentProps {
  // Props definition
}

export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks
  // Event handlers
  // Render
  return <div>{/* JSX */}</div>;
};
```

## Styling Guidelines

### Tailwind CSS Usage

- **Utility-First:** Use Tailwind utilities over custom CSS
- **Component Variants:** Use CVA for component variants
- **Responsive Design:** Mobile-first breakpoint approach
- **Dark Mode:** Use Tailwind's dark mode utilities

### CSS Organization

```css
/* Global styles in styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom components */
@layer components {
  .btn-primary {
    @apply bg-primary text-white px-4 py-2 rounded-lg;
  }
}
```

## File Naming Conventions

### Components

- **PascalCase:** `UserProfile.tsx`, `ServiceCard.tsx`
- **Index Files:** `index.ts` for component exports
- **Types:** `types.ts` for component-specific types

### Utilities

- **camelCase:** `formatDate.ts`, `validateEmail.ts`
- **Constants:** `UPPER_SNAKE_CASE` for constants

### Assets

- **kebab-case:** `hero-image.jpg`, `doctor-portrait.png`
- **Descriptive Names:** Clear, descriptive file names

## Git Workflow

### Branch Naming

- **Feature:** `feature/component-name`
- **Bugfix:** `bugfix/issue-description`
- **Hotfix:** `hotfix/critical-fix`
- **Chore:** `chore/task-description`

### Commit Messages

```
type(scope): description

feat(navbar): add mobile menu toggle
fix(forms): resolve validation error
docs(readme): update installation instructions
style(buttons): improve hover states
refactor(api): simplify data fetching
test(components): add unit tests for forms
```

### Pull Request Process

1. **Small PRs:** Keep changes focused and reviewable
2. **Descriptive Titles:** Clear, concise PR titles
3. **Testing:** Include tests for new features
4. **Documentation:** Update docs for API changes
5. **Review:** Request reviews from team members

## Testing Strategy

### Unit Tests

- **Jest + React Testing Library:** Component testing
- **Coverage Target:** 80% code coverage
- **Test Files:** `*.test.tsx` alongside components

### Integration Tests

- **User Flows:** Test complete user journeys
- **API Integration:** Test data fetching and mutations
- **Form Submissions:** Test form validation and submission

### E2E Tests

- **Critical Paths:** Appointment booking, contact forms
- **Cross-Browser:** Test on major browsers
- **Mobile Testing:** Test on various device sizes

## Performance Guidelines

### Bundle Optimization

- **Code Splitting:** Lazy load routes and heavy components
- **Tree Shaking:** Remove unused code
- **Image Optimization:** Use WebP format, responsive images
- **Bundle Analysis:** Regular bundle size monitoring

### Runtime Performance

- **Memoization:** Use React.memo for expensive components
- **Virtualization:** For large lists and data sets
- **Debouncing:** For search and input handlers
- **Lazy Loading:** Load images and components on demand

## Accessibility Standards

### WCAG 2.1 AA Compliance

- **Color Contrast:** 4.5:1 ratio for normal text
- **Keyboard Navigation:** All interactive elements accessible
- **Screen Readers:** Proper ARIA labels and semantic HTML
- **Focus Management:** Clear focus indicators

### Testing Accessibility

- **Automated Testing:** axe-core for automated checks
- **Manual Testing:** Keyboard navigation, screen reader testing
- **User Testing:** Test with actual users with disabilities

## Security Guidelines

### Input Validation

- **Client-Side:** Validate all form inputs
- **Server-Side:** Validate on backend (when implemented)
- **Sanitization:** Sanitize user inputs before display

### Data Protection

- **Sensitive Data:** Never log sensitive information
- **HTTPS:** Ensure all communications are encrypted
- **CORS:** Proper CORS configuration for API calls

## Documentation Standards

### Code Comments

- **Complex Logic:** Explain complex algorithms
- **Business Rules:** Document business logic decisions
- **API Integration:** Document external API usage
- **TODO Comments:** Track technical debt and improvements

### README Files

- **Setup Instructions:** Clear installation and setup steps
- **Usage Examples:** Code examples for components
- **API Documentation:** Document component props and methods
- **Contributing Guidelines:** How to contribute to the project
