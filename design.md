# Aspen Malibu Marketing — Design System

> **Purpose:** This document captures every design token, component pattern, and style rule from the landing page so the same visual language can be replicated 1:1 in the logged-in web app.

---

## 1. Design Tokens

### 1.1 Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--ink` | `#0A0E1A` | Primary text, dark backgrounds, primary buttons |
| `--ink-2` | `#1C2236` | Secondary dark, card hovers on dark bg |
| `--ink-3` | `#2E3A56` | Tertiary text, muted dark |
| `--paper` | `#FAFAF8` | Primary background, light surfaces |
| `--paper-2` | `#F4F2ED` | Secondary background, cards, subtle sections |
| `--paper-3` | `#EAE7DF` | Tertiary paper, rarely used |
| `--bone` | `#DDD9CF` | Borders, placeholders, disabled text |
| `--gold` | `#B8912A` | Primary accent — CTAs, highlights, emphasis italic text |
| `--gold-lt` | `#D4AF5A` | Light gold — featured cards, hover states |
| `--gold-bg` | `rgba(184, 145, 42, 0.08)` | Subtle gold backgrounds, badges |
| `--teal` | `#1E7A86` | Secondary accent — tech labels, active states, alt CTA |
| `--teal-lt` | `#4AA8B5` | Light teal — decorative text on dark |
| `--teal-bg` | `rgba(30, 122, 134, 0.07)` | Subtle teal backgrounds |
| `--cream` | `#FBF8F2` | Hero background, warm sections |
| `--green` | `#1C7C4A` | Success indicators, upward trends |
| `--line` | `rgba(10, 14, 26, 0.08)` | Subtle borders |
| `--line-2` | `rgba(10, 14, 26, 0.14)` | Stronger borders, dividers |

**Dark mode sections:** Use `--ink` as background with `--paper` text. Muted text becomes `rgba(250,250,248,0.72)` / `0.65` / `0.45`.

### 1.2 Typography

| Role | Font | Weights | Notes |
|------|------|---------|-------|
| Display / Headlines | `Instrument Serif` | 400 (regular + italic) | Large titles, elegant feel. Italic used with gold color for emphasis. |
| Body / UI | `Geist` | 300, 400, 500, 600 | Primary sans. Use 500 for buttons/labels. |
| Mono / Labels | `Geist Mono` | 400, 500 | Tags, eyebrows, metrics, uppercase labels. Always uppercase + letter-spacing. |

