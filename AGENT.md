# ג'ריקו אספינוזה — Landing Page

## Project
- Business: ג'ריקו אספינוזה — התקנת פרקט ושטיחים
- Stack: Next.js 14 App Router, TypeScript, Tailwind CSS
- Language: Hebrew RTL
- Conversion: WhatsApp only — no forms, no phone field
- Read BRIEF.md for full copy and context

## RTL Rules — non-negotiable
- `<html dir="rtl" lang="he">`
- CSS logical properties ONLY: `padding-inline-start`, `margin-inline-end`, `inset-inline`
- NEVER use `padding-left`, `padding-right`, `margin-left`, `margin-right` directly
- Two-column layouts: text column RIGHT, image column LEFT
- All arrow/chevron icons: `scale-x-[-1]` to mirror for RTL
- Progress steps (section 6): step 1 on the RIGHT, flow left
- FAQ accordion icon: on the LEFT side of the question row (action side in RTL)
- CTA buttons: `w-full` on mobile, right-aligned or centered on desktop

## Typography
- Font: Rubik — import from Google Fonts
- H1: 32px / font-weight 700
- H2: 24px / font-weight 600
- Body: 17px / line-height 1.8
- CTA button text: 18px / font-weight 700
- NEVER italic
- NEVER ALL CAPS

## Colors
- bg-primary: #F5F2EE (Warm Linen — main background)
- bg-secondary: #EDEAE4 (Pale Oak — alternating sections)
- brand-primary: #2C1A0E (Deep Walnut — headings, buttons)
- accent: #A0522D (Sienna Wood — highlights, lines, max 15% of page)
- whatsapp: #25D366 (EXCLUSIVE to WhatsApp CTA only)
- text-primary: #1A1008
- text-secondary: #6B5744
- text-on-dark: #F5F2EE (section 8 only)

## Section Order
1. Hero — "הרצפה שלכם יכולה להיראות ככה"
2. Identity — "אתם יודעים מי מגיע. זה אני."
3. Testimonials — "מה אמרו אחרי שסיימנו"
4. Services — "מה בדיוק אפשר לבקש ממני"
5. Gallery — "עבודות שעשיתי"
6. Process — "איך זה עובד — מהרגע שכותבים עד שגומרים"
7. FAQ — "שאלות שחוזרות לפני שמזמינים"
8. Final CTA — "רוצים לדעת כמה זה עולה?"

## Section Backgrounds (alternating)
- 1 Hero: full bleed image
- 2 Identity: #F5F2EE
- 3 Testimonials: #EDEAE4
- 4 Services: #F5F2EE
- 5 Gallery: #EDEAE4
- 6 Process: #F5F2EE
- 7 FAQ: #EDEAE4
- 8 Final CTA: #2C1A0E (dark)

## Spacing
- Section padding mobile: py-14 (56px)
- Section padding desktop: py-24 (96px)
- Hero: h-[100svh]

## WhatsApp CTA
- Primary button text: שלחו תמונה לג'ריקו
- Phone: [TODO: INSERT 972543962871]
- Default prefilled: היי ג'ריקו, ראיתי את הדף. מחפשים לעשות פרקט, שולחים תמונה.
- URL: `https://wa.me/972XXXXXXXXX?text=[URL-encoded message]`
- CTA appears in sections: 1, 4, 5, 8 ONLY (4 total — do not add more)
- Each section uses its own button text and support line — see BRIEF.md

## Floating WhatsApp Button
- position: fixed, bottom: 24px, LEFT: 24px (RTL — left is thumb side)
- NOT bottom-right (conflicts with Android back gesture)
- Size: 56×56px, fully rounded
- Color: #25D366
- On first load: show with label "כתבו לי" beside icon
- After scroll: collapse to icon only
- Hide when Hero CTA is in viewport

## Hero Section
- Background: full-bleed image (/public/hero.jpg)
- Overlay: dark gradient bottom-only for text readability
- Above fold (390px): headline + one support line + WhatsApp CTA only
- Headline right-aligned
- Button: w-full

## Identity Section (2)
- Desktop: 2-col — text RIGHT, image LEFT
- Mobile: image top, text below
- Image: [TODO: /public/jericho-portrait.jpg — REQUIRED]
- 4 bullet points — plain bullets, no icons

## Testimonials Section (3)
- 3 cards — stack on mobile, row on desktop
- NO carousel — all 3 visible at once
- Text right-aligned in each card
- No star ratings (no Google reviews to back them up)
- Names: [TODO: add first name + city when available]

## Gallery Section (5)
- Grid: 2 cols mobile, 3 cols desktop
- Aspect ratio: 4:3
- Simple tap-to-enlarge (no complex lightbox)
- Images: [TODO: /public/gallery/01.jpg, 02.jpg, etc.]

## Process Section (6)
- 3 steps only
- Desktop: horizontal row, step 1 on RIGHT
- Mobile: vertical stack
- Connecting arrow between steps points LEFT (mirror with scale-x-[-1])
- Step numbers on RIGHT side of each step

## FAQ Section (7)
- Accordion component
- Icon (plus/chevron) on LEFT side of question row
- Answer expands below, right-aligned text

## MUST NOT DO
- No gradients anywhere
- No blue of any shade
- No 3-column feature grid with icon+heading+body cards
- No stock photos
- No italic Hebrew text
- No WhatsApp green outside the CTA button
- No wavy section dividers — background color change only
- No contact form
- No phone number field
- No dir="rtl" only on wrapper — logical properties throughout all components
- No placeholder copy — use TODO comments for missing content
