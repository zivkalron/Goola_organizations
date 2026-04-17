# Goola — Brand & Design Guidelines
**Version 1.0 | April 2026**

> These guidelines govern all digital surfaces: B2C consumer app, B2B advisor dashboard, and marketing website. They extend the 2022 brand book into practical UI/UX rules optimised for Hebrew-first (RTL), light & clean interfaces that make users feel **safe & in control** and **premium & expert**.

---

## 1. Brand Essence

| Attribute | Definition |
|-----------|-----------|
| **Mission** | Bridge the gap between financial reality and potential — creating a financial quality life (איכות חיים פיננסית) for every household |
| **Vision** | "Every day anew" — bring clients all the possibilities they need to grow and improve their lives |
| **Category** | Fintech · Personal financial planning & management centre for Israeli households |
| **Model** | Holistic: personal human accompaniment + advanced technology platform in one |

### Brand Personality
| # | Trait | Description |
|---|-------|-------------|
| 01 | **Trusted (אמין)** | Like a good friend — warm, honest, always in your corner |
| 02 | **Innovative (חדשני)** | Speaks simply and clearly; modern without being cold |
| 03 | **Expert (מומחה)** | Deep knowledge and experience across all financial domains |
| 04 | **Objective (אובייקטיבי)** | Advice with no third-party interest — the household's interest is always central |

### Core Values
1. **Professionalism (מקצועיות)** — recruiting the best talent to deliver tomorrow's solutions today
2. **People-first (אנשים של אנשים)** — the human being always comes before the transaction
3. **Innovation (חדשנות)** — unique holistic model; personal + platform in one centre
4. **Universality (אוניברסליות)** — global thinking, bringing the world to Israeli households

---

## 2. Emotional Design Targets

Every screen, every component, every micro-interaction must reinforce two feelings:

### Safe & In Control
- Users should feel they have a clear picture of where they stand financially
- Never show raw complexity without a summary or interpretation
- Progress indicators, confirmations, and clear states reduce anxiety
- Use calm, authoritative language — not alarming or sales-y
- Avoid red for errors where possible; use amber/warning tones instead

### Premium & Expert
- Visual hierarchy must always feel deliberate and intentional
- White space is a signal of quality — never crowd the UI
- Typography weight and scale communicate authority
- Data visualisation should feel like a personal financial advisor prepared it, not a spreadsheet
- Avoid cheap visual patterns (excessive gradients, drop shadows, heavy borders)

---

## 3. Color System

### Primary Colors (Core Brand)

| Name | Hex | RGB | Role in UI |
|------|-----|-----|------------|
| **Honey Flowers** (Deep Purple) | `#421763` | 66/23/99 | Primary text, page headers, nav active states, key data labels |
| **Valentine Red** | `#ea4444` | 234/68/68 | Primary CTAs, logo, key highlights, progress indicators |
| **Denim Blue** | `#6BC2DE` | 107/196/224 | Secondary accents, inline text highlights, icon tint, chips |

### Secondary Colors (Use Sparingly)

| Name | Hex | Role in UI |
|------|-----|------------|
| **Passion Purple** | `#550ec4` | Content-only sections, badges, tag backgrounds |
| **New Day** (Yellow) | `#ffce00` | Milestone celebrations, achievement badges only |
| **Refresh** (Green) | `#24ce85` | Success states, positive financial signals, growth indicators |
| **Winds of Change** (Black) | `#000000` | Body copy on light backgrounds only |
| **White** | `#ffffff` | Page background, card backgrounds, input fields |

### Light & Clean UI Palette (Digital Extension)

These are not in the original brand book but are derived from it for digital use:

| Token Name | Value | Usage |
|------------|-------|-------|
| `surface-base` | `#FFFFFF` | Page background |
| `surface-raised` | `#F7F5FA` | Card backgrounds, sidebars (light purple tint) |
| `surface-subtle` | `#EDE8F5` | Section dividers, input backgrounds (very light purple) |
| `border-default` | `#D9D0EA` | Card borders, dividers |
| `border-strong` | `#421763` (20% opacity) | Focused input borders |
| `text-primary` | `#421763` | Headings, labels |
| `text-body` | `#1A1A2E` | Body copy |
| `text-muted` | `#7A6E8A` | Captions, placeholders, helper text |
| `text-on-dark` | `#FFFFFF` | Text on dark/purple backgrounds |