**Font loading (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

**Type scale:**

| Element | Size | Line-height | Letter-spacing | Weight |
|---------|------|-------------|----------------|--------|
| Hero title | `clamp(60px, 10.5vw, 188px)` | 0.93 | -0.045em | 400 (serif) |
| Section title (`.sec-title`) | `clamp(40px, 5.8vw, 88px)` | 1.0 | -0.035em | 400 (serif) |
| CTA title | `clamp(70px, 12vw, 210px)` | 0.9 | -0.05em | 400 (serif) |
| H3 / Card titles | `22–38px` | 1.0–1.08 | -0.02em | 400 (serif) |
| Body | `16px` | 1.55 | -0.005em | 400 |
| Small body | `13–14.5px` | 1.55–1.6 | — | 400 |
| Mono label | `9–11.5px` | — | 0.06–0.1em | 400/500 |
| Nav links | `13.5px` | — | -0.005em | 400/500 |

### 1.3 Spacing

| Token | Value |
|-------|-------|
| Section padding (desktop) | `120px 0` |
| Section padding (mobile) | `80px 0` |
| Container max-width | `1280px` |
| Container padding | `0 32px` (mobile: `0 20px`) |
| Grid gap (cards) | `14–16px` |
| Card border-radius | `20–24px` |
| Button border-radius | `100px` (full pill) |
| Small border-radius | `10–14px` |

### 1.4 Shadows

```css
--shadow-sm: 0 2px 8px rgba(10,14,26,0.06), 0 0 1px rgba(10,14,26,0.08);
--shadow-md: 0 8px 32px rgba(10,14,26,0.10), 0 0 1px rgba(10,14,26,0.08);
--shadow-lg: 0 24px 64px rgba(10,14,26,0.14), 0 0 1px rgba(10,14,26,0.06);
--shadow-xl: 0 40px 100px rgba(10,14,26,0.18), 0 0 1px rgba(10,14,26,0.06);
```

### 1.5 Easing

Primary easing: `cubic-bezier(.22, 1, .36, 1)` — used for hover, scroll reveals, card transitions.

---

## 2. Global Styles

### 2.1 CSS Reset
```css
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; background: var(--paper); }
body {
  font-family: 'Geist', -apple-system, sans-serif;
  background: var(--paper);
  color: var(--ink);
  font-size: 16px;
  line-height: 1.55;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "ss01", "cv11";
}
a { color: inherit; text-decoration: none; }
button { font: inherit; cursor: pointer; border: none; background: none; color: inherit; }
img { max-width: 100%; display: block; }
::selection { background: var(--gold); color: #fff; }
p { text-wrap: pretty; }
```

### 2.2 Accessibility
```css
:focus-visible { outline: 2px solid var(--teal); outline-offset: 2px; }
```

All interactive elements should have `border-radius: 8px` on focus-visible.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### 2.3 Grain Texture Overlay
```css
.grain {
  position: fixed;
  inset: 0;
  z-index: 500;
  pointer-events: none;
  opacity: 0.035;
  mix-blend-mode: multiply;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4t5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwma1wtswR7GZYD5aUnFz2+CTFpE6g14cFwLHFSIVjJGJOXZGBNQPf0I71+sIeQl8rGADDHJVopWZFXsUtl4iWHFd5jlcGGlG7Cr3KiMT+IXExz5MRl0VBp/BTl3m5J9xI6VAgadkCKE2EssmGdaEDa0EIULJj+KD/E6b7V0pkamjXBjaBCdxNs4YaBHMXbA0n8RFNuYEaHmTmPmFGnqBTzUg5ELkqSXimSvvRKoY2YEdtcOMC6P5UNI2IOrMBIX5PnCwfm4J6xj4r3T8jk69pEAR7XdH8MfwmcIx4A5iLOZbRuqeRq1rlN3lFpJiEGi06+NRi+WF4+3VdwpRHBGRIHMpnEP5aTASgDiPdXXhZ65I5VCEDlJzAVkK6RjHKBl5P9N3O0KUf16MQ0X62LLiWEBqXLLxNuqivlMmPSIKh89TDMA6/heFYflh+xBOBdifGDyW+YMTFoXh9OmwSHHsQs6X/UGRE5tP5iivVLZ4n24OmUl4XLKW3+0YmJKN1+mXW8QbGhfXt+0MWtGLw17QTzWNI/TQ5z4j5AJ6uEXMbJWiXGKoMiE8dBp0a5UcHGW3SFjw0qdPSWOBRkXGfxjBl0C1Xbc5o83yX7wJRxCHOuP7IjlBJPQIRKHMl5rP85vSQFoqzCZ+J2b0RVtGDMiW0lsBt4W7qLkYTJ2SFCNVGVsTf8xjIbQv+c9mC0O9j7WUOQLD4g3RbCKjEqoFZjRi7VJ1WYFVfxJGCKilRbTz1z4jSXJ1F0O1pRbAKPPkLY1IiJ45Eo3qNqCbTZUaMnCNjwxicNaefYyFE+6TnnM1eIWLiHrRrpEicN0WKEJe1Pz7V5sJ9o0ETnzXVLPZ2Dh0PNNNF5nF/QLMmMkBjlRTSJGFgAVyCHIhfkbyJtUVxnhVByBuM0qV3CJIEnZqJNaI4nxgC9F5GRl0ETQYE0qGpLCqDFoRbMl6V8xlVFxAK60bPFH0Vb8NWiuCyDCVfOGLkMfZ7SZFvnGIJFPr6eHlBb57a7TnJZ8pT1N6NB2IaFl7e5QJ7lp4UIAkBWBZN8PO6JfNUCIpOZ4ABZzn4PN+DJDScQY6B+FJbEyCklDKMVZGJSFJx0TA1oFXNO/LElgxWH/INYlJSFLsGDFTcvLFqAC1nOJwJdPTU2TRNcfQpxJEY3VqLCMZ+SkFDJh4cTbj9Hd5glb+yO/KCN9T71XNlB2nV2TNlVRjYmWIIQZwJXVUhLVkAzxfxXbgSicpkVXGr7l3dkj3T0CZ7m5bRSCXNbYpKGFi8hkqKJi6P5B4DG4ERaBLkRSiNcRCj7m8xvx");
}
```

---

## 3. Layout System

### 3.1 Container
```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
}
@media (max-width: 768px) { .container { padding: 0 20px; } }
```

### 3.2 Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| Mobile | `768px` | Section padding reduction, container padding, nav collapse |
| Tablet | `880px` | FAQ, manifesto, case study grid collapse |
| Small desktop | `960px` | AI cards, testimonials grid collapse |
| Desktop | `1060px` | Tier grid, process rail collapse |
| Wide | `1100px` | Estimate shell collapse |
| Bento | `1080px` / `640px` | Bento grid reflow |

### 3.3 Section Pattern
```css
section { position: relative; padding: 120px 0; }
@media (max-width: 768px) { section { padding: 80px 0; } }
```

---

## 4. Components

### 4.1 Navigation (Floating Glass Pill)
```css
.nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 900;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 7px 7px 7px 18px;
  background: rgba(250, 250, 248, 0.82);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--line-2);
  border-radius: 100px;
  box-shadow: var(--shadow-md);
}
.nav.scrolled { box-shadow: var(--shadow-lg); }
```

**Structure:** Logo (img + serif text) → Divider → Links (pill hover) → Login button (outline) → CTA (dark fill).

- Logo text: `Instrument Serif`, 17px, `-0.015em`. Italic part in gold.
- Links: `13.5px`, pill shape, hover bg `var(--paper-2)`.
- Login: `12.5px`, border `1.5px solid var(--line-2)`, hover border gold.
- CTA: `13.5px`, bg `var(--ink)`, hover bg `var(--gold)`.

### 4.2 Buttons

**Primary Button (`.btn-primary`):**
```css
display: inline-flex; align-items: center; gap: 10px;
padding: 15px 8px 15px 24px;
background: var(--ink); color: var(--paper);
border-radius: 100px;
font-size: 15px; font-weight: 500; letter-spacing: -0.005em;
box-shadow: var(--shadow-md);
```
- Hover: bg `var(--gold)`, translateY(-2px), shadow-lg.
- Arrow icon inside rotates -45deg on hover.

**Outline Button (`.btn-outline`):**
```css
display: inline-flex; align-items: center; gap: 8px;
padding: 15px 22px;
background: transparent; color: var(--ink);
border: 1.5px solid var(--line-2); border-radius: 100px;
```
- Hover: bg `var(--paper-2)`, border-color `var(--bone)`.

### 4.3 Section Header (`.sec-head`)
```css
display: flex; flex-direction: column; gap: 14px;
max-width: 720px; margin-bottom: 72px;
```
- `.center` variant: `margin: 0 auto 72px; text-align: center; align-items: center;`
- `.sec-tag`: mono, 11px, uppercase, `letter-spacing: 0.09em`, color `var(--teal)`. Preceded by 24px horizontal line.
- `.sec-title`: serif display, clamp(40px, 5.8vw, 88px), line-height 1.0, `-0.035em`. Italic words in gold.
- `.sec-sub`: 17.5px, line-height 1.55, color `var(--ink-3)`, max-width 580px.

### 4.4 Cards

**Standard card pattern:**
```css
background: var(--paper-2);
border: 1px solid var(--line);
border-radius: 20–24px;
padding: 28–36px;
transition: all .4s cubic-bezier(.22,1,.36,1);
```
- Hover: `box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: var(--line-2);`

**Dark card (`.bc-dark`, `.tier-card.featured`):**
```css
background: var(--ink);
color: var(--paper);
border-color: var(--ink);
```

**Gold card (`.bc-gold`):**
```css
background: var(--gold);
color: var(--ink);
```

**Teal card (`.bc-teal`):**
```css
background: var(--teal);
color: var(--paper);
```

**Top accent line hover effect:**
```css
&::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: var(--teal);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .45s cubic-bezier(.22,1,.36,1);
}
&:hover::after { transform: scaleX(1); }
```

### 4.5 Modal
```css
.modal-backdrop {
  position: fixed; inset: 0; z-index: 9000;
  background: rgba(10, 14, 26, 0.55);
  backdrop-filter: blur(12px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}
.modal-card {
  background: var(--paper);
  border: 1px solid var(--line-2);
  border-radius: 28px;
  width: 100%; max-width: 580px; max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 40px 100px rgba(10,14,26,0.35);
}
```

### 4.6 Forms

**Input / Textarea:**
```css
padding: 12px 14px;
background: var(--paper-2);
border: 1.5px solid var(--line-2);
border-radius: 10px;
font-family: 'Geist', sans-serif;
font-size: 14.5px;
color: var(--ink);
```
- Focus: `border-color: var(--teal); background: var(--paper);`
- Placeholder: `color: var(--bone);`

**Label:**
```css
font-family: 'Geist Mono', monospace;
font-size: 10.5px;
text-transform: uppercase;
letter-spacing: 0.08em;
color: var(--ink-3);
```

---

## 5. Animation System

### 5.1 Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1);
}
.reveal.in { opacity: 1; transform: translateY(0); }
```

Staggered children (`.reveal-stagger > *`): delays `0s, .07s, .14s, .21s, .28s, .35s`.

**Hook implementation:**
```js
// useReveal.js
import { useEffect, useRef } from 'react'
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
```

### 5.2 Key Animations

| Name | Description |
|------|-------------|
| `fadeUp` | `translateY(24px)` → `0`, opacity 0 → 1 |
| `heroWord` | `translateY(105%)` → `0` for title words |
| `ticker` | `translateX(0)` → `translateX(-50%)` infinite scroll |
| `spin` | `rotate(360deg)` |
| `float` | `translateY(0)` ↔ `translateY(-10px)` gentle float |
| `waveBar` | `scaleY(0.35)` ↔ `scaleY(1)` for waveform |
| `pulseRing` | scale 1 → 2.4, opacity 0.7 → 0 |
| `orb` | scale + rotate subtle breathing |
| `engineFloat` / `engineGlow` | floating + pulsing glow for AI orb |
| `nodeOrbit` | circular orbit motion |
| `beamOrbit` | rotating beams |
| `energyDash` | dashed stroke offset animation |
| `starPop` | star rating pop-in with rotation |
| `cardSlide` | card slide up fade |
| `flowRing` / `flowGlow` | animated rings with glow |

---

## 6. Section-by-Section Styles

### 6.1 Hero
- Background: `var(--cream)` with canvas-animated soft blobs (gold/teal hues at 0.18 opacity).
- Decorative: CSS radial gradient orbs + 72px grid overlay with radial mask.
- Title: `clamp(60px, 10.5vw, 188px)`, serif, `-0.045em`, line-height 0.93.
- Eyebrow: pill badge with live green dot (`#4ade80`) + pulse animation.
- Desc: 18.5px, max-width 600px, centered.
- Actions: flex centered, gap 12px.
- Floating cards: absolute positioned, rotated, floating animation.

