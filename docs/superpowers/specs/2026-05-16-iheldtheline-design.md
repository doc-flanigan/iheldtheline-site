# iheldtheline.com — Design Spec

**Date:** 2026-05-16
**Domain:** iheldtheline.com
**Subject:** Squadron 42 — unofficial fan site tracking the single-player campaign by Cloud Imperium Games

---

## 1. Identity & Framing

- **Name:** I Held the Line — a reference to the in-fiction Battle of Vega II
- **Brand voice:** Military squadron briefing room — confident, cinematic, slightly austere. No jargon. No gatekeeping. No hype. No doomposting.
- **Audience:** Squadron 42 followers — long-time backers tracking development and newcomers wanting to understand what the game is and when it ships.
- **Status:** Unofficial fan site. Not affiliated with, endorsed by, or connected to Cloud Imperium Games, RSI, or the Star Citizen franchise.

---

## 2. Tech Stack

- **Framework:** Next.js 14 (App Router, TypeScript) — matches `dayonecitizen-main` exactly
- **Styling:** Tailwind CSS with custom tokens (see Section 3)
- **Fonts:** Orbitron (display/headings, weight 500–800) + Inter (body) via `next/font/google`
- **Animation:** framer-motion — progress bar fill animation, timeline entry fade-ins
- **Analytics:** `@vercel/analytics` included from day one
- **Images:** `next/image` for all imagery — automatic WebP, lazy loading, explicit dimensions
- **No CMS.** Content lives in typed TS data files, versioned in the repo.
- **Deployment:** Vercel, linked to GitHub repo, auto-deploys on push

---

## 3. Visual Design

### Color Palette (CSS custom properties + Tailwind tokens)

| Token | Value | Usage |
|---|---|---|
| `navy` | `#0a1a3a` | Primary background |
| `navyLight` | `#0d1b3e` | Cards, nav bar, elevated surfaces |
| `gold` | `#c8a04a` | Headings, accents, borders, countdown, links |
| `goldDark` | `#b8902a` | Hover states on gold elements |
| `starwhite` | `#e8eaf0` | Body text on navy |
| `muted` | `#8892a4` | Secondary text, captions, disclaimers |

### Navigation Bar
- Always solid `navyLight` — no transparency, no scroll transition
- Gold (`#c8a04a`) 2px bottom border
- Sticky (`position: sticky; top: 0`)
- Logo/wordmark: "I HELD THE LINE" in Orbitron, gold
- Nav links: Home · News · Videos · FAQ · About
- Mobile: hamburger menu

### Hero (Home Page)
- Full-bleed background image with dark navy overlay gradient
- Fallback: solid navy gradient if no image
- **Not** a live countdown — CIG has only confirmed "2026," no specific date
- `ReleaseWindow` client component:
  - Site title "I Held the Line" in Orbitron, large
  - Tagline: *"Tracking Squadron 42 — the single-player campaign from Cloud Imperium Games"*
  - Gold progress bar spanning Jan 1 → Dec 31, 2026 (fills proportionally to current date)
  - Label: "X days remaining in CIG's 2026 release window"
  - Caption below bar: *"No specific release date has been announced by CIG. 2026 is their stated target."*
  - Degrades to static text if JS is disabled
  - Day count updates client-side only (no SSR hydration mismatch)

### News Page — Vertical Timeline
- Gold vertical connector line (1px, gradient fades out at bottom)
- Gold dot marker per entry
- Entries: month/year label (gold, small caps) · headline (white, bold) · 2–3 sentence summary (muted) · source link (gold, opens new tab)
- Newest entry at top
- No pagination for MVP — all entries rendered

---

## 4. File Structure