### Color Usage Rules
- **Never** use Valentine Red as a background for large areas in the app (reserve it for brand headers, marketing hero sections)
- **Never** use more than 3 brand colors in a single screen section
- On light backgrounds: use Honey Flowers for text, Valentine Red for CTAs, Denim Blue for accents
- On dark (purple) backgrounds (e.g., nav headers): all text is white; use Denim Blue for highlights only
- New Day (Yellow) and Refresh (Green) are accent-only — **never** use as primary backgrounds
- Passion Purple (`#550ec4`) is for content blocks only, never for interactive elements

---

## 4. Typography

### Typefaces

| Language | Font | Note |
|----------|------|------|
| **English** | Poppins (Google Fonts) | Always used for the brand name "goola" and English content |
| **Hebrew** | קוהרנטי / Coherenti | RTL; primary typeface for all Hebrew content |

> ⚠️ The name **"goola"** must always be written in English (Latin script), in all contexts and languages.

### Type Scale

| Level | Weight | Size (desktop) | Size (mobile) | Usage |
|-------|--------|---------------|---------------|-------|
| Display | Bold | 48–64px | 32–40px | Hero headlines, landing page openers |
| H1 | Bold | 36px | 28px | Page titles |
| H2 | SemiBold | 28px | 22px | Section headers |
| H3 | SemiBold | 22px | 18px | Card titles, subsections |
| H4 | Medium | 18px | 16px | Labels, grouped headings |
| Body Large | Regular | 18px | 16px | Intro paragraphs, key descriptions |
| Body | Regular | 16px | 14px | Standard body copy |
| Body Small | Light | 14px | 13px | Captions, help text |
| Micro | Light | 12px | 11px | Legal text, timestamps |

### Typography Rules
- Hebrew text: always RTL (`dir="rtl"`, `text-align: right`)
- Line height: 1.5–1.7 for body; 1.2–1.3 for display
- **Never** mix Coherenti and Poppins on the same line (exception: inline "goola" brand name)
- Minimum body text size: 14px (no smaller in functional UI)
- Color on light: `#421763` for headings, `#1A1A2E` for body, `#7A6E8A` for muted
- Color on dark: always white (`#FFFFFF`)

---

## 5. Logo

### Usage Rules
- The logo shape is fixed — never alter composition or rearrange elements
- The logo is always left-aligned or centred; **never right-aligned** except when part of Hebrew text flow (can be right-aligned in Hebrew layout context)
- In Hebrew language contexts, the logo may be right-aligned
- When standing alone as an element, centre it
- Logo elements (the dot and the circle overlap) always maintain 50% opacity on any coloured background
- **Minimum clear space**: equal to the height of the lowercase "g" on all four sides

### Logo Colour Variants

| Background | Logo Treatment |
|-----------|---------------|
| White / light | Full colour (Valentine Red wordmark, Denim Blue overlap) |
| Honey Flowers purple | White wordmark, Denim Blue at 50% opacity |
| Valentine Red | White wordmark, elements at 50% opacity |
| Denim Blue | White wordmark, elements at 50% opacity |
| Passion Purple | White wordmark, elements at 50% opacity |
| New Day / Refresh | White wordmark, elements at 50% opacity |

### Do Not
- Stretch, rotate, or skew the logo
- Add drop shadows or outlines
- Place on photographic backgrounds without a solid colour container
- Recreate the logo in a different typeface
- Use partial logo elements as decorative motifs

---

## 6. Visual Elements (Brand Motifs)

### Overlapping Circles
The signature brand element: two overlapping quarter-circles forming a Venn-like shape. This symbolises the intersection of the brand (expertise) and the household (dreams + goals).

**Rules:**
- Always composed of exactly two overlapping circles/quarter-circles
- The overlap intersection is always shown — never hide it
- Use only brand primary colors (Honey Flowers, Valentine Red, Denim Blue)
- Circles can be filled or outlined (ring style), but not mixed in the same composition
- Can be cropped at canvas edges — this is encouraged for dynamic layouts
- Never use standalone circles that are not overlapping in a brand context
- Scale freely — large background motifs and small inline accents are both valid

**In UI:**
- Use as decorative background elements on card headers and hero sections
- Keep at low opacity (10–20%) when used behind text on light backgrounds
- Use at full opacity only in purely decorative sections with no text overlap

### Dot Grid
A regular grid of small circular dots, used as a texture element.

**Rules:**
- White dots on dark/purple backgrounds
- Purple/muted dots on light backgrounds
- Always uniform spacing — never random placement
- Use to add depth to otherwise flat background areas
- Never use as a primary element; always secondary/background

### Icons
- Style: Thin line icons (2px stroke)
- On dark backgrounds: white
- On light backgrounds: Denim Blue (`#6BC2DE`)
- Can be placed inside a rounded-rectangle or circular container
- Icon set should be consistent — do not mix filled and outlined icons on the same screen

---

## 7. Layout & Spacing

### RTL-First Principles
- All layouts are designed RTL (Hebrew primary)
- LTR layouts must be available as a mirror for English contexts
- Reading direction: right → left
- Navigation: primary nav items flow right → left
- Form fields: labels on the right, inputs expand to the left
- Icons adjacent to text: icon on the **left** of text in RTL (opposite of LTR convention)
- Chevrons and arrows: point **left** for "forward/next" in RTL

### Grid System

| Breakpoint | Columns | Gutter | Margin |
|-----------|---------|--------|--------|
| Mobile (< 768px) | 4 | 16px | 16px |
| Tablet (768–1199px) | 8 | 24px | 32px |
| Desktop (≥ 1200px) | 12 | 32px | 64px |

### Spacing Scale (8px base)

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Micro gaps (icon-to-label) |
| `space-2` | 8px | Tight component padding |
| `space-3` | 16px | Standard inner padding |
| `space-4` | 24px | Card padding, section gaps |
| `space-5` | 32px | Section spacing |
| `space-6` | 48px | Large section gaps |
| `space-7` | 64px | Page-level section separation |
| `space-8` | 96px | Hero/marketing section gaps |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Input fields, small chips |
| `radius-md` | 12px | Cards, modals |
| `radius-lg` | 20px | Large cards, hero panels |
| `radius-xl` | 32px | Floating panels, toasts |
| `radius-full` | 9999px | Pills, badges, avatar containers |

---

## 8. Component Guidelines

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | `#ea4444` Valentine Red | White | None | Primary CTA — one per screen |
| Secondary | Transparent | `#421763` | `#421763` 1.5px | Secondary actions |
| Ghost | Transparent | `#ea4444` | None | Tertiary, links |
| Disabled | `#D9D0EA` | `#7A6E8A` | None | Inactive state |
| Dark surface | `#ffffff` | `#421763` | None | CTAs on dark/purple backgrounds |

- Height: 48px (primary), 40px (secondary/ghost)
- Border radius: `radius-full` (pill shape) for primary CTAs; `radius-sm` for inline buttons
- Font: SemiBold, 16px
- Never use more than one Primary button per screen section
- Hover: 8% darken on background; Focus: 3px offset outline in Denim Blue

### Cards

- Background: `#FFFFFF` with subtle shadow (`0 2px 12px rgba(66,23,99,0.08)`)
- Border: none (shadow only) or `1px solid #D9D0EA`
- Border radius: `radius-md` (12px) standard; `radius-lg` (20px) for featured/hero cards
- Padding: `space-4` (24px) standard
- On hover: shadow deepens slightly (`0 4px 20px rgba(66,23,99,0.12)`)

### Input Fields

- Background: `#FFFFFF` or `surface-subtle` (`#EDE8F5`)
- Border: `1px solid #D9D0EA`; focus: `2px solid #421763`
- Height: 48px
- Border radius: `radius-sm` (8px)
- Label: above the field, right-aligned in RTL, `text-primary` colour, SemiBold 14px
- Placeholder: `text-muted` colour
- Error state: `#ea4444` border + error message below field (not red text on red background)
- Helper text: below field, `text-muted`, 12px

### Navigation

**B2C App (Mobile-first)**
- Bottom tab bar on mobile: white background, active tab in `#421763` with Denim Blue underline
- Sidebar on desktop: `surface-raised` (`#F7F5FA`) background, active item highlighted with light Valentine Red tint

**B2B Advisor Dashboard**
- Left sidebar (LTR) / Right sidebar (RTL): `#421763` dark background, white text
- Active nav item: white background pill, `#421763` text
- Section dividers: white at 20% opacity

**Marketing Website**
- Sticky top navigation: white background, logo on right (RTL)
- Primary CTA in nav: Valentine Red button (pill)
- On scroll: add subtle shadow to navbar

### Data Visualisation
- Chart primary color: `#421763` (Honey Flowers)
- Chart secondary: `#6BC2DE` (Denim Blue)
- Chart tertiary: `#ea4444` (Valentine Red)
- Chart positive/growth: `#24ce85` (Refresh Green)
- Chart negative/loss: `#ea4444` (Valentine Red) — note: contextual only
- Always include axis labels; never show raw numbers without context or units
- Progress rings/bars: use Passion Purple (`#550ec4`) track, Denim Blue or Valentine Red fill
- Tooltips: white card with `#421763` text, `radius-md`

---

## 9. Photography & Imagery

### Household Photography (B2C)
- Subject: Families and individuals over 21
- Tone: Warm, relaxed, authentic — happy moments, self-realisation, empowerment
- Avoid: Stock-looking, overly staged imagery; stressed expressions; financial stress themes
- Colour grading: Natural, slightly warm — avoid cold/blue tones
- Framing: Real environments (home, outdoors) not abstract financial settings

### Professional Photography (B2B / Advisor)
- Subject: Financial advisors and professionals in service contexts
- Tone: Warm, approachable meeting environments — not corporate/cold
- Avoid: Suit-and-tie formality; sterile office settings; aggressive handshake stock photos

### Imagery Do's & Don'ts
- ✅ Diverse, inclusive representation across age and family structure
- ✅ Natural light, lifestyle contexts
- ✅ Faces showing genuine warmth (not forced smiles)
- ❌ Charts or money imagery in photo selections (leave data to UI)
- ❌ Generic calculator/piggy bank/coin stock imagery
- ❌ High contrast dramatic photography

---

## 10. Voice & Tone

### Brand Voice Attributes
| Attribute | What it means | In practice |
|-----------|--------------|-------------|
| **Trusted friend** | Warm, personal, genuine | Use "אנחנו" (we), speak directly to "אתה/את" |
| **Clear & simple** | No jargon, no complexity | Translate financial terms into human language |
| **Expert but accessible** | Knowledgeable, never condescending | Explain, don't lecture |
| **Objective** | No hidden agenda | Acknowledge trade-offs honestly |

### Tone by Context

| Context | Tone |
|---------|------|
| Onboarding | Warm, encouraging, low-pressure |
| Financial summaries | Clear, calm, factual |
| Goal achievement | Celebratory, energising |
| Errors / problems | Reassuring, solution-focused — never alarming |
| Empty states | Friendly invitation, not blank emptiness |
| Advisor dashboard | Professional, efficient, data-focused |
| Marketing | Inspiring, aspirational, benefit-led |

### Writing Rules
- Hebrew primary — always RTL copy
- Use short sentences (max 15–18 words per sentence for body copy)
- Never use financial acronyms without spelling them out first
- Avoid negative framing: "צור תוכנית לחיסכון" not "אל תפספס את ההזדמנות"
- Numbers: always use Hebrew number formatting (commas for thousands: ₪10,000)
- Currency: ₪ symbol before the number (₪ 10,000)
- The brand name is always written **"goola"** — lowercase, Latin script, in all contexts

---

## 11. Surface-Specific Guidelines

### 11a. B2C Consumer App

**Goal:** Users feel safe navigating their financial life, empowered to take action.

- Default to light surfaces; use dark purple only for major milestones/celebration moments
- Dashboard hierarchy: financial health summary → goals progress → action items
- Always show trends in context (vs. last month, vs. goal target)
- Use Refresh Green (`#24ce85`) for positive signals — savings growth, goal progress
- Milestone moments (goal reached, first plan created): full-bleed brand color celebration screen
- Bottom navigation (mobile): 4–5 items max
- Empty states: always show an inspiring next step, never a blank screen

