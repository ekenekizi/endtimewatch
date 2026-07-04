---
name: Modern Ministry
colors:
  surface: '#131411'
  surface-dim: '#131411'
  surface-bright: '#393936'
  surface-container-lowest: '#0e0e0c'
  surface-container-low: '#1c1c19'
  surface-container: '#20201d'
  surface-container-high: '#2a2a27'
  surface-container-highest: '#353532'
  on-surface: '#e5e2dd'
  on-surface-variant: '#d1c5af'
  inverse-surface: '#e5e2dd'
  inverse-on-surface: '#31302d'
  outline: '#99907b'
  outline-variant: '#4d4635'
  surface-tint: '#ecc246'
  primary: '#ecc246'
  on-primary: '#3d2e00'
  primary-container: '#c9a227'
  on-primary-container: '#4b3a00'
  inverse-primary: '#755b00'
  secondary: '#bcc6e2'
  on-secondary: '#263046'
  secondary-container: '#3f4960'
  on-secondary-container: '#aeb8d3'
  tertiary: '#bcc6e3'
  on-tertiary: '#263047'
  tertiary-container: '#9ca6c2'
  on-tertiary-container: '#313c53'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08e'
  primary-fixed-dim: '#ecc246'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#d8e2fe'
  secondary-fixed-dim: '#bcc6e2'
  on-secondary-fixed: '#111b30'
  on-secondary-fixed-variant: '#3d475d'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#bcc6e3'
  on-tertiary-fixed: '#101b31'
  on-tertiary-fixed-variant: '#3c475f'
  background: '#131411'
  on-background: '#e5e2dd'
  surface-variant: '#353532'
typography:
  display-lg:
    fontFamily: ebGaramond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: ebGaramond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  scripture-quote:
    fontFamily: ebGaramond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: '1.6'
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1140px
  gutter: 32px
  section-padding: 120px
  element-gap: 24px
---

## Brand & Style

The design system is anchored in the concept of "Sacred Stillness." It aims to create a digital sanctuary that feels both ancient in its wisdom and modern in its execution. The brand personality is reverent, sophisticated, and intentional, avoiding the cluttered "noise" of typical social platforms in favor of a cinematic, focused experience.

The visual style is a hybrid of **Minimalism** and **Cinematic Glassmorphism**. It utilizes heavy whitespace—or rather, "space for breath"—to allow scripture and message to take center stage. The aesthetic is premium and editorial, evoking the feeling of a high-end physical journal or a quiet cathedral. Subtraction is favored over addition; every element must serve a spiritual or functional purpose.

## Colors

The color palette is designed to evoke the transition from night to dawn. The primary background is a deep, expansive navy (#020b1f) that provides a sense of depth and infinity. 

Soft gold (#c9a227) is used sparingly as a "divine light" accent for calls to action, highlights, and delicate borders. Text and iconography utilize a warm white (#fdfaf5), which is softer on the eyes than pure white and contributes to the "aged parchment" or "candlelit" warmth of the interface. Secondary backgrounds use a slightly lighter navy (#121d33) to create subtle tonal layering without breaking the dark-mode immersion.

## Typography

Typography in this design system follows an editorial hierarchy. **ebGaramond** is the voice of authority and tradition, used for all headlines, pull quotes, and scripture passages. It is set with generous line height to ensure a relaxed reading pace.

**Manrope** provides a clean, modern counter-balance for body copy and functional UI labels. It is chosen for its geometric clarity and high legibility at smaller scales. Navigation and small metadata labels use Manrope in all-caps with increased letter spacing to create a sense of architectural structure and premium branding.

## Layout & Spacing

The layout philosophy emphasizes "The Generous Margin." This design system employs a **fixed grid** centered on the screen, surrounded by wide negative space to drive focus toward the content. 

Vertical rhythm is intentionally slow; section padding is significantly larger than standard web layouts (typically 120px+) to create a cinematic sense of pace as the user scrolls. Elements are spaced using an 8px base unit, but layouts should prioritize asymmetrical balance and "breathable" clusters over dense information blocks.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Luminous Accents** rather than traditional shadows. Because the background is a deep navy, elevation is signaled by moving to slightly lighter shades of navy (#121d33).

To evoke a "spiritually uplifting" feel, primary cards and modal surfaces utilize a subtle backdrop blur (glassmorphism) with a 1px soft gold border at low opacity (10-15%). A "subtle glow" effect is applied to primary interactive elements, using a soft gold outer-glow (blur: 20px, spread: -5px) to simulate a light source emitting from the element itself.

## Shapes

The shape language is refined and disciplined. A **Soft (1)** roundedness is applied to UI components like buttons and cards, using a 4px to 8px radius. This subtle curvature softens the "hard" edges of the digital screen while maintaining the structured, serious tone of a ministry. 

Large imagery should either be perfectly rectangular for a cinematic look or utilize a very large radius (32px+) when used for decorative, "floating" elements. Circular shapes are reserved exclusively for avatars and specific iconography.

## Components

### Buttons
Primary buttons feature a solid gold background with deep navy text, using the sans-serif font for clarity. Secondary buttons are "Ghost" style, featuring a 1px gold border and a subtle hover glow. All buttons use a minimum height of 48px to ensure a premium, tactile feel.

### Cards
Cards are treated as containers of light. They feature a semi-transparent navy fill with a blur effect, allowing background gradients or imagery to peek through slightly. The borders are thin (1px) and tinted with a gold-to-transparent linear gradient.

### Input Fields
Inputs are minimal, featuring only a bottom-border in soft gold when focused. Labels sit above the field in uppercase Manrope. Error states are indicated by a muted coral rather than a bright red to maintain the palette's harmony.

### Media Player (Cinematic Feature)
A custom component for sermons or reflections. It uses a full-width background image with a heavy navy overlay, featuring gold-accented playback controls and ebGaramond for the title.

### Scripture Blocks
Specialized containers for biblical text. They feature a vertical gold "accent line" on the left side and use the *scripture-quote* typography style, creating a distinct visual break from standard body content.