```
iheldtheline-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root: NavBar, Footer, JSON-LD, fonts, theme-color
│   │   ├── page.tsx            # Home: ReleaseWindow hero + section cards
│   │   ├── news/page.tsx       # Vertical timeline
│   │   ├── videos/page.tsx     # Video card grid + VideoObject JSON-LD
│   │   ├── faq/page.tsx        # Accordion + FAQPage JSON-LD
│   │   ├── about/page.tsx      # Fan-site disclaimer, who runs it
│   │   ├── sitemap.ts          # Next.js metadata route
│   │   └── robots.ts           # Next.js metadata route
│   ├── components/
│   │   ├── NavBar.tsx          # Solid navy, gold border, mobile hamburger
│   │   ├── Footer.tsx          # Disclaimers, trademark, copyright, cast note
│   │   ├── ReleaseWindow.tsx   # Client component — 2026 progress bar
│   │   ├── TimelineEntry.tsx   # Single news entry
│   │   ├── VideoCard.tsx       # Thumbnail + VideoObject schema
│   │   └── FaqItem.tsx         # <details>/<summary> accordion item
│   ├── data/
│   │   ├── site.ts             # SITE constants (url, name, author, referral, etc.)
│   │   ├── release.ts          # Release window config + disclaimer text
│   │   ├── news.ts             # NewsEntry[] — from sc-news agent
│   │   ├── videos.ts           # VideoEntry[] — from sc-news agent
│   │   └── faq.ts              # FaqItem[] — from sc-fact-check agent
│   └── lib/
│       └── structured-data.ts  # JSON-LD builder helpers
├── public/
│   ├── images/brand/           # favicon, OG image (1200×630), logo — PLACEHOLDERS
│   └── images/hero/            # Background images — PLACEHOLDERS
├── .claude/
│   └── settings.local.json     # Agent permissions pre-approved
├── docs/superpowers/specs/
│   └── 2026-05-16-iheldtheline-design.md
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 5. Content Data Model

```ts
// src/data/release.ts
export const RELEASE = {
  year: 2026,
  windowEnd: '2026-12-31',
  disclaimer: "No specific release date has been announced by CIG. 2026 is their stated target window.",
  lastVerified: '2026-05-16',
}

// src/data/news.ts
export type NewsEntry = {
  date: string        // ISO: '2025-05-01'
  headline: string
  summary: string     // 2–3 sentences, plain English, no jargon
  sourceLabel: string // e.g. 'RSI Comm-Link'
  sourceUrl: string
}
export const NEWS: NewsEntry[] = []

// src/data/videos.ts
export type VideoEntry = {
  date: string
  title: string
  description: string  // one line
  thumbnailUrl: string // relative path or placeholder
  sourceUrl: string    // YouTube or RSI URL
  duration?: string    // ISO 8601, e.g. 'PT12M30S' — for VideoObject schema
}
export const VIDEOS: VideoEntry[] = []