### 11b. B2B Advisor Dashboard

**Goal:** Advisors feel efficient, expert, and in command of client portfolios.

- Denser information density than B2C — advisors are power users
- Dark sidebar navigation: `#421763` background
- Data tables: `surface-raised` rows, alternating with `surface-base`
- Client status indicators: colour-coded by priority (Refresh Green = on track, New Day Yellow = needs attention, Valentine Red = urgent)
- Search and filter are always prominent — advisors navigate by client name/status
- Typography can go smaller (min 13px) for data-dense views
- Use Passion Purple (`#550ec4`) for internal/advisor-only UI elements to differentiate from client-facing views

### 11c. Marketing Website

**Goal:** Inspire trust and action in households who haven't yet used goola.

- Hero sections: dark purple (`#421763`) with brand circle motifs — bold brand impression
- Scroll sections: alternate between white and `surface-raised` (`#F7F5FA`)
- Prominent CTA: Valentine Red pill button above the fold
- Testimonials: warm photography + quote format — human-centred
- Feature explanations: icon + short headline + 2-line description (never long paragraphs)
- Mobile-first layout: all content readable and tappable on small screens
- SEO: always include structured Hebrew copy for primary pages

---

## 12. Accessibility

| Rule | Standard |
|------|---------|
| Text contrast | WCAG AA minimum (4.5:1 for body, 3:1 for large text) |
| Interactive element size | Minimum 44×44px touch target |
| Focus indicators | Visible 3px Denim Blue outline on all interactive elements |
| Colour alone | Never use colour as the sole indicator of state — always add label/icon |
| RTL support | All components must render correctly in RTL without layout breaks |
| Font size | Minimum 14px for functional UI text |
| Motion | Respect `prefers-reduced-motion` — all animations optional |

---

## 13. Animation & Motion

- Motion philosophy: **purposeful and calm** — no decorative animations for their own sake
- Transitions: 200–300ms ease-out for most UI transitions
- Page/screen transitions: 350ms slide or fade — RTL direction (enter from left, exit to right)
- Loading states: subtle Denim Blue pulse — never full-screen spinners for partial loads
- Celebration moments: brief confetti or particle burst (500ms max) — only for major milestones
- Data loading: skeleton screens in `surface-subtle` colour — never blank states

---

## 14. Design Token Summary (Quick Reference)

```
Colors
------
--color-primary:        #421763  /* Honey Flowers */
--color-accent:         #ea4444  /* Valentine Red */
--color-highlight:      #6BC2DE  /* Denim Blue */
--color-purple-mid:     #550ec4  /* Passion Purple */
--color-success:        #24ce85  /* Refresh */
--color-warning:        #ffce00  /* New Day */
--color-surface:        #FFFFFF
--color-surface-raised: #F7F5FA
--color-surface-subtle: #EDE8F5
--color-border:         #D9D0EA
--color-text-primary:   #421763
--color-text-body:      #1A1A2E
--color-text-muted:     #7A6E8A

Typography
----------
--font-latin:    'Poppins', sans-serif
--font-hebrew:   'Coherenti', sans-serif
--font-size-display: 48px
--font-size-h1:  36px
--font-size-h2:  28px
--font-size-h3:  22px
--font-size-h4:  18px
--font-size-body-lg: 18px
--font-size-body:    16px
--font-size-sm:      14px
--font-size-xs:      12px

Spacing
-------
--space-1: 4px   --space-5: 32px
--space-2: 8px   --space-6: 48px
--space-3: 16px  --space-7: 64px
--space-4: 24px  --space-8: 96px

Border Radius
-------------
--radius-sm:   8px
--radius-md:   12px
--radius-lg:   20px
--radius-xl:   32px
--radius-full: 9999px
```

---

*These guidelines should be treated as a living document. As PRDs are introduced for specific features, design decisions should reference and extend — but never contradict — this foundation.*

*Last updated: April 2026 | goola Finance and Insurance*
