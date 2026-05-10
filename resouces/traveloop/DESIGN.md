---
name: Traveloop
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#01201a'
  on-tertiary-container: '#6b8a82'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c8eae0'
  tertiary-fixed-dim: '#adcdc4'
  on-tertiary-fixed: '#01201a'
  on-tertiary-fixed-variant: '#2e4c45'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1200px
---

## Brand & Style
The design system is anchored in a philosophy of "Essentialism in Motion." It targets high-discerning travelers who value clarity over clutter. The personality is sophisticated yet approachable, acting as a quiet concierge rather than a loud tour guide. 

By leveraging a high-ratio of whitespace and a restricted palette, the UI creates a meditative planning environment. The goal is to reduce the cognitive load of travel logistics through a structured, lightweight interface that feels as premium as a physical boutique hotel experience.

## Colors
This design system utilizes a "Muted Monochrome" foundation with a single organic accent. The primary palette is built on neutrals to ensure travel photography remains the focal point.

- **Backgrounds:** Use Off-white (#FAFAFA) for primary surfaces and Light Gray (#F4F4F5) for secondary inset sections or grouped content.
- **Accents:** Use Sage Green (#86A69D) sparingly for successful states, active indicators, or primary calls to action. It should feel like a soft "natural" touch.
- **Dark Mode:** Surfaces transition to Soft Black (#09090B) with foreground containers at (#18181B). Borders should shift to a low-contrast gray (#27272A).

## Typography
The typographic system combines the structural clarity of **Inter** for functional reading with the refined, modern curves of **Manrope** for headlines. 

- **Hierarchy:** Maintain a strong vertical rhythm. Use ample margin-bottom after headlines to create "breathing room."
- **Readability:** Body text uses a generous 1.6 line-height to prevent eye fatigue during long planning sessions.
- **Micro-copy:** Use `label-sm` in all-caps with increased letter-spacing for category tags or metadata (e.g., "FLIGHT", "HOTEL").

## Layout & Spacing
The layout follows a **Fluid-to-Fixed** grid model. On mobile, it utilizes a 4-column grid with 16px margins. On desktop, it centers content within a 1200px container using a 12-column grid.

- **Rhythm:** All spacing must be multiples of 4px. Use `xl` (40px) to separate major sections to maintain the "ultra-minimal" feel.
- **Density:** Components should favor padding over borders. Content should feel like it has room to "float" within its container.
- **Negative Space:** Do not fear empty space. If a view feels crowded, increase the spacing between groups rather than adding dividers.

## Elevation & Depth
This design system avoids heavy drop shadows in favor of **Tonal Layers** and **Subtle Outlines**. 

- **Levels:** Most surfaces should be flat on the background. Use a thin 1px border (#E4E4E7) to define most containers.
- **Elevation:** When an element must float (e.g., a modal or a floating action button), use an "Ambient Shadow": `0px 4px 12px rgba(0, 0, 0, 0.03)`.
- **Interaction:** On hover, elements should not lift. Instead, subtly change the background color from #FAFAFA to #F4F4F5.

## Shapes
The shape language is "Medium-Soft." This provides a friendly, approachable feel without looking overly playful or juvenile.

- **Standard Radius:** 8px (0.5rem) for buttons, input fields, and small cards.
- **Large Radius:** 16px (1rem) for main content containers or modal sheets.
- **Circular:** Reserved only for user avatars and icon-only floating buttons.

## Components
- **Buttons:** Primary buttons use Soft Black (#18181B) with White text. Secondary buttons use a 1px border with no fill.
- **Cards:** Cards should have no background (transparent) and a 1px border, or a solid #F4F4F5 background with no border. Avoid using both.
- **Input Fields:** Minimalist design with a 1px border. Focus state is indicated by a subtle shift in border color to the accent Sage Green, never a heavy glow.
- **Chips/Tags:** Use `label-sm` within a pill-shape. Backgrounds should be very faint (e.g., 10% opacity of the accent color).
- **Lists:** Use generous 16px vertical padding between list items. Use thin horizontal separators only when the list exceeds 5 items.
- **Itinerary Timeline:** A vertical 1px line connecting "stops" or "events." Stops are represented by simple 8px circles. This mimics the Linear/Notion aesthetic of clean, connected data.