### 6.2 Logo Strip
- Background: `var(--paper)`, border-bottom `var(--line)`.
- Marquee: infinite scroll, mask gradient edges.
- Items: `Instrument Serif`, 24px, color `var(--bone)`, hover `var(--ink-2)`.

### 6.3 Manifesto
- Background: `var(--ink)`, text `var(--paper)`.
- Grid: `1fr 1.8fr` on desktop.
- Pillar grid: 3 columns, gold mono labels, muted text.

### 6.4 AI Engine
- Background: `var(--paper)`.
- Central orb: perspective tilt on mousemove, rotating rings, orbiting nodes, beams.
- Feature cards: 4-column grid, `var(--paper-2)` bg, gold top-border reveal on hover.

### 6.5 Capabilities (Bento)
- Background: `var(--paper-2)`.
- Grid: `repeat(12, 1fr)`, gap 14px, auto-rows 280px.
- Cards: `.bc`, span classes `.bc-6` through `.bc-2`.
- Variants: `.bc-dark`, `.bc-gold`, `.bc-teal`.
- Micro-visuals inside cards: pipeline, waveform, chat bubbles, chart, calendar, SEO bar, stars, dashboard metrics, ad stats, flow diagram.

### 6.6 Services
- Background: `var(--paper-2)`.
- 5-column grid → 3 → 2 → 1.
- Cards: `var(--paper)` bg, gold trace clip-path hover effect.

