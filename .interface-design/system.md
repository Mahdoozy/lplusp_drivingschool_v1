# L Plus P Driving School — Design System

## Direction
Personality: Sophistication & Trust — premium local brand, confident, clean, approachable
Foundation: Navy blue base with white sections and gold accents

## Colour Tokens
--navy: #0B1628
--navy2: #0F1E35
--navy3: #162440
--blue: #1A56DB
--blue-light: #EBF3FF
--gold: #F5C132
--gold-dark: #E8A800
--white: #FFFFFF
--off-white: #F7F9FF
--slate: #E8EEF8
--text-dark: #0B1628
--text-mid: #2D4470
--text-muted: #6B7FA8
--green-wa: #22C55E
--red-plate: #CC1500

## Typography
Display headlines (h1, h2): Syne, weight 800
Subheadings (h3, h4): Syne, weight 700
Body text: Outfit, weight 400
Labels and nav: Outfit, weight 500-600
Numbers, prices, phones: DM Mono, weight 500
Google Fonts import: Syne (700,800), Outfit (300,400,500,600), DM Mono (400,500)

## Spacing
Base unit: 8px
Scale: 4, 8, 12, 16, 24, 32, 48, 72px
Never use values outside this scale.

## Compos

### Button Primary
Background: #F5C132
Text: #0B1628
Height: 44px
Padding: 0 28px
Border radius: 10px
Font: Outfit 700 15px

### Button Outline
Background: transparent
Border: 1.5px solid rgba(255,255,255,0.3)
Text: white
Height: 44px

### Button Nav
Background: #F5C132
Text: #0B1628
Height: 38px
Padding: 0 20px
Border radius: 8px
Font: Outfit 600 14px

### Card Dark
Background: #162440
Border: 1px solid rgba(255,255,255,0.07)
Border radius: 14px
Padding: 24px

### Card Light
Background: #FFFFFF
Border: 1px solid #E8EEF8
Border radius: 14px
Padding: 24px
Shadow: 0 2px 12px rgba(0,0,0,0.06)

### Card Featured
Same as Card Dark but border: 1.5px solid #F5C132

### Icon Square (on dark backgrounds)
Size: 44x44px
Background: rgba(245,193,50,0.1)
Border radius: 10px
Icon: 20px, colour #F5C132

### Icon Square (on light backgrounds)
Size: 44x44px
Background: #EBF3FF
Border radius: 10px
Icon: 20px, colour #1A56DB

### Navbar
Height: 68px
Background: #0B1628
Position: sticky, z-index 50
Scroll behaviour: at 80px+ scrolled → background rgba(255,255,255,0.95), backdrop-filter blur(20px), all text flips to #0B1628

### Section Label
Font: Outfit 700
Size: 11px
Letter spacing: 0.12em
Text transform: uppercase
Colour on dark sections: #F5C132
Colour on light sections: #1A56DB

## Section Order and Backgrounds (homepage)
1. Navbar — #0B1628 always
2. Hero — #0B1628 dark navy
3. Trust strip — #0F1E35
4. Stats bar — #F7F9FF light
5. How it works — #FFFFFF white
6. Services — #F7F9FF light blue tint
7. Lifestyle cards — #0B1628 dark
8. Pricing — #0B1628 dark navy
9. Reviews — #060E1E deepest dark
10. FAQ — #FFFFFF white
11. CTA banner — linear-gradient(135deg, #F5C132, #E8A800)
12. Footer — #040A14 darkest

## Animations
Hero elements: staggered fadeUp, 0.1s delay increments
Stats numbers: count-up on Intersection Observer scroll trigger
Cards on hover: translateY(-4px), transition 0.2s ease
Service card: gold underline animates width 0 to 100% on hover
Hero "Pass." word: gold shimmer animation 4sorm steps: slide in from translateX(30px) on step advance

## Rules
- Never use fonts outside the defined typography system
- Never use spacing values outside the 8px scale
- All phone numbers must use tel: links
- All external links: target="_blank" rel="noopener noreferrer"
- Mobile responsive always
- Tailwind CSS only — no inline styles, no CSS modules
- Import Google Fonts in layout.tsx