// src/data/faq.ts
export type FaqItem = {
  question: string
  answer: string       // plain English, fact-checked via sc-fact-check
  sourceUrl?: string
}
export const FAQ: FaqItem[] = []
```

Content arrays are populated by agent runs before `npm run build`. Data is committed to the repo — updates require a new agent run + commit + deploy.

---

## 6. Pages Detail

### Home (`/`)
1. `ReleaseWindow` hero — full-bleed, 2026 progress bar
2. "What is Squadron 42?" intro block — SEO copy, cast mention, key facts
3. Three section cards: → News, → Videos, → FAQ

### News (`/news`)
- Vertical timeline, all entries, newest first
- Sourced from `NEWS` array (sc-news agent output)
- Covers last 24 months of development updates

### Videos (`/videos`)
- Grid of `VideoCard` components
- No inline iframes (CLS/performance) — cards link to source URL
- Each card emits `VideoObject` JSON-LD
- Sourced from `VIDEOS` array (sc-news agent output)
- Covers all official CIG/RSI Squadron 42 videos (CitizenCon presentations, trailers, gameplay reveals, "Save Yourselves", etc.)

### FAQ (`/faq`)
- `<details>`/`<summary>` accordion — no JS required
- Single `FAQPage` JSON-LD block on page
- Questions include: What is Squadron 42? How is it different from Star Citizen? When does it release? Who is in the cast? Is it included with a Star Citizen package? What are the system requirements? Will it be on Steam/consoles?
- All answers verified via sc-fact-check agent

### About (`/about`)
- What the site is, who runs it (Doc_Flanigan)
- Full fan-site / trademark / affiliate disclaimers
- No agent content — static copy

---

## 7. SEO & Structured Data

### Per-page metadata
| Page | Title pattern |
|---|---|
| Home | `Squadron 42 Release Date & News 2026 — I Held the Line` |
| News | `Squadron 42 Development Timeline — Latest News \| iheldtheline.com` |
| Videos | `Official Squadron 42 Videos & Trailers \| iheldtheline.com` |
| FAQ | `Squadron 42 FAQ — Release Date, Cast, Gameplay \| iheldtheline.com` |
| About | `About \| iheldtheline.com` |

All pages: unique meta description, OG tags, Twitter card, canonical URL.

### Keywords (woven naturally, never stuffed)
Primary: "Squadron 42", "Squadron 42 release date", "Squadron 42 2026", "Squadron 42 news", "Squadron 42 trailers", "Squadron 42 vs Star Citizen", "when does Squadron 42 come out"

Cast: "Mark Hamill Squadron 42", "Gary Oldman Squadron 42", "Gillian Anderson Squadron 42", "Henry Cavill Squadron 42", "Andy Serkis Squadron 42" — full verified list from sc-fact-check

### JSON-LD blocks
- Root layout: `WebSite` + `Organization`
- Every page: `BreadcrumbList`
- `/faq`: `FAQPage`
- `/videos`: `VideoObject` per entry

### Technical
- `sitemap.ts` + `robots.ts` via Next.js metadata routes
- `theme-color` meta: `#0a1a3a`
- All images: descriptive `alt` text, explicit `width`/`height`, WebP via `next/image`
- Semantic HTML5: single `<h1>` per page, logical heading order
- Accessible: keyboard nav, visible focus states, WCAG AA color contrast minimum

---

## 8. Footer (every page)

- Fan-site disclaimer: unofficial, not affiliated with or endorsed by Cloud Imperium Games, Roberts Space Industries, or the Star Citizen franchise
- Trademark notice: *Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC. All game assets © Cloud Imperium Rights LLC.*
- Copyright: *© [year] iheldtheline.com*
- Affiliate disclosure if referral links are added

---

## 9. Agent Integration

### Permissions
Before running agents, `.claude/settings.local.json` includes:
```json
{
  "permissions": {
    "allow": [
      "WebFetch",
      "WebSearch",
      "Bash(curl *)"
    ]
  }
}
```

### sc-news agent → `news.ts` + `videos.ts`
- Queries Star Citizen Wiki Comm-Link API + Developer Tracker RSS
- Collects Squadron 42 news entries covering last 24 months
- Collects all official CIG/RSI Squadron 42 videos
- Output committed as typed TS arrays

### sc-fact-check agent → `faq.ts` + cast list + `release.ts`
- Verifies every FAQ answer against official CIG/RSI sources only
- Confirms cast members officially announced by CIG
- Confirms release window (2026, no specific date)
- Flags any unconfirmed claims — those are omitted or labelled

---

## 10. Build & Deployment Order

1. Scaffold Next.js 14 project in current directory (`iheldtheline-site/`)
2. Write all component shells, data file stubs, Tailwind config, site constants
3. Write agent permissions to `.claude/settings.local.json`
4. `git init` → initial scaffold commit
5. `gh repo create iheldtheline-site --public` → push
6. Run `sc-news` agent → populate `news.ts`, `videos.ts`
7. Run `sc-fact-check` agent → populate `faq.ts`, verify cast + release window → update `release.ts`
8. `npm run build` — fix all errors/warnings
9. Deploy to Vercel (MCP or CLI), linked to GitHub repo
10. Final push with content

### Manual steps after handoff
- [ ] Add real hero background images to `public/images/hero/`
- [ ] Replace placeholder OG image (1200×630) and favicon
- [ ] Point `iheldtheline.com` DNS to Vercel
- [ ] Review agent-sourced content before going live
- [ ] Add RSI Fankit "made by community" badge if desired
