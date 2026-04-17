# goola Employer One-Pager — Project README

> Full context for continuing development in Claude Code.
> Last updated: April 2026

---

## Project Overview

This is a single-file HTML one-pager for **goola** — an Israeli B2B2C financial advisory platform.

**File:** `goola_employer_onepager_v2.html`
**Audience:** Employer organizations — HR directors, CFOs, CEOs of mid-to-large Israeli companies
**Purpose:** Prospect and partner outreach. Not an investor document. The goal is to communicate goola's value proposition to organizations considering offering goola as an employee financial benefit.
**Language:** English (an Hebrew version may follow)
**Format:** Single scrollable HTML page, print-to-PDF friendly

---

## The goola Business

| Field | Detail |
|-------|--------|
| **Category** | Fintech — personal financial planning & management |
| **Model** | B2B2C — employers sign up employees for the service |
| **Core offering** | Complete financial advisory for employees: pension, insurance, mortgage, savings, loans |
| **Differentiation** | Human advisors + proprietary technology platform; unified view of all financial domains; ongoing life accompaniment |
| **Market** | Israel |
| **Scale** | 175,000+ clients, 125,000+ digital users, 8,000+ mortgage & financing clients annually |

### The Four-Phase Platform

| Phase | Name | Description |
|-------|------|-------------|
| 01 | איסוף וניתוח (Collection & Analysis) | Data aggregation from pension clearinghouse + insurance registry; employee questionnaire |
| 02 | הפגישה (The Meeting) | Live advisory session with real-time AI support, simulations, documented decisions |
| 03 | יישום (Implementation) | Converting meeting decisions into action |
| 04 | ליווי מתמשך (Ongoing Support) | Continuous monitoring, life event tracking, proactive outreach |

### Three User Personas

| Persona | Role |
|---------|------|
| **עובד (Employee)** | The end beneficiary — receives the full experience |
| **סוכן (Advisor/Agent)** | Financial advisor who conducts meetings, powered by the platform |
| **מעסיק (Employer)** | Signs up employees; gets engagement visibility and compliance coverage |

---

## Narrative Structure (Current v2)

The one-pager follows this intentional narrative flow:

1. **Hero** — Loss-framing hook: employees navigating financial lives alone, cost shows up in distraction and turnover. Traction stats as credibility anchors.
2. **The Reality** — Three simple, relatable problem cards. Language is plain and human, not dramatic.
3. **Why goola** — Side-by-side comparison table: what employees have today vs. what goola delivers. Includes the key proof point: meeting prep goes from 6+ hours → zero (platform does it automatically).
4. **The Experience** — Four-step employee journey (01–04), higher-level framing, no internal jargon.
5. **Life-Centric** — Life stages timeline diagram showing goola's relevance across an employee's full career.
6. **Always in the Picture** — Visibility section: employer dashboard, employee dashboard, proactive intelligence, regulatory coverage. (Note: advisor card deliberately excluded — not relevant for employer audience.)
7. **Leadership** — Team section. Currently placeholder avatars — needs real photos and names.
8. **Scale & Trust** — Traction numbers. Framed as "Israel's financial hub," not a startup.
9. **CTA** — "Schedule a Conversation." Soft, no pricing mentioned.
10. **Footer** — goola branding + confidential notice.

---

## Brand Guidelines

### Colors

```css
--purple:   #421763;  /* Honey Flowers — primary text, headers, nav */
--red:      #ea4444;  /* Valentine Red — CTAs, logo, highlights */
--blue:     #6BC2DE;  /* Denim Blue — accents, highlights on dark */
--passion:  #550ec4;  /* Passion Purple — badges, tags */
--success:  #24ce85;  /* Refresh Green — positive signals, growth */
--surface:  #FFFFFF;  /* Page background */
--raised:   #F7F5FA;  /* Card/section backgrounds */
--subtle:   #EDE8F5;  /* Input backgrounds, dividers */
--border:   #D9D0EA;  /* Card borders */
--body:     #1A1A2E;  /* Body copy */
--muted:    #7A6E8A;  /* Captions, helper text */
```

### Typography

| Use | Font | Weight |
|-----|------|--------|
| All text | Poppins (Google Fonts) | 300, 400, 600, 700, 800 |
| Brand name | Always "goola" — lowercase, Latin script, in all contexts |

**Type scale:**
- Display: 48–64px, weight 800
- H1: 36px, weight 700
- H2: 28–32px, weight 700
- H3: 22px, weight 600
- Body: 15–16px, weight 400
- Small: 13–14px, weight 400
- Label/eyebrow: 11px, weight 600, letter-spacing 3px, uppercase

### Visual Motifs

- **Overlapping circles** — signature brand element. Two overlapping quarter-circles in brand colors. Used as decorative background elements. Always shown overlapping, never standalone.
- **Dot grid** — white dots on dark backgrounds, muted on light. Used for texture in hero sections.
- **Color rule** — max 3 brand colors per section. Never Valentine Red as large background area (reserve for CTAs and hero headers).

### Component Rules

| Component | Style |
|-----------|-------|
| Primary CTA button | Valentine Red `#ea4444`, white text, `border-radius: 999px` (pill), 48px height |
| Cards | White background, `1px solid #D9D0EA` border, `border-radius: 16px`, `padding: 28px` |
| Section labels | 11px, weight 600, letter-spacing 3px, uppercase, Valentine Red on light / Denim Blue on dark |
| Dark sections | Background `#421763`, all text white, accents in Denim Blue |

---

## Current TODO List

### High Priority
- [ ] **Team section** — Replace 8 placeholder avatars with real photos and names:
  - Kobi Dahan — goola Group Founder & CEO
  - Ziv Kalron — Chief Product Officer
  - Roni Boter — CTO
  - Noam Gold — VP Insurance
  - Varda Barnea — Retirement Manager
  - Merav Levy Leibowitz — Financier CEO
  - Elad Shoshani — U360 CEO
  - Amir Ben-Shlomo — goola Credit CEO
- [ ] **CTA contact details** — Replace placeholder `hello@goola.co.il` and `goola.co.il` with correct contact info
- [ ] **Hero headline** — Confirm or refine: *"Your employees are navigating their financial lives alone."*

### Nice to Have
- [ ] Hebrew version (RTL layout, same structure)
- [ ] Responsive / mobile layout pass
- [ ] Print stylesheet for clean PDF export
- [ ] Convert to Next.js or Vite project for hosting + easier iteration
- [ ] Add hover micro-interactions on cards
- [ ] Vercel deployment

---

## Key Decisions Already Made

These are deliberate — don't revert without checking:

| Decision | Reason |
|----------|--------|
| No pricing / commercial model mentioned | First-touch document; CTA is a conversation, not a transaction |
| No "investor" framing | This is a prospect/partner document, not a fundraising tool |
| Advisor card removed from visibility section | Not relevant for employer audience — replaced with proactive intelligence + regulatory coverage cards |
| "Loss framing" not mentioned by name | The mechanic is present (employees overpaying, missing out) but the meta-language is kept invisible |
| "Goola difference" box removed | Insight integrated into comparison table row instead |
| Traction framed as "financial hub" | Avoids startup-distancing language; positions as established platform |
| Life events timeline included | One of the strongest visual proof points of goola's life-centric model |
| Team section included | Builds trust for prospect/partner audience |

---

## File Structure (Current)

```
goola-onepager/
├── goola_employer_onepager_v2.html   # Single self-contained file
└── README.md                          # This file
```

If converting to a component-based project, suggested structure:

```
goola-onepager/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── Differentiation.jsx
│   │   ├── Experience.jsx
│   │   ├── Lifecycle.jsx
│   │   ├── Visibility.jsx
│   │   ├── Team.jsx
│   │   ├── Traction.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── team/          # Team photos go here
│   ├── styles/
│   │   └── tokens.css     # Brand tokens
│   └── App.jsx
├── public/
└── README.md
```

---

## Context Notes for Claude Code

- The one-pager was designed and iterated in Claude.ai before being transferred here
- Brand guidelines are locked — do not deviate from the color system or typography rules above
- The name **"goola"** must always be lowercase in all contexts, including headings
- This is an **English-language** document targeting Israeli business decision-makers — tone should be professional but human, not corporate
- The comparison table (Why goola section) is a key persuasion asset — preserve its structure
- The lifecycle timeline is a brand signature element — keep it prominent
