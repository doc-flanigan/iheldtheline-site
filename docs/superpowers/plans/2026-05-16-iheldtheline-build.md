# iheldtheline.com — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build iheldtheline.com from scratch — an unofficial Squadron 42 fan site with a 2026 release-window progress bar hero, vertical development timeline, official videos grid, FAQ with structured data, and a complete SEO layer — then deploy it to Vercel.

**Architecture:** Next.js 14 App Router, fully static (SSG), TypeScript. Content lives in typed TS data files populated by `sc-news` and `sc-fact-check` sub-agents before build. No CMS, no runtime data fetching.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Orbitron + Inter fonts, lucide-react, @vercel/analytics, framer-motion. Deployed to Vercel via GitHub integration.

---

## File Map

```
iheldtheline-site/                        ← current working directory
├── src/
│   ├── app/
│   │   ├── globals.css                   CREATE
│   │   ├── layout.tsx                    CREATE — root layout, fonts, JSON-LD, NavBar/Footer
│   │   ├── page.tsx                      CREATE — Home: hero + "What is SQ42?" + section cards
│   │   ├── news/page.tsx                 CREATE — vertical timeline
│   │   ├── videos/page.tsx              CREATE — video card grid
│   │   ├── faq/page.tsx                  CREATE — accordion + FAQPage JSON-LD
│   │   ├── about/page.tsx               CREATE — static disclaimer page
│   │   ├── sitemap.ts                    CREATE — Next.js metadata route
│   │   └── robots.ts                     CREATE — Next.js metadata route
│   ├── components/
│   │   ├── NavBar.tsx                    CREATE — sticky solid-navy nav, mobile hamburger
│   │   ├── Footer.tsx                    CREATE — disclaimers, trademark, copyright
│   │   ├── ReleaseWindow.tsx            CREATE — client component, 2026 progress bar
│   │   ├── TimelineEntry.tsx            CREATE — single news entry (date/headline/summary/source)
│   │   ├── VideoCard.tsx                CREATE — thumbnail card + VideoObject JSON-LD
│   │   └── FaqItem.tsx                  CREATE — <details>/<summary> accordion item
│   └── data/
│       ├── site.ts                       CREATE — SITE constants
│       ├── release.ts                    CREATE — 2026 window config + disclaimer
│       ├── news.ts                       CREATE stub → agent populates
│       ├── videos.ts                     CREATE stub → agent populates
│       └── faq.ts                        CREATE stub → agent populates
├── public/
│   ├── images/brand/
│   │   ├── favicon.svg                  CREATE — placeholder SVG
│   │   └── og-image.png                 NOTE — placeholder, manual replacement needed
│   └── images/hero/
│       └── .gitkeep                     CREATE
├── .claude/
│   └── settings.local.json              MODIFY — add agent tool permissions
├── next.config.mjs                      CREATE — image remote patterns
├── tailwind.config.ts                   CREATE — navy/gold tokens
├── postcss.config.mjs                   CREATE — standard Next.js postcss
├── tsconfig.json                        (created by create-next-app)
├── .gitignore                           (created by create-next-app, supplemented)
└── README.md                            CREATE
```

---

## Task 1: Initialize Git and Create GitHub Repository

**Files:**
- Create: `.git/` (via `git init`)
- Create: GitHub remote `iheldtheline-site`

- [ ] **Step 1: Initialize git repo**

```bash
git init
git branch -M main
```

Expected: `Initialized empty Git repository in .../iheldtheline-site/.git/`

- [ ] **Step 2: Create GitHub repo**

```bash
gh repo create iheldtheline-site --public --description "iheldtheline.com — unofficial Squadron 42 fan site by Doc_Flanigan"
```

Expected: URL like `https://github.com/<user>/iheldtheline-site` printed. If `gh` is not authenticated, run `gh auth login` first and stop until authenticated.

- [ ] **Step 3: Add remote**

```bash
git remote add origin https://github.com/$(gh api user --jq .login)/iheldtheline-site.git
```

Expected: no output (success). Verify: `git remote -v` shows `origin` pointing to the GitHub repo.

---

## Task 2: Scaffold Next.js 14 Project

**Files:**
- Creates: `package.json`, `tsconfig.json`, `next.config.mjs` (default), `src/app/layout.tsx` (default), `src/app/page.tsx` (default), `src/app/globals.css` (default), `tailwind.config.ts` (default), `postcss.config.mjs`, `.gitignore`

- [ ] **Step 1: Run create-next-app into current directory**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

If prompted "The directory . contains files that could conflict — continue anyway?", answer **Y**.
If prompted about any feature (router, import alias, etc.), the flags above cover all choices — no interactive prompts should appear.

Expected: `Success! Created iheldtheline-site` or similar. `node_modules/` and `package.json` now exist.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install lucide-react @vercel/analytics
```

Expected: packages added to `node_modules/`, `package.json` updated. (framer-motion is not needed — CSS transitions handle the progress bar and timeline fade-in.)

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: `Ready - started server on 0.0.0.0:3000`. Kill with Ctrl+C. Default Next.js page confirms scaffold works.

---

## Task 3: Configure Tailwind, Globals CSS, and PostCSS

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `postcss.config.mjs`

- [ ] **Step 1: Write tailwind.config.ts**

Replace the entire file with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0a1a3a',
        navyLight: '#0d1b3e',
        gold: '#c8a04a',
        goldDark: '#b8902a',
        starwhite: '#e8eaf0',
        muted: '#8892a4',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Write src/app/globals.css**

Replace the entire file with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --navy: #0a1a3a;
  --navy-light: #0d1b3e;
  --gold: #c8a04a;
  --gold-dark: #b8902a;
  --starwhite: #e8eaf0;
  --muted: #8892a4;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  background-color: var(--navy);
  color: var(--starwhite);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  min-height: 100vh;
  font-family: var(--font-inter), system-ui, sans-serif;
}

*:focus-visible {
  outline: 2px solid #c8a04a;
  outline-offset: 2px;
}

::selection {
  background-color: rgba(200, 160, 74, 0.35);
  color: var(--navy);
}

@layer components {
  .container-wide {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .heading-display {
    @apply font-display font-bold tracking-tight text-starwhite;
  }

  .card-surface {
    @apply rounded-xl border border-white/5 bg-navyLight;
  }

  .timeline-line {
    background: linear-gradient(
      to bottom,
      #c8a04a 0%,
      rgba(200, 160, 74, 0.3) 70%,
      transparent 100%
    );
  }
}
```

- [ ] **Step 3: Write postcss.config.mjs**

Replace entirely (this is the standard Next.js postcss config):

```js
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
```

- [ ] **Step 4: Verify Tailwind tokens compile**

```bash
npm run dev
```

Kill after the "Ready" line — just confirming no config errors. Expected: no CSS errors in terminal output.

---

## Task 4: Agent Permissions and next.config.mjs

**Files:**
- Modify: `.claude/settings.local.json`
- Create: `next.config.mjs`

- [ ] **Step 1: Update agent permissions**

Replace `.claude/settings.local.json` entirely:

```json
{
  "permissions": {
    "allow": [
      "Skill(superpowers:brainstorming)",
      "WebFetch",
      "WebSearch",
      "Bash(curl *)"
    ]
  }
}
```

- [ ] **Step 2: Write next.config.mjs**

Replace the default file entirely:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'robertsspaceindustries.com' },
      { protocol: 'https', hostname: 'media.robertsspaceindustries.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
    ],
  },
}

export default nextConfig
```

---

## Task 5: Site Constants and Data Type Stubs

**Files:**
- Create: `src/data/site.ts`
- Create: `src/data/release.ts`
- Create: `src/data/news.ts`
- Create: `src/data/videos.ts`
- Create: `src/data/faq.ts`

- [ ] **Step 1: Create src/data/site.ts**

```ts
export const SITE = {
  name: 'I Held the Line',
  tagline: 'Tracking Squadron 42 — the single-player campaign from Cloud Imperium Games',
  url: 'https://iheldtheline.com',
  description:
    'The unofficial Squadron 42 fan site. Development news, official trailers, a complete FAQ, and a 2026 release-window tracker. Tracking CIG\'s single-player campaign since the Battle of Vega II.',
  author: 'Doc_Flanigan',
  keywords: [
    'Squadron 42',
    'Squadron 42 release date',
    'Squadron 42 2026',
    'Squadron 42 news',
    'Squadron 42 trailers',
    'Squadron 42 vs Star Citizen',
    'when does Squadron 42 come out',
    'Squadron 42 gameplay',
    'Squadron 42 cast',
    'Mark Hamill Squadron 42',
    'Gary Oldman Squadron 42',
    'Gillian Anderson Squadron 42',
    'Henry Cavill Squadron 42',
    'Andy Serkis Squadron 42',
    'Cloud Imperium Games single player',
    'CIG Squadron 42',
  ],
}
```

- [ ] **Step 2: Create src/data/release.ts**

```ts
export const RELEASE = {
  year: 2026,
  windowStart: '2026-01-01',
  windowEnd: '2026-12-31',
  disclaimer:
    'No specific release date has been announced by CIG. 2026 is their stated target window.',
  lastVerified: '2026-05-16',
}
```

- [ ] **Step 3: Create src/data/news.ts**

```ts
export type NewsEntry = {
  date: string        // ISO 8601, e.g. '2025-05-01'
  headline: string
  summary: string     // 2-3 sentences, plain English
  sourceLabel: string // e.g. 'RSI Comm-Link'
  sourceUrl: string
}

export const NEWS: NewsEntry[] = []
```

- [ ] **Step 4: Create src/data/videos.ts**

```ts
export type VideoEntry = {
  date: string
  title: string
  description: string  // one line
  thumbnailUrl: string // relative public path or remote URL (must match next.config remotePatterns)
  sourceUrl: string    // YouTube or RSI canonical URL
  duration?: string    // ISO 8601, e.g. 'PT12M30S'
}

export const VIDEOS: VideoEntry[] = []
```

- [ ] **Step 5: Create src/data/faq.ts**

```ts
export type FaqItem = {
  question: string
  answer: string      // plain English, fact-checked
  sourceUrl?: string
}

