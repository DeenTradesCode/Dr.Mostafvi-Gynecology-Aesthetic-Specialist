# 🎨 Design System

## Color Palette

### Light Mode

- **Background:** `#F5F5F7` (off-white)
- **Primary Text:** `#111111`
- **Secondary Text:** `#666666`
- **Headings:** `#334E68` (deep navy)

**Accents:**

- `#D9B4C3` (blush rose)
- `#E6D6E1` (lavender mist)
- `#C19A6B` (warm bronze)

### Dark Mode

- **Background:** `#0B0C0E` (charcoal black)
- **Primary Text:** `#F2F2F2`
- **Secondary Text:** `#CCCCCC`
- **Headings:** `#D9B4C3` (blush rose)

**Accents:**

- `#C19A6B` (bronze)
- `#9E6B4B` (earthy bronze)

### Placeholder Images

- **Color:** `#A3CFA4` (muted green)
- **Reason:** soothing, non-distracting, complements blush/lavender palette
- **Usage:** all prototype images (doctor portraits, clinic photos, map previews)

## Typography

### Font Families

- **Headings:** Playfair Display (serif, elegant)
- **Body Text:** Nunito or Lato (sans-serif, approachable)
- **UI Elements:** Bold sans-serif, uppercase for buttons/CTAs

### Font Loading

```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Nunito:wght@300;400;600;700&display=swap");
```

### Typography Scale

- **H1:** 2.5rem (40px) - Playfair Display, 700 weight
- **H2:** 2rem (32px) - Playfair Display, 600 weight
- **H3:** 1.5rem (24px) - Playfair Display, 600 weight
- **H4:** 1.25rem (20px) - Playfair Display, 600 weight
- **Body:** 1rem (16px) - Nunito, 400 weight
- **Small:** 0.875rem (14px) - Nunito, 400 weight
- **Button:** 0.875rem (14px) - Nunito, 700 weight, uppercase

## Spacing System

- **xs:** 0.25rem (4px)
- **sm:** 0.5rem (8px)
- **md:** 1rem (16px)
- **lg:** 1.5rem (24px)
- **xl:** 2rem (32px)
- **2xl:** 3rem (48px)
- **3xl:** 4rem (64px)

## Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## Component States

### Interactive Elements

- **Default:** Base color with subtle border
- **Hover:** Slightly darker shade, smooth transition
- **Active:** Pressed state with reduced opacity
- **Focus:** Accessible focus ring with accent color
- **Disabled:** Muted colors, reduced opacity

### Transitions

- **Duration:** 200ms for micro-interactions, 300ms for page transitions
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, natural motion
- **Properties:** Transform, opacity, and color changes only