### 6.7 Tiers / Pricing
- Background: `var(--paper)`.
- 3-column grid → stacked on mobile.
- Featured tier: dark bg, gold flag badge.
- Number label: mono teal (gold on featured).
- Name: serif 38px.
- Best-for box: gold left border.
- Features: flex column, check icons in teal/gold.
- CTA: pill button, full width, space-between with arrow.

### 6.8 Estimate
- Background: `var(--paper-2)`.
- Shell: `1fr 380px` grid → stacked.
- Panel: `var(--paper)`, border, radius 24px, padding 36px.
- Segments: selectable cards, `.on` state = `var(--ink)` bg.
- Summary: sticky, dark card (`var(--ink)`), gold CTA.

### 6.9 Process
- Background: `var(--paper)`.
- 5-column grid → 2 → 1.
- Step cards: `var(--paper-2)`, teal top-border reveal on hover.

### 6.10 Testimonials
- Background: `var(--paper)`.
- 3-column grid → 1.
- Cards: metric in gold serif, quote in italic serif, avatar gradient.

### 6.11 Metrics
- Background: `var(--ink)`.
- 4-column stat grid → 2 on mobile.
- Large numbers: `Instrument Serif`, 76px.
- Case study card: dark glass with radial gold glow.

### 6.12 Campaigns
- Background: `var(--ink)`.
- 2-column grid → 1.
- Industry label: mono gold.
- Stats: 3-column grid per card.