export const FAQ: FaqItem[] = []
```

- [ ] **Step 6: Verify TypeScript sees no errors**

```bash
npx tsc --noEmit
```

Expected: no output (zero errors). If errors, fix the type definitions before continuing.

---

## Task 6: NavBar Component

**Files:**
- Create: `src/components/NavBar.tsx`

- [ ] **Step 1: Create src/components/NavBar.tsx**

```tsx
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/videos', label: 'Videos' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navyLight border-b-2 border-gold">
      <nav className="container-wide flex items-center justify-between h-14" aria-label="Main navigation">
        <Link
          href="/"
          className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase hover:text-goldDark transition-colors"
        >
          I Held the Line
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-starwhite/80 hover:text-gold text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-starwhite hover:text-gold transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <ul
          className="md:hidden bg-navyLight border-t border-gold/20 px-4 py-3 flex flex-col gap-1"
          role="list"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 text-starwhite/80 hover:text-gold text-sm font-medium transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 7: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create src/components/Footer.tsx**

```tsx
import { SITE } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navyLight border-t border-gold/20 mt-20">
      <div className="container-wide py-12">
        <div className="mb-6">
          <p className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase mb-1">
            I Held the Line
          </p>
          <p className="text-muted text-xs">{SITE.tagline}</p>
        </div>

        <div className="border-t border-gold/10 pt-6 space-y-2">
          <p className="text-muted text-xs leading-relaxed">
            iheldtheline.com is an unofficial fan site. It is not affiliated with, endorsed by, or
            connected to Cloud Imperium Games, Roberts Space Industries, or the Star Citizen
            franchise.
          </p>
          <p className="text-muted text-xs leading-relaxed">
            Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC. All game
            assets © Cloud Imperium Rights LLC.
          </p>
          <p className="text-muted text-xs">
            © {year} iheldtheline.com — created by {SITE.author}
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 8: ReleaseWindow Component

**Files:**
- Create: `src/components/ReleaseWindow.tsx`

This is a client component. It calculates how far through the 2026 window we are and animates a gold progress bar. The day count is set client-side only (in `useEffect`) to avoid SSR hydration mismatch.

- [ ] **Step 1: Create src/components/ReleaseWindow.tsx**

```tsx
'use client'
import { useEffect, useState } from 'react'
import { RELEASE } from '@/data/release'

