# Aspen Malibu Design System — Porting Kit

Everything you need to replicate the landing page's visual language in the logged-in app (or any new project).

---

## What's Included

| File | Purpose |
|------|---------|
| `design-tokens.css` | All CSS custom properties (colors, shadows, easing) |
| `base.css` | Global reset, layout utilities, grain overlay, scroll reveals, keyframe animations |
| `components.css` | Reusable component classes: nav, buttons, cards, forms, modals, badges, footer |
| `tailwind.config.js` | Full Tailwind theme extension mapping all tokens |
| `useReveal.js` | Scroll reveal React hook |
| `template.html` | HTML boilerplate with font loading and CSS imports |
| `design.md` | Full design system documentation (in parent directory) |

---

## Quick Start (3 Steps)

### Step 1: Copy Files
Copy the entire `design-system/` folder into your new project's root.

```bash
# Example:
cp -r design-system/ ../my-app/public/design-system/
```

### Step 2: Load Fonts
Add this to your app's `index.html` or root template:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

### Step 3: Import CSS
In your app's global CSS or entry file:

```css
@import url('/design-system/design-tokens.css');
@import url('/design-system/base.css');
@import url('/design-system/components.css');
```

Or in HTML:
```html
<link rel="stylesheet" href="/design-system/design-tokens.css" />
<link rel="stylesheet" href="/design-system/base.css" />
<link rel="stylesheet" href="/design-system/components.css" />
```

---

## Using with Tailwind

If your app uses Tailwind CSS:

1. Copy `tailwind.config.js` into your project root (or merge its `theme.extend` into your existing config).
2. Ensure `content` paths match your project structure.
3. All tokens are now available as Tailwind classes:

```html
<!-- Colors -->
<div class="bg-ink text-paper">
<div class="bg-gold text-ink">
<div class="text-teal">

<!-- Fonts -->
<h1 class="font-serif text-display">Headline</h1>
<span class="font-mono text-mono">LABEL</span>

<!-- Shadows -->
<div class="shadow-lg">

<!-- Animation -->
<div class="animate-fade-up">
```

---

## Component Usage Examples

### Navigation (Glass Pill)
```html
<nav class="nav scrolled">
  <a href="#" class="nav-logo">
    <img src="logo.png" alt="Logo" />
    <span class="nav-logo-text">Aspen<em>Malibu</em></span>
  </a>
  <div class="nav-links">
    <a href="#" class="nav-link">Dashboard</a>
    <a href="#" class="nav-link">Settings</a>
  </div>
  <button class="nav-cta">Book a call</button>
</nav>
```

### Buttons
```html
<button class="btn-primary">
  Get Started
  <span class="arrow">→</span>
</button>

<button class="btn-outline">Learn more</button>
```

### Section Header
```html
<div class="sec-head center reveal" ref={revealRef}>
  <span class="sec-tag">Features</span>
  <h2 class="sec-title">Built for <em>scale</em></h2>
  <p class="sec-sub">Description text goes here.</p>
</div>
```

### Cards
```html
<!-- Standard -->
<div class="card">Content</div>

<!-- Dark -->
<div class="card card-dark">Dark content</div>

<!-- With top accent line -->
<div class="card card-accent-hover">Hover me</div>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Email</label>
  <input class="form-input" type="email" placeholder="you@example.com" />
</div>
```

### Modal
```html
<div class="modal-backdrop">
  <div class="modal-card">
    <button class="modal-close">✕</button>
    <div class="modal-body">...</div>
  </div>
</div>
```

### Scroll Reveal (React)
```jsx
import { useReveal } from './design-system/useReveal'

function MySection() {
  const ref = useReveal()
  return (
    <section ref={ref} className="reveal">
      <h2 className="sec-title">Title</h2>
    </section>
  )
}
```

For staggered children:
```jsx
const ref = useReveal()
return (
  <div ref={ref} className="reveal-stagger">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
  </div>
)
```

---

## Dark Mode

The landing page uses dark sections already — no separate dark mode needed. Use these classes/patterns for dark UI in the app:

```css
/* Dark card/surface */
background: var(--ink);
color: var(--paper);
border: 1px solid rgba(250, 250, 248, 0.1);

/* Muted text on dark */
color: rgba(250, 250, 248, 0.72);  /* primary muted */
color: rgba(250, 250, 248, 0.65);  /* secondary muted */
color: rgba(250, 250, 248, 0.45);  /* tertiary muted */
color: rgba(250, 250, 248, 0.35);  /* labels */

/* Borders on dark */
border-color: rgba(250, 250, 248, 0.1);
border-color: rgba(250, 250, 248, 0.08);
```

---

## Typography Scale Quick Reference

| Role | Class | Size | Font |
|------|-------|------|------|
| Hero | `.text-display-lg` | `clamp(60px, 10.5vw, 188px)` | Serif |
| Section | `.sec-title` or `.text-display` | `clamp(40px, 5.8vw, 88px)` | Serif |
| CTA | `.text-display-xl` | `clamp(70px, 12vw, 210px)` | Serif |
| Card title | — | `22–38px` | Serif |
| Body | — | `16px` | Sans |
| Small | — | `13–14.5px` | Sans |
| Label | `.text-mono` | `11px` | Mono |

---

## Spacing & Radius Quick Reference

| Token | Value |
|-------|-------|
| Section padding (desktop) | `120px 0` |
| Section padding (mobile) | `80px 0` |
| Container max-width | `1280px` |
| Container padding | `0 32px` (mobile: `0 20px`) |
| Card padding | `28–36px` |
| Card radius | `20–24px` |
| Button radius | `100px` (pill) |
| Input radius | `10px` |
| Grid gap | `14–16px` |

---

## Shadows Quick Reference

| Name | CSS |
|------|-----|
| `shadow-sm` | `0 2px 8px rgba(10,14,26,0.06)` |
| `shadow-md` | `0 8px 32px rgba(10,14,26,0.10)` |
| `shadow-lg` | `0 24px 64px rgba(10,14,26,0.14)` |
| `shadow-xl` | `0 40px 100px rgba(10,14,26,0.18)` |

---

## Key Design Principles

1. **Pill shapes everywhere** — buttons, nav, badges all use `border-radius: 100px`.
2. **Subtle grain** — `.grain` div adds film-grain texture at 3.5% opacity.
3. **Glass morphism** — nav uses `backdrop-filter: blur(24px)` with partial opacity.
4. **Hover lift** — cards and buttons translate up 2–4px on hover with larger shadows.
5. **Accent lines** — teal/gold top-border reveals on card hover.
6. **Serif for emotion** — `Instrument Serif` on all headlines, italic for emphasis words in gold.
7. **Mono for structure** — `Geist Mono` on labels, tags, metrics, always uppercase with tracking.
8. **Scroll reveals** — sections fade up into view using `useReveal` + `.reveal` classes.

---

## File Checklist for Porting

- [ ] `design-system/design-tokens.css`
- [ ] `design-system/base.css`
- [ ] `design-system/components.css`
- [ ] `design-system/useReveal.js`
- [ ] `design-system/tailwind.config.js` (if using Tailwind)
- [ ] `design-system/template.html` (reference)
- [ ] Google Fonts link in HTML
- [ ] `.grain` div in app body (optional)
- [ ] Logo asset (`assets/am-logo.png`)

---

## Questions?

See `design.md` in the parent directory for the full documentation including section-by-section breakdowns, animation keyframes, and responsive behavior.