### 6.13 FAQ
- Background: `var(--cream)`.
- Grid: `0.65fr 1.35fr` → stacked.
- Questions: serif 24px. Icon rotates 45deg when open.
- Answer: max-height transition.

### 6.14 CTA
- Background: `var(--paper-2)`.
- Title: `clamp(70px, 12vw, 210px)`.
- Radial gradient orbs in background.

### 6.15 Footer
- Background: `var(--ink)`, text `var(--paper)`.
- 4-column grid → 2 on mobile.
- Large watermark: serif, `clamp(100px, 24vw, 360px)`, `rgba(250,250,248,0.07)`.

---

## 7. Asset Checklist

| Asset | Path | Notes |
|-------|------|-------|
| Logo | `assets/am-logo.png` | 26px nav, 42px footer (inverted) |
| Grain texture | Inline base64 PNG | Fixed overlay, opacity 0.035 |
| Fonts | Google Fonts CDN | Instrument Serif, Geist, Geist Mono |

---

## 8. Porting Guide (To Logged-In App)

### Step 1: Copy CSS Variables
Move the entire `:root` block into the app's global CSS.

### Step 2: Load Fonts
Add the Google Fonts link to the app's HTML/template.

### Step 3: Copy Global Reset & Utilities
- Box-sizing reset
- Body styles (font, background, color, smoothing)
- `.container` rule
- `.grain` overlay
- `.reveal` / `.reveal-stagger` classes
- `useReveal` hook

### Step 4: Component Mapping
Map these landing-page patterns to app components:

| Landing Page Pattern | App Equivalent |
|----------------------|----------------|
| `.nav` (glass pill) | App top bar / sidebar header |
| `.btn-primary` | Primary action buttons |
| `.btn-outline` | Secondary actions |
| `.sec-head` + `.sec-tag` | Page headers, section titles |
| Cards (`.ai-card`, `.service-card`, `.tier-card`) | Dashboard cards, feature panels |
| `.modal-card` | Dialogs, drawers |
| Form inputs | Settings forms, input fields |
| Dark sections (`--ink` bg) | Dark mode / premium dashboards |

### Step 5: Adapt for App UI
- Keep the **color tokens identical** — this ensures brand consistency.
- Use the **same border-radius system** (100px for buttons, 20–24px for cards, 10–14px for inputs).
- Use the **same shadow system** for elevation.
- Apply the **same typography scale** — serif for headlines, Geist for UI, Geist Mono for data/labels.
- Bring over **animations** — hover lifts, scroll reveals, and the `cubic-bezier(.22,1,.36,1)` easing.
- In the app, the **nav can become a sidebar or top app bar** — keep the glass/blur treatment for a premium feel.

### Step 6: Dark Mode (if applicable)
The landing page already has dark sections. Use this as the dark mode palette:
- Background: `var(--ink)`
- Text: `var(--paper)`
- Muted text: `rgba(250,250,248,0.72)` / `0.65` / `0.45`
- Borders: `rgba(250,250,248,0.1)` / `0.08`
- Cards: `rgba(250,250,248,0.04)` bg + `rgba(250,250,248,0.1)` border

---

## 9. Quick Reference: Most-Used Classes

```css
/* Layout */
.container          /* max-width 1280px, centered, padded */
section             /* 120px/80px vertical padding */

/* Typography */
.serif               /* Instrument Serif */
.sec-head / .sec-head.center
.sec-tag            /* mono uppercase teal label with line */
.sec-title          /* large serif display */
.sec-sub            /* 17.5px muted body */

/* Buttons */
.btn-primary        /* dark pill with arrow */
.btn-outline        /* transparent pill */

/* Cards */
.ai-card, .service-card, .tier-card, .process-step,
.testimonial-card, .campaign-card, .bc

/* Dark / Accent variants */
.bc-dark, .bc-gold, .bc-teal, .tier-card.featured

/* Reveal */
.reveal, .reveal-stagger  /* add .in when visible */
```