function getDaysRemaining(): number {
  const now = new Date()
  const end = new Date(RELEASE.windowEnd + 'T23:59:59')
  const diff = end.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

function getProgressPercent(): number {
  const now = new Date()
  const start = new Date(RELEASE.windowStart)
  const end = new Date(RELEASE.windowEnd + 'T23:59:59')
  const total = end.getTime() - start.getTime()
  const elapsed = now.getTime() - start.getTime()
  return Math.min(100, Math.max(0, (elapsed / total) * 100))
}

export default function ReleaseWindow() {
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setDaysRemaining(getDaysRemaining())
    // Small delay lets the CSS transition animate on mount
    const id = setTimeout(() => setProgress(getProgressPercent()), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-20 text-center"
      aria-label="Squadron 42 release window"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
        Squadron 42
      </p>

      <h1 className="heading-display text-5xl sm:text-7xl mb-4 leading-tight">
        I Held the Line
      </h1>

      <p className="text-muted text-base sm:text-lg max-w-xl mb-12">
        {SITE_TAGLINE}
      </p>

      {/* Progress bar panel */}
      <div className="w-full max-w-lg bg-navyLight border border-gold/30 rounded-xl p-6 shadow-[0_0_40px_rgba(200,160,74,0.06)]">
        <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-5">
          {RELEASE.year} Release Window
        </p>

        <div className="flex justify-between text-xs text-muted mb-2">
          <span>Jan {RELEASE.year}</span>
          <span>
            {daysRemaining !== null
              ? `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} remaining`
              : `${RELEASE.year} window`}
          </span>
          <span>Dec {RELEASE.year}</span>
        </div>

        <div
          className="bg-navy rounded-full h-3 overflow-hidden border border-gold/20"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${Math.round(progress)}% through CIG's ${RELEASE.year} release window`}
        >
          <div
            className="h-full bg-gradient-to-r from-gold to-goldDark rounded-full transition-[width] duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-muted text-xs mt-4 leading-relaxed">{RELEASE.disclaimer}</p>
      </div>
    </section>
  )
}

// Defined here to avoid importing SITE in a client component (keeps bundle small)
const SITE_TAGLINE = 'Tracking Squadron 42 — the single-player campaign from Cloud Imperium Games'
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 9: Root Layout

**Files:**
- Modify: `src/app/layout.tsx` (replace default)

- [ ] **Step 1: Write src/app/layout.tsx**

Replace the default file entirely:

```tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { SITE } from '@/data/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
  weight: ['500', '600', '700', '800'],
})

export const viewport: Viewport = {
  themeColor: '#0a1a3a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Squadron 42 Release Date & News 2026 — I Held the Line',
    template: '%s | iheldtheline.com',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  publisher: SITE.author,
  keywords: SITE.keywords,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/images/brand/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    url: SITE.url,
    title: 'Squadron 42 Release Date & News 2026 — I Held the Line',
    description: SITE.description,
    images: [
      {
        url: '/images/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'I Held the Line — tracking Squadron 42 development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squadron 42 Release Date & News 2026 — I Held the Line',
    description: SITE.description,
    images: ['/images/brand/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'gaming',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    founder: { '@type': 'Person', name: SITE.author },
    description: SITE.description,
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${orbitron.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-navy text-starwhite antialiased">
        <NavBar />
        {children}
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 10: Home Page

**Files:**
- Modify: `src/app/page.tsx` (replace default)

- [ ] **Step 1: Write src/app/page.tsx**

Replace the default file entirely:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import ReleaseWindow from '@/components/ReleaseWindow'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: {
    absolute: 'Squadron 42 Release Date & News 2026 — I Held the Line',
  },
  description:
    'Track Squadron 42\'s 2026 release window — live development news, official trailers, a complete cast FAQ, and a day-count for CIG\'s target year. The unofficial fan site.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Squadron 42 Release Date & News 2026 — I Held the Line',
    description:
      'Unofficial fan site tracking Squadron 42 development. News, trailers, FAQ, and 2026 release window tracker.',
    url: '/',
  },
}

const SECTION_CARDS = [
  {
    href: '/news',
    label: 'Development News',
    description:
      'The latest Squadron 42 updates from official CIG sources — monthly reports, CitizenCon reveals, milestone announcements, newest first.',
    cta: 'Read the timeline →',
  },
  {
    href: '/videos',
    label: 'Official Videos',
    description:
      'Every official Squadron 42 video from Cloud Imperium Games — trailers, gameplay reveals, CitizenCon presentations, and cinematic clips.',
    cta: 'Watch the videos →',
  },
  {
    href: '/faq',
    label: 'FAQ',
    description:
      'What is Squadron 42? Who\'s in the cast? When does it release? Is it included with Star Citizen? Answers from official CIG communications only.',
    cta: 'Read the FAQ →',
  },
]

export default function Home() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        {/* Hero */}
        <div className="relative bg-navy bg-[url('/images/hero/hero-01.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy pointer-events-none" />
          <div className="relative container-wide">
            <ReleaseWindow />
          </div>
        </div>

        {/* What is Squadron 42 */}
        <section className="border-t border-white/5 py-20 sm:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                What is it?
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl mb-6">
                Squadron 42 — the single-player campaign
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  Squadron 42 is a single-player, story-driven space game set in the same universe
                  as Star Citizen. Developed by Cloud Imperium Games, it follows a new UEE Navy
                  recruit through a cinematic military campaign — think Wing Commander for a new
                  generation.
                </p>
                <p>
                  The game features a star-studded cast including{' '}
                  <strong className="text-starwhite">Mark Hamill</strong>,{' '}
                  <strong className="text-starwhite">Gary Oldman</strong>,{' '}
                  <strong className="text-starwhite">Gillian Anderson</strong>,{' '}
                  <strong className="text-starwhite">Henry Cavill</strong>, and{' '}
                  <strong className="text-starwhite">Andy Serkis</strong>, with full
                  motion-capture performances throughout.
                </p>
                <p>
                  Unlike Star Citizen's persistent multiplayer universe, Squadron 42 is a
                  standalone, offline-capable campaign. CIG has confirmed a 2026 release target —
                  no specific date has been announced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section cards */}
        <section className="border-t border-white/5 bg-navyLight py-20 sm:py-28">
          <div className="container-wide">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Explore
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl mb-12">
              Everything on the site
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {SECTION_CARDS.map(({ href, label, description, cta }) => (
                <article
                  key={href}
                  className="card-surface p-7 hover:border-gold/30 transition-colors"
                >
                  <h3 className="heading-display text-lg mb-3">{label}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>
                  <Link
                    href={href}
                    className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
                  >
                    {cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 11: TimelineEntry Component and News Page

**Files:**
- Create: `src/components/TimelineEntry.tsx`
- Create: `src/app/news/page.tsx`

- [ ] **Step 1: Create src/components/TimelineEntry.tsx**

```tsx
import type { NewsEntry } from '@/data/news'

export default function TimelineEntry({ entry }: { entry: NewsEntry }) {
  const date = new Date(entry.date + 'T00:00:00')
  const label = date
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase()

  return (
    <div className="relative pl-8 pb-10 last:pb-0 animate-fade-in">
      {/* Gold dot */}
      <div
        className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(200,160,74,0.5)]"
        aria-hidden
      />
      <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1">
        {label}
      </p>
      <h3 className="text-starwhite font-bold text-base leading-snug mb-2">
        {entry.headline}
      </h3>
      <p className="text-muted text-sm leading-relaxed mb-2">{entry.summary}</p>
      <a
        href={entry.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold text-xs hover:text-goldDark transition-colors"
      >
        {entry.sourceLabel} →
      </a>
    </div>
  )
}
```

- [ ] **Step 2: Create src/app/news/page.tsx**

```tsx
import type { Metadata } from 'next'
import TimelineEntry from '@/components/TimelineEntry'
import { NEWS } from '@/data/news'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Development Timeline — Latest News',
  description:
    'Official Squadron 42 development updates covering the last 24 months. News sourced exclusively from Cloud Imperium Games communications, newest first.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'Squadron 42 Development Timeline — Latest News',
    description:
      'Official Squadron 42 development updates from CIG, newest first. Covering the last 24 months.',
    url: '/news',
  },
}

