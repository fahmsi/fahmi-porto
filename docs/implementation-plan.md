# Implementation Plan — Personal Portfolio Website (Fahmi Muhammad Al Hafizh)

## Goal Description
Build a minimal, editorial, project-focused personal portfolio website for Fahmi Muhammad Al Hafizh (System Analyst, Business Analyst, and UI/UX Designer with Web Development capability). The website features a concise homepage and an in-depth long-form case study for the **SPMB PAUD Al-Quran Az-Zahra Depok** student admission system project. 

The design combines a Medium-inspired reading experience, Behance-inspired visual project storytelling, generous whitespace, warm neutral background, serif headings, sans-serif body, and restrained motion—strictly adhering to verified facts from the source files.

---

## 1. Route Structure
- `/`: Concise, project-focused homepage (Header, Personal Introduction, Featured PSB Project Card/Preview, Sustainable Blue Economy Placeholder, Contact/Footer).
- `/work/psb-az-zahra`: In-depth editorial case study for SPMB PAUD Al-Quran Az-Zahra Depok.
- `not-found.tsx`: Minimal, branded 404 page.
- `sitemap.ts`: Dynamic XML sitemap generator for SEO.
- `robots.ts`: Robots.txt generator.

---

## 2. Proposed Project Folder Structure (`fahmi-porto`)

```text
fahmi-porto/
├── docs/
│   ├── implementation-plan.md
│   └── implementation-report.md
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── psb/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── work/
│   │       └── psb-az-zahra/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── EditorialContainer.tsx
│   │   ├── home/
│   │   │   ├── HeroIntro.tsx
│   │   │   ├── FeaturedProjectCard.tsx
│   │   │   ├── BlueEconomyPlaceholder.tsx
│   │   │   └── StatBadge.tsx
│   │   ├── case-study/
│   │   │   ├── CaseStudyHeader.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── MobileSectionNavigator.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   ├── ArticleColumn.tsx
│   │   │   ├── ProcessDiagram.tsx
│   │   │   ├── BeforeAfterFlow.tsx
│   │   │   ├── SprintBlock.tsx
│   │   │   ├── TestingSummary.tsx
│   │   │   ├── UsabilityFindingCard.tsx
│   │   │   ├── ProjectImage.tsx
│   │   │   └── ImageLightbox.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── ExternalLink.tsx
│   ├── content/
│   │   └── psb-case-study.ts
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── next.config.ts
```

---

## 3. Design System & CSS Tokens

### Palette
- **Background:** `#FAFAF8` (Warm off-white editorial background)
- **Primary Text:** `#171717` (Near-black neutral text)
- **Secondary Text:** `#666666` (Neutral medium gray)
- **Muted Text / Metadata:** `#8A8A8A` (Light neutral gray)
- **Border / Divider:** `#E6E6E3` (Subtle off-white border)
- **Accent:** `#315BE8` (Restrained editorial blue)
- **Card / Surface:** `#FFFFFF` (Clean white for subtle elevation)

### Typography
- **Headings (Display/Serif):** `Newsreader` or `Playfair Display` via `next/font/google` (Serif, elegant, editorial weight).
- **Body & Controls (Sans-serif):** `Inter` or `Plus Jakarta Sans` via `next/font/google` (Clean, highly legible sans-serif).
- **Font Sizes:**
  - Homepage Name / Hero Title: 44px–64px (Serif)
  - Case Study Main Title: 44px–60px (Serif)
  - Section Heading H2: 28px–36px (Serif)
  - Subheading H3: 20px–24px (Sans/Serif semi-bold)
  - Body Text: 17px–18px (Sans, line-height 1.7)
  - Metadata & Captions: 13px–14px (Sans, tracked)

### Layout & Columns
- **Global Page Layout Max Width:** 1120px
- **Article Text Column Max Width:** 720px
- **Desktop Sidebar TOC Width:** 220px
- **Spacing Scale:** Generous vertical padding (80px–120px between major sections)

---

## 4. Homepage Structure & Content
1. **Header:** Minimal identity ("Fahmi Muhammad Al Hafizh"), links for "Work" (scrolls to `#work`) and "Email" (`mailto:...`).
2. **Hero Intro:** Compact editorial introduction. Title, subtitle, concise summary of capabilities, location (Depok, West Java), and clean portrait graphic.
3. **Featured SPMB Project:**
   - Title: *From Paper Forms to a Structured Online Admission Flow*
   - Context: SPS PAUD Al-Quran Az-Zahra Depok
   - Metadata: Role (System Analyst, UI/UX Designer & Web Developer), Timeline (2025–2026), Stack (Laravel, PHP, MySQL, Blade)
   - Results highlights: 17 functional requirements, 6 non-functional, 3 user roles, 3 Agile sprints, 46/46 Alpha scenarios passed, 11/11 Beta tasks completed, 4.6/5 initial user evaluation.
   - Editorial Visual Preview: Custom crisp composite screens (Homepage, Parent flow, Admin dashboard).
   - CTAs: "Read Case Study" (`/work/psb-az-zahra`), "Visit Live Website" (`https://paudazzahradepok.site`).
4. **Sustainable Blue Economy Placeholder:** Secondary, restrained preview clearly labeled "Case study in preparation / Content currently being organized".
5. **Contact Footer:** Statement ("Let's build something useful."), verified email and LinkedIn links.

---

## 5. PSB Case-Study Page Structure (`/work/psb-az-zahra`)
1. **Header & Hero:** Back to Home link, title, subtitle, comprehensive metadata grid, live link button, full-width high-resolution hero image preview.
2. **Navigation:** Sticky Table of Contents on desktop (left sidebar), collapsible/scrollable Section Navigator on mobile.
3. **Sections (13 Sections):**
   1. *Overview:* Background, institution context, Fahmi's end-to-end role, project boundaries.
   2. *The Starting Point:* Manual paper form workflow, problems (physical visit requirement, repeated data handling, fragmented communication).
   3. *Understanding the Workflow:* Observation, interview with school principal, research approach, 3 user roles (Parent, Admin, Super Admin).
   4. *Requirement Analysis:* 17 functional requirements, 6 non-functional requirements, 3 roles, capability breakdown.
   5. *Designing the Process:* Before vs After workflow comparison, scope boundaries (no automatic age eligibility, no external payment gateway, no direct Dapodik auto-sync).
   6. *System Design:* Diagrams & artifacts (Use Case Diagram, Activity Diagram, ERD, Layered System Architecture) with recruiter-friendly explanations.
   7. *Building in Three Sprints:* Sprint 1 (Public Info & Auth), Sprint 2 (Parent Admission Journey), Sprint 3 (School Administration & Security) + Sprint retrospective lessons.
   8. *Final Product:* Parent flow walkthrough & Admin flow walkthrough through large editorial screenshots with clean captions.
   9. *Testing and Validation:* Alpha Testing (46/46 scenarios passed in controlled env) & Beta Testing (2 participants, 11 tasks, 4.6/5 average evaluation score).
   10. *Usability Findings:* 3 key Beta testing findings (Upload limits, Payment placement, Admin field helper text) and design lessons learned.
   11. *Outcome:* Factual summary of system outcomes without exaggerated claims.
   12. *Reflection:* First-person professional reflection on system analysis, scope boundaries, and user-centered design.
   13. *Next Improvements:* Concrete list of grounded future enhancements.

---

## 6. Asset & Visual Presentation Strategy
- Create clean, responsive SVG diagrams and crisp high-resolution UI screen previews for Use Case, Activity Diagram, ERD, System Architecture, Parent Flow, Admin Flow, and testing metrics.
- Implement an interactive accessible image Lightbox for viewing system diagrams in full detail.
- Ensure all sample data shown in UI previews is 100% fictional to strictly protect privacy.

---

## 7. Responsive & Accessibility Strategy
- **Breakpoints:** Tested at Desktop (1440px), Laptop (1024px), Tablet (768px), Mobile (390px), Small Mobile (360px).
- **Accessibility:**
  - Semantic HTML5 tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`).
  - Keyboard focus rings & skip links.
  - Full ARIA labels for interactive elements and Lightbox dialogs.
  - `prefers-reduced-motion` compliance across all Motion animations.
  - Color contrast ratio >= 4.5:1.

---

## 8. Dependencies to Install
- `next`, `react`, `react-dom`
- `tailwindcss`, `postcss`, `autoprefixer`
- `lucide-react` (subtle iconography)
- `motion` (subtle animations)
- `@types/node`, `@types/react`, `@types/react-dom`, `typescript`
- `eslint`, `eslint-config-next`

---

## 9. Verification Checklist
- [ ] Next.js app builds cleanly with zero TypeScript or ESLint errors (`npm run build`).
- [ ] Homepage renders concisely with verified metadata and project facts.
- [ ] Case study page `/work/psb-az-zahra` renders all 13 sections with functioning TOC highlighting and mobile section navigator.
- [ ] Tested across 5 viewport widths (1440px, 1024px, 768px, 390px, 360px).
- [ ] No privacy leaks, no exaggerated claims, no dummy lorem ipsum.
- [ ] Full report generated at `fahmi-porto/docs/implementation-report.md`.
