---
name: Lumina Engineering
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cfc4c5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#988e90'
  outline-variant: '#4c4546'
  surface-tint: '#c6c6c6'
  primary: '#c6c6c6'
  on-primary: '#303030'
  primary-container: '#000000'
  on-primary-container: '#757575'
  inverse-primary: '#5e5e5e'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#000000'
  on-tertiary-container: '#8556f0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered for the high-performance developer, evoking a sense of precision, technical mastery, and forward-thinking innovation. It targets a sophisticated audience of technical recruiters and fellow engineers who value efficiency and aesthetic polish.

The visual direction merges **Minimalism** with **Glassmorphism** to create a "Dark-UI" environment reminiscent of modern IDEs and developer tools like Linear and Vercel. High-contrast elements ensure readability, while vibrant gradients provide focal points that mimic the energy of a glowing workstation. The atmosphere is quiet but powerful—relying on generous negative space, razor-sharp borders, and purposeful micro-interactions to convey quality.

## Colors

The palette is anchored in absolute blacks and deep charcoals to maximize the "infinite depth" feel of OLED displays. Primary accents are neon-inspired but used with restraint to maintain a premium feel. 

- **Deep Blacks (#000000, #0A0A0A):** Used for base backgrounds and primary containers to create a void-like canvas.
- **Vibrant Accents:** Blue, Purple, and Cyan are utilized strictly for call-to-actions, active states, and technical status indicators.
- **Functional Gradients:** Used for hero typography and "glow" backgrounds to add organic depth to a rigid geometric layout.
- **Glass Effects:** Border colors should always be semi-transparent white or gray to allow background blurs to feel integrated.

## Typography

The design system utilizes **Geist** for its structural clarity and technical aesthetic. It balances a high-end editorial look with the utility of a coding typeface. 

- **Display Hierarchy:** Large headings use tight tracking and heavy weights to create "weight" on the page. Use linear gradients for the most important hero headlines.
- **Technical Context:** Monospaced fonts (JetBrains Mono or Geist Mono) are reserved for metadata, tags, and snippets of code to signal the developer focus.
- **Readability:** Body text should maintain a 1.6x line height to ensure long-form project descriptions are legible against the high-contrast dark background.

## Layout & Spacing

This design system follows a **mobile-first, 12-column fluid grid**. The layout philosophy is built on "Logical Sections" separated by significant vertical whitespace to prevent visual clutter.

- **Desktop:** 12 columns, 24px gutters, and 80px side margins. Max container width of 1200px ensures content doesn't stretch excessively on ultrawide monitors.
- **Mobile:** 4 columns, 16px gutters. Elements usually stack vertically, but small utility chips may horizontal-scroll.
- **Rhythm:** All spacing must be a multiple of 4px. Use `xl` (80px) for section padding to allow the minimalist elements room to breathe.

## Elevation & Depth

In this design system, depth is conveyed through **light and transparency** rather than traditional shadows.

1.  **Backdrop Blurs:** High-elevation components (like navigation bars or modal overlays) use a `20px` backdrop-filter blur with a 70% opaque charcoal background.
2.  **Subtle Outlines:** Instead of shadows, use 1px solid borders (`rgba(255,255,255,0.1)`) to define element boundaries against the black background.
3.  **Active Glows:** Current items or hovered cards should emit a soft, localized outer glow using the primary gradient colors at 20% opacity. 
4.  **Z-Index Layers:**
    - Level 0: Background (#000000)
    - Level 1: Cards and content containers (#0A0A0A)
    - Level 2: Floating Nav / Overlays (Blur + Border)

## Shapes

The shape language strikes a balance between "industrial precision" and "modern approachability." 

- **Main Elements:** Use a standard `0.5rem` (8px) radius for most cards and buttons.
- **Interactive Surfaces:** `rounded-lg` (1rem) is reserved for larger structural blocks like project cards or code blocks.
- **Pill Shapes:** Strictly for "Tags" or "Status Chips" to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Gradient background (#3B82F6 to #8B5CF6) with white text. High-contrast, no shadow.
- **Secondary (Ghost):** 1px subtle border, transparent background. On hover, the border becomes the primary color with a 5% background fill.
- **Tertiary:** Monospace label, no border, slight underline on hover.

### Cards
Cards are the primary content vehicle. They should feature a `1px` subtle border and a very slight gradient shift from #0A0A0A to #171717. When hovered, the border color should brighten, and a faint "glow" should appear beneath the card.

### Input Fields
Dark backgrounds (#0A0A0A) with a bottom-only border or a very subtle 4-sided border. The focus state should illuminate the border with the Cyan-to-Blue gradient.

### Chips & Tags
Small, pill-shaped elements with a secondary gray background (#171717) and monospace font. Used for identifying tech stacks (e.g., React, TypeScript, Rust).

### Navigation
A "Floating Dock" style navigation is preferred. Fixed to the top or bottom center, using heavy glassmorphism (blur) and a thin white border. Items should scale slightly (1.05x) on hover with a smooth 200ms transition.