export default function NewsPage() {
  const sorted = [...NEWS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'News', item: `${SITE.url}/news` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Development Timeline
          </p>
          <h1 className="heading-display text-4xl sm:text-5xl mb-4">Squadron 42 News</h1>
          <p className="text-muted text-base">
            Official development updates from Cloud Imperium Games, newest first. Covering the
            last 24 months.
          </p>
        </header>

        {sorted.length === 0 ? (
          <p className="text-muted">No news entries yet — check back soon.</p>
        ) : (
          <div className="relative max-w-2xl">
            {/* Vertical connector line */}
            <div
              className="absolute left-[1px] top-2 bottom-0 w-px timeline-line"
              aria-hidden
            />
            <div>
              {sorted.map((entry, i) => (
                <TimelineEntry key={`${entry.date}-${i}`} entry={entry} />
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 12: VideoCard Component and Videos Page

**Files:**
- Create: `src/components/VideoCard.tsx`
- Create: `src/app/videos/page.tsx`

- [ ] **Step 1: Create src/components/VideoCard.tsx**

```tsx
import Image from 'next/image'
import type { VideoEntry } from '@/data/videos'

export default function VideoCard({ video }: { video: VideoEntry }) {
  const date = new Date(video.date + 'T00:00:00')
  const label = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const videoObjectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    url: video.sourceUrl,
    uploadDate: video.date,
    ...(video.duration ? { duration: video.duration } : {}),
  }

  return (
    <article className="card-surface overflow-hidden hover:border-gold/30 transition-colors group">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectJsonLd) }}
      />
      <a
        href={video.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Watch ${video.title} on official CIG channel`}
      >
        <div className="relative aspect-video bg-navy">
          {video.thumbnailUrl ? (
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover group-hover:opacity-75 transition-opacity"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted text-xs">No thumbnail available</span>
            </div>
          )}
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-navy ml-0.5"
                aria-hidden
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-muted text-xs mb-1">{label}</p>
          <h3 className="text-starwhite font-bold text-sm leading-snug mb-1 group-hover:text-gold transition-colors">
            {video.title}
          </h3>
          <p className="text-muted text-xs leading-relaxed">{video.description}</p>
        </div>
      </a>
    </article>
  )
}
```

- [ ] **Step 2: Create src/app/videos/page.tsx**

```tsx
import type { Metadata } from 'next'
import VideoCard from '@/components/VideoCard'
import { VIDEOS } from '@/data/videos'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Official Squadron 42 Videos & Trailers',
  description:
    'All official Squadron 42 videos from Cloud Imperium Games — CitizenCon presentations, trailers, gameplay reveals, and cinematic clips. Updated from official CIG sources.',
  alternates: { canonical: '/videos' },
  openGraph: {
    title: 'Official Squadron 42 Videos & Trailers',
    description:
      'Every official Squadron 42 video from CIG — trailers, gameplay reveals, CitizenCon presentations.',
    url: '/videos',
  },
}

export default function VideosPage() {
  const sorted = [...VIDEOS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE.url}/videos` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Official Videos
          </p>
          <h1 className="heading-display text-4xl sm:text-5xl mb-4">
            Squadron 42 Videos & Trailers
          </h1>
          <p className="text-muted text-base">
            Every official video from Cloud Imperium Games — trailers, gameplay reveals,
            CitizenCon presentations, and cinematic clips. Clicking opens the official source.
          </p>
        </header>

        {sorted.length === 0 ? (
          <p className="text-muted">No videos yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((video, i) => (
              <VideoCard key={`${video.date}-${i}`} video={video} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 13: FaqItem Component and FAQ Page

**Files:**
- Create: `src/components/FaqItem.tsx`
- Create: `src/app/faq/page.tsx`

- [ ] **Step 1: Create src/components/FaqItem.tsx**

```tsx
import type { FaqItem as FaqItemType } from '@/data/faq'

export default function FaqItem({ item }: { item: FaqItemType }) {
  return (
    <details className="group card-surface hover:border-gold/20 transition-colors">
      <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
        <span className="font-semibold text-starwhite text-sm leading-snug">{item.question}</span>
        <span
          className="text-gold text-xl leading-none shrink-0 group-open:rotate-45 transition-transform duration-200 mt-0.5"
          aria-hidden
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 pt-0">
        <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
        {item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-gold text-xs hover:text-goldDark transition-colors"
          >
            Source →
          </a>
        )}
      </div>
    </details>
  )
}
```

- [ ] **Step 2: Create src/app/faq/page.tsx**

```tsx
import type { Metadata } from 'next'
import FaqItem from '@/components/FaqItem'
import { FAQ } from '@/data/faq'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
  description:
    'Answers to the most common Squadron 42 questions — release date, cast (Mark Hamill, Gary Oldman, Gillian Anderson), differences from Star Citizen, system requirements, and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
    description:
      'Common Squadron 42 questions answered from official CIG sources — release date, cast, system requirements, Star Citizen differences.',
    url: '/faq',
  },
}

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">FAQ</p>
          <h1 className="heading-display text-4xl sm:text-5xl mb-4">
            Squadron 42 — Common Questions
          </h1>
          <p className="text-muted text-base">
            Answers verified against official Cloud Imperium Games sources only.
          </p>
        </header>

        {FAQ.length === 0 ? (
          <p className="text-muted">FAQ coming soon.</p>
        ) : (
          <div className="max-w-3xl space-y-3">
            {FAQ.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 14: About Page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Create src/app/about/page.tsx**

```tsx
import type { Metadata } from 'next'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About iheldtheline.com — an unofficial Squadron 42 fan site created by Doc_Flanigan. Fan-site disclaimer, trademark notice, and contact information.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <header className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            About
          </p>
          <h1 className="heading-display text-4xl sm:text-5xl mb-4">About This Site</h1>
        </header>

        <div className="max-w-2xl space-y-6 text-muted text-base leading-relaxed">
          <p>
            <strong className="text-starwhite">iheldtheline.com</strong> is an unofficial fan
            site dedicated to tracking Squadron 42 — the single-player campaign from Cloud
            Imperium Games. The name references the Battle of Vega II, the in-fiction event that
            opens the Squadron 42 storyline.
          </p>
          <p>
            This site is run by <strong className="text-starwhite">{SITE.author}</strong>, a
            long-time Star Citizen backer. The goal is to give Squadron 42 followers — veterans
            and newcomers alike — a single honest place to track development without hype,
            speculation, or gatekeeping.
          </p>
          <p>
            All factual content (news, videos, FAQ answers) is sourced exclusively from official
            Cloud Imperium Games and Roberts Space Industries communications. Nothing is invented
            or extrapolated from community rumour.
          </p>

          <div className="border-t border-gold/10 pt-6 space-y-4">
            <h2 className="heading-display text-xl">Disclaimer</h2>
            <p>
              iheldtheline.com is an unofficial fan site. It is not affiliated with, endorsed by,
              or connected to Cloud Imperium Games, Roberts Space Industries, or the Star Citizen
              franchise in any way.
            </p>
            <p>
              Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC. All
              game assets, names, and likenesses are © Cloud Imperium Rights LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 15: Sitemap and Robots

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`

- [ ] **Step 1: Create src/app/sitemap.ts**

```ts
import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/videos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
```

- [ ] **Step 2: Create src/app/robots.ts**

```ts
import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
```

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors.

---

## Task 16: Placeholder Brand Assets and README

**Files:**
- Create: `public/images/brand/favicon.svg`
- Create: `public/images/hero/.gitkeep`
- Create: `README.md`

- [ ] **Step 1: Create public/images/brand/favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#0a1a3a"/>
  <text x="3" y="24" font-size="22" font-family="Georgia,serif" font-weight="bold" fill="#c8a04a">42</text>
</svg>
```

**Note:** Flag for replacement — this is a placeholder. A proper favicon + OG image (1200×630 PNG) should be added to `public/images/brand/` before launch. The OG image path referenced in layout.tsx is `/images/brand/og-image.png` — create a placeholder PNG or the build will not fail (it's just an image reference), but Google/social previews will be broken.

- [ ] **Step 2: Create public/images/hero/.gitkeep**

Create an empty file at `public/images/hero/.gitkeep`. Hero images go in this directory as `hero-01.jpg`, etc. The home page references `/images/hero/hero-01.jpg` via a Tailwind `bg-[url()]` — if the file doesn't exist, the navy gradient fallback kicks in automatically.

- [ ] **Step 3: Create README.md**

```markdown
# iheldtheline.com

Unofficial Squadron 42 fan site — tracking the single-player campaign from Cloud Imperium Games.

**Domain:** iheldtheline.com
**Stack:** Next.js 14, TypeScript, Tailwind CSS, Vercel

## Development

```bash
npm install
npm run dev
```

## Content Updates

Content (news, videos, FAQ) lives in `src/data/`. To update:

1. Run the `sc-news` agent to refresh `src/data/news.ts` and `src/data/videos.ts`
2. Run the `sc-fact-check` agent to refresh `src/data/faq.ts`
3. `npm run build` to verify
4. `git commit && git push` — Vercel auto-deploys

## Assets Needed Before Launch

- [ ] Hero background images → `public/images/hero/hero-01.jpg` (etc.)
- [ ] OG image (1200×630) → `public/images/brand/og-image.png`
- [ ] Real favicon → replace `public/images/brand/favicon.svg`
- [ ] DNS: point `iheldtheline.com` to Vercel

## Disclaimer

Unofficial fan site. Not affiliated with Cloud Imperium Games or Roberts Space Industries.
Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC.
```

---

## Task 17: Verify Full Build with Stubs

**Files:** None created — verification only.

This task confirms the entire scaffold builds cleanly before the agent content pass.

- [ ] **Step 1: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero errors. Fix any type mismatches before continuing.

- [ ] **Step 2: Run ESLint**

```bash
npm run lint
```

Expected: no errors (warnings about unused `framer-motion` import are acceptable if present — it's in package.json but not yet used). If errors appear, fix them.

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected output contains:
```
Route (app)                Size   First Load JS
┌ ○ /                      ...
├ ○ /about                 ...
├ ○ /faq                   ...
├ ○ /news                  ...
└ ○ /videos                ...
```

All routes should be static (○). Zero build errors. If there are errors, fix before proceeding to Task 18.

---

## Task 18: Initial Commit and Push to GitHub

**Files:** All files created so far.

- [ ] **Step 1: Add all files**

```bash
git add src public next.config.mjs tailwind.config.ts postcss.config.mjs tsconfig.json .gitignore README.md package.json package-lock.json .claude/settings.local.json docs
```

- [ ] **Step 2: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: initial scaffold — Next.js 14, navy/gold design, 5-page structure

- Next.js 14 App Router + TypeScript
- Tailwind config with navy/gold/starwhite tokens
- NavBar (sticky, solid navy, gold border), Footer (disclaimers)
- ReleaseWindow: 2026 progress bar hero (no fake date)
- TimelineEntry, VideoCard, FaqItem components
- Pages: Home, News, Videos, FAQ, About, sitemap, robots
- Data stubs: site.ts, release.ts, news.ts, videos.ts, faq.ts
- Agent permissions pre-approved in settings.local.json
- Full JSON-LD: Organization, WebSite, BreadcrumbList, FAQPage, VideoObject
- Production build passes with empty data arrays

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Push**

```bash
git push -u origin main
```

Expected: branch pushed, GitHub URL confirmed. Verify at `https://github.com/<user>/iheldtheline-site`.

---

## Task 19: Run sc-news Agent — Populate news.ts and videos.ts

**Files:**
- Modify: `src/data/news.ts` (agent fills `NEWS` array)
- Modify: `src/data/videos.ts` (agent fills `VIDEOS` array)

- [ ] **Step 1: Invoke sc-news agent**

Use the Agent tool with `subagent_type: "sc-news"` and this prompt:

> You are populating content for iheldtheline.com, an unofficial Squadron 42 fan site. Your task has two parts:
>
> **Part 1 — News Timeline (`src/data/news.ts`)**
> Find all official Squadron 42 development news and updates from the last 24 months (May 2024 – May 2026). Sources: Star Citizen Wiki Comm-Link API, Developer Tracker RSS, official CIG YouTube. Each entry must have: date (ISO 8601), headline, summary (2-3 sentences, plain English, no Star Citizen jargon — explain everything as if the reader has never heard of the game), sourceLabel, sourceUrl.
>
> **Part 2 — Official Videos (`src/data/videos.ts`)**
> Find ALL official Squadron 42 videos ever published by Cloud Imperium Games / Roberts Space Industries. Include: CitizenCon presentations, trailers, gameplay reveals, "Save Yourselves" cinematic, and any other official CIG videos focused on Squadron 42. Each entry must have: date, title, description (one plain-English line), thumbnailUrl (YouTube thumbnail URL: `https://img.youtube.com/vi/<VIDEO_ID>/maxresdefault.jpg`), sourceUrl (YouTube or RSI URL), duration (ISO 8601 if known).
>
> Return the complete TypeScript file contents for both `src/data/news.ts` and `src/data/videos.ts`, ready to write to disk. Use only official CIG/RSI sources. Do not invent or estimate any entry.

- [ ] **Step 2: Write agent output to files**

Write the TypeScript content returned by the agent to:
- `src/data/news.ts`
- `src/data/videos.ts`

- [ ] **Step 3: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no type errors. If the agent returned malformed data, fix the array entries to match the `NewsEntry` and `VideoEntry` types defined in Task 5.

---

## Task 20: Run sc-fact-check Agent — Populate faq.ts and Verify release.ts

**Files:**
- Modify: `src/data/faq.ts` (agent fills `FAQ` array)
- Verify: `src/data/release.ts` (confirm or update if agents found new info)

- [ ] **Step 1: Invoke sc-fact-check agent**

Use the Agent tool with `subagent_type: "sc-fact-check"` and this prompt:

> You are populating the FAQ for iheldtheline.com, an unofficial Squadron 42 fan site. Verify each of the following claims/questions against official CIG/RSI sources only, then write a plain-English answer for each. If a claim cannot be confirmed from official sources, note it as unconfirmed and do not include it in the FAQ.
>
> **Questions to research and answer:**
> 1. What is Squadron 42?
> 2. How is Squadron 42 different from Star Citizen?
> 3. When does Squadron 42 release? (Verify: has CIG confirmed any date beyond "2026"?)
> 4. Who is in the cast? (List every actor officially confirmed by CIG — include Mark Hamill, Gary Oldman, Gillian Anderson, Henry Cavill, Andy Serkis and any others)
> 5. Is Squadron 42 included with a Star Citizen game package?
> 6. What are the system requirements for Squadron 42?
> 7. Will Squadron 42 be on Steam or consoles?
> 8. Is Squadron 42 multiplayer?
> 9. How long is the Squadron 42 campaign?
> 10. What is the story/setting of Squadron 42?
>
> Return the complete TypeScript file content for `src/data/faq.ts` with all verified answers as `FaqItem[]`. Include `sourceUrl` wherever you can cite an official URL. Also confirm: has CIG announced any release date more specific than "2026"? If yes, report the date and source URL so `src/data/release.ts` can be updated.

- [ ] **Step 2: Write agent output to faq.ts**

Write the TypeScript content returned by the agent to `src/data/faq.ts`.

- [ ] **Step 3: Update release.ts if agent found a more specific date**

If the agent confirmed a specific date (not just "2026"), update `src/data/release.ts`:

```ts
export const RELEASE = {
  year: 2026,
  windowStart: '2026-01-01',
  windowEnd: '<confirmed-date>',  // e.g. '2026-06-30' if a quarter was confirmed
  disclaimer: '<updated disclaimer matching what CIG actually said>',
  lastVerified: '2026-05-16',
}
```

If the agent confirmed only "2026" (no specific date), leave `release.ts` unchanged.

- [ ] **Step 4: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors. Fix any type mismatches in faq.ts entries.

---

## Task 21: Final Build Verification

**Files:** None created — verification only.

- [ ] **Step 1: Run full TypeScript check**

```bash
npx tsc --noEmit
```

Expected: zero errors.

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: zero errors. Fix any lint issues before the production build.

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: all 5 routes build as static (○), zero errors. Note the route sizes — if any route is unexpectedly large (>100 kB first load JS), investigate before deploying.

- [ ] **Step 4: Spot-check dev server**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- Home page shows the 2026 progress bar hero (not a blank page)
- NavBar is visible with navy background and gold border
- News page shows timeline entries (or the "check back soon" placeholder if NEWS is empty)
- Videos page shows video cards (or placeholder)
- FAQ page shows accordion items (or placeholder)
- About page renders disclaimer text
- No console errors in browser devtools

Kill dev server with Ctrl+C.

---

## Task 22: Deploy to Vercel

- [ ] **Step 1: Deploy via Vercel MCP or CLI**

Try the Vercel MCP connector first:

```
Use the Vercel MCP to create a new project named "iheldtheline-site" linked to the GitHub repo at https://github.com/<user>/iheldtheline-site. Set the framework to Next.js. Deploy to production.
```

If the MCP is unavailable, use the Vercel CLI:

```bash
npx vercel --prod
```

Follow prompts: confirm project name `iheldtheline-site`, link to GitHub repo, framework `Next.js`. If CLI is not authenticated, run `npx vercel login` first.

If neither works programmatically, output these exact steps for the user:
1. Go to vercel.com/new
2. Import the `iheldtheline-site` GitHub repo
3. Framework: Next.js (auto-detected)
4. No environment variables needed
5. Deploy

- [ ] **Step 2: Note the deployment URL**

Expected: `https://iheldtheline-site.vercel.app` or similar. Record this URL.

- [ ] **Step 3: Verify the live deployment**

Open the Vercel deployment URL and confirm:
- Home page loads (2026 progress bar visible)
- `/news`, `/videos`, `/faq`, `/about` all respond (no 404)
- `/sitemap.xml` returns a valid XML sitemap
- `/robots.txt` returns correct robots rules

---

## Task 23: Final Commit and Push

- [ ] **Step 1: Stage content files**

```bash
git add src/data/news.ts src/data/videos.ts src/data/faq.ts src/data/release.ts
```

- [ ] **Step 2: Commit**

```bash
git commit -m "$(cat <<'EOF'
feat: add agent-sourced content — news, videos, FAQ

- Populate NEWS[] from sc-news agent (last 24 months of SQ42 updates)
- Populate VIDEOS[] from sc-news agent (all official CIG SQ42 videos)
- Populate FAQ[] from sc-fact-check agent (10 verified Q&A pairs)
- Verify release window: 2026 confirmed, no specific date announced

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Push**

```bash
git push
```

Expected: Vercel auto-deploy triggered. Confirm in Vercel dashboard.

---

## Handoff Summary

After Task 23, report to the user:

**Local path:** `E:\Claude Code\sc-portfolio\iheldtheline-site`

**GitHub:** `https://github.com/<user>/iheldtheline-site`

**Vercel:** `https://iheldtheline-site.vercel.app` (or the actual deployment URL)

**Manual steps remaining:**
- [ ] Add real hero background images to `public/images/hero/` (e.g. `hero-01.jpg`)
- [ ] Replace `public/images/brand/og-image.png` with a real 1200×630 PNG
- [ ] Replace `public/images/brand/favicon.svg` with a real favicon
- [ ] Point `iheldtheline.com` DNS to Vercel (add domain in Vercel dashboard → Settings → Domains)
- [ ] Review all agent-sourced content for accuracy before going fully live
- [ ] Add RSI Fankit "made by community" badge to footer if desired
