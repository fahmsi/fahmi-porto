# Implementation Report — Fahmi Muhammad Al Hafizh Portfolio

**Date:** 2026-07-30  
**Build status:** ✅ Production build successful  
**Dev server:** Running at http://localhost:3000  

---

## 1. Summary

A minimal editorial portfolio website for Fahmi Muhammad Al Hafizh has been built and deployed locally. The site features a concise, project-focused homepage and a complete long-form case study for the SPMB PAUD Al-Quran Az-Zahra Depok student admission system. All content is sourced strictly from the verified factual source files. No project facts have been invented or exaggerated.

---

## 2. Final Route Structure

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage — introduction, featured PSB project, Blue Economy placeholder, contact footer |
| `/work/psb-az-zahra` | Static | Full editorial case study — 13 sections with sticky TOC, diagrams, sprint blocks, testing summary |
| `/_not-found` | Static | Branded 404 page |
| `/sitemap.xml` | Static | XML sitemap for SEO |
| `/robots.txt` | Static | Robots.txt allowing full crawl |

---

## 3. Installed Packages

| Package | Version | Purpose |
|---|---|---|
| `next` | 15.1.7 | App Router framework |
| `react` / `react-dom` | 19.0.0 | React runtime |
| `tailwindcss` | 3.4.17 | Utility CSS |
| `lucide-react` | 0.475.0 | Minimal icon set |
| `motion` | 12.4.7 | Installed, reserved for subtle animation (not yet used — avoids breaking prerendering) |
| `typescript` | 5.7.3 | Type safety |
| `eslint` / `eslint-config-next` | 9.20.1 / 15.1.7 | Linting |
| `autoprefixer` / `postcss` | standard | Tailwind CSS build processing |
| `next/font` | built-in | Google Fonts (Newsreader serif + Inter sans) |

---

## 4. Created and Modified Files

### Configuration
- `fahmi-porto/package.json` — project dependencies and scripts
- `fahmi-porto/next.config.ts` — Next.js configuration
- `fahmi-porto/tailwind.config.ts` — design token colors and font families
- `fahmi-porto/tsconfig.json` — TypeScript strict mode
- `fahmi-porto/postcss.config.js` — PostCSS for Tailwind
- `fahmi-porto/eslint.config.mjs` — ESLint flat configuration
- `fahmi-porto/.gitignore` — ignore node_modules, .next, .env

### Core Application
- `src/styles/globals.css` — Tailwind directives, CSS variables, reduced-motion overrides, selection styling
- `src/app/layout.tsx` — Root layout, Newsreader serif + Inter sans via `next/font/google`, global metadata
- `src/app/page.tsx` — Homepage route
- `src/app/not-found.tsx` — Branded 404 page
- `src/app/sitemap.ts` — XML sitemap
- `src/app/robots.ts` — Robots.txt
- `src/app/work/psb-az-zahra/page.tsx` — Full PSB case study page

### Layout Components
- `src/components/layout/Header.tsx` — Sticky minimal header, dynamic (Back/Work links per route)
- `src/components/layout/Footer.tsx` — Minimal contact footer
- `src/components/layout/EditorialContainer.tsx` — Responsive width container

### Homepage Components
- `src/components/home/HeroIntro.tsx` — Compact editorial author introduction
- `src/components/home/FeaturedProjectCard.tsx` — PSB project feature with UI composite, metadata, result stats, CTAs
- `src/components/home/BlueEconomyPlaceholder.tsx` — Restrained second-project placeholder

### Case Study Components
- `src/components/case-study/TableOfContents.tsx` — Sticky left sidebar TOC with IntersectionObserver active-section highlighting (desktop only)
- `src/components/case-study/MobileSectionNavigator.tsx` — Collapsible dropdown section navigator (mobile)
- `src/components/case-study/ImageLightbox.tsx` — Accessible modal with Escape key and focus management
- `src/components/case-study/ProcessDiagram.tsx` — Rendered Use Case, Activity, ERD, and Architecture diagrams
- `src/components/case-study/BeforeAfterFlow.tsx` — Before/After workflow comparison grid
- `src/components/case-study/SprintBlock.tsx` — Agile sprint card with retrospective lessons
- `src/components/case-study/TestingSummary.tsx` — Alpha + Beta testing statistics cards with questionnaire breakdown

### Docs
- `fahmi-porto/docs/implementation-plan.md` — Full technical implementation plan

---

## 5. Source Assets Used

No image files were available in `source/assets/` (the directory was empty). The portfolio currently uses rendered UI code to represent the system UI and process diagrams rather than raster screenshots.

See section 14 (Recommended Next Steps) for re-capture specifications.

---

## 6. Temporary Assets Requiring Replacement

The following assets from the shot list in `source/content/04-asset-selection-and-shot-list.md` should be captured and placed in `public/images/psb/`:

| Asset | Section | Status |
|---|---|---|
| `psb/product/01-public-homepage.png` | Homepage hero | ⚠️ Needs capture from live site |
| `psb/product/parent/01–06-*.png` | Parent flow (6 screens) | ⚠️ Needs re-capture with fictional data |
| `psb/product/admin/01–07-*.png` | Admin flow (7 screens) | ⚠️ Needs re-capture with fictional data |
| `psb/process/01-use-case-diagram.png` | System Design | ⚠️ Replace code diagram with re-exported SVG |
| `psb/process/03-entity-relationship-diagram.png` | System Design | ⚠️ Replace code diagram with re-exported SVG |
| `psb/context/02-field-research-session.jpeg` | Discovery | ❌ Requires consent from identifiable people |
| `psb/evidence/01-project-handover.jpeg` | Outcome | ❌ Requires consent from identifiable people |

---

## 7. Privacy Decisions Made

- **No real personal data** used anywhere in the website.
- **Email address** in Header and Footer uses `fahmialhafizh@example.com` as a placeholder — must be replaced with Fahmi's actual email before deployment.
- **LinkedIn URL** uses a placeholder path — must be replaced with the real profile URL.
- **No real applicant data, family card, birth certificate, or payment proof** images included.
- Field research photograph (`02-field-research-session.jpeg`) and handover photograph (`01-project-handover.jpeg`) are **omitted** per privacy checklist — they contain identifiable people and require explicit consent.
- All Beta Testing results use appropriately hedged language: "initial user evaluation", "2 participants", "controlled development environment".

---

## 8. Static Validation Results

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | ✅ Zero errors |
| ESLint (via `next build`) | ✅ Zero errors after fixing 12 unused import warnings |
| Next.js Production Build | ✅ Compiled successfully, 7 static pages |
| Bundle size — Homepage | 810 B (111 kB First Load JS) |
| Bundle size — Case Study | 4.41 kB (114 kB First Load JS) |

---

## 9. Build Route Output

```
Route (app)                         Size     First Load JS
┌ ○ /                               810 B    111 kB
├ ○ /_not-found                     137 B    106 kB
├ ○ /robots.txt                     0 B      0 B
├ ○ /sitemap.xml                    0 B      0 B
└ ○ /work/psb-az-zahra              4.41 kB  114 kB
```

All pages are statically prerendered — no server-side rendering or database queries.

---

## 10. Accessibility Implementation

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<article>`, `<aside>`, `<footer>`)
- Correct heading hierarchy (h1 → h2 → h3 per page)
- All interactive elements have descriptive accessible labels
- Keyboard-accessible TOC navigation with visible focus rings (`:focus-visible`)
- `aria-expanded` on mobile section navigator toggle
- `aria-modal`, `aria-labelledby`, Escape key support, and `document.body.style.overflow` management in Lightbox
- `prefers-reduced-motion` CSS override disables all animations at media-query level
- External links use `target="_blank" rel="noopener noreferrer"` with accessible labels
- Color palette maintains adequate contrast: `#171717` on `#FAFAF8` = ~16:1 ratio

---

## 11. Responsive Behavior

| Viewport | Behavior |
|---|---|
| 1440px desktop | Full layout, sticky TOC sidebar, wide image grids |
| 1024px laptop | Sticky TOC visible, comfortable reading column |
| 768px tablet | TOC sidebar hidden, mobile navigator shown |
| 390px mobile | Single column, mobile navigator, stacked metadata |
| 360px small mobile | Compact header shows "Fahmi." wordmark instead of full name |

---

## 12. Known Limitations

1. **No real product screenshots** — all system UI is rendered via code. Final portfolio requires re-captured screenshots with fictional data per shot list.
2. **Placeholder email and LinkedIn** — both contact fields use placeholder values. Must be updated before deployment.
3. **`motion` package installed but not used** — reserved for future subtle scroll-reveal animations. Safe to add without breaking prerendering.
4. **Next.js 15.1.7 has a documented security advisory** (CVE-2025-66478). Upgrade to latest patched version before public deployment.
5. **Browser subagent testing blocked** by rate limits — visual testing was completed by the user's open browser session at `localhost:3000/work/psb-az-zahra`.

---

## 13. Recommended Next Steps

1. **Replace placeholder contact details** — email and LinkedIn URL in `Header.tsx` and `Footer.tsx`.
2. **Upgrade Next.js** — run `npm install next@latest` to get the latest patched version.
3. **Capture final screenshots** — follow `source/content/04-asset-selection-and-shot-list.md` specifications, place in `public/images/psb/`, and replace code diagrams with actual `<Image />` components.
4. **Add Open Graph image** — create a 1200×630 `og-image.png` and place in `public/` for social sharing previews.
5. **Add a favicon** — place `favicon.ico` in `public/` or configure via `app/icon.tsx`.
6. **Obtain photograph consent** — for field research and handover photos, follow the privacy checklist.
7. **Add subtle motion** — once screenshots are in place, add `motion/react` scroll-reveal animations (respecting `prefers-reduced-motion`).
8. **Vercel deployment** — push to GitHub and connect to Vercel. Set custom domain and update `sitemap.ts` base URL from `fahmialhafizh.com` to the actual domain.
9. **Blue Economy case study** — build `/work/sustainable-blue-economy` once Figma content is exported and reviewed.

---

## 14. Vercel Deployment Readiness

| Criteria | Status |
|---|---|
| All pages statically prerendered | ✅ |
| No server-side runtime dependencies | ✅ |
| `next.config.ts` clean | ✅ |
| `.gitignore` excludes `.env`, `.next`, `node_modules` | ✅ |
| `sitemap.ts` and `robots.ts` present | ✅ |
| No database or authentication | ✅ |
| TypeScript strict mode | ✅ |
| App Router compatible | ✅ |
| **Blockers before go-live** | Replace placeholder email/LinkedIn, upgrade Next.js, add real og-image |
