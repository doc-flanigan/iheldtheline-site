# Claude Code Build Prompt — iheldtheline.com

> Paste everything below the line into Claude Code as your initial prompt.
> It assumes the `sc-fact-check` and `sc-news` agents are already defined in your
> `.claude/agents/` directory (or globally). If they are not yet created, see the
> note at the very bottom of this file first.

---

## PROJECT BRIEF — Build iheldtheline.com (Squadron 42 fan site)

You are building a brand-new, unofficial Squadron 42 fan site from scratch. Nothing
exists yet — no local folder, no Git repository, no Vercel project. You will create
all three. Work autonomously and only stop to ask me when you genuinely need a
decision or a credential.

### 1. Identity & scope

- **Domain:** iheldtheline.com
- **Subject:** Squadron 42 — the single-player narrative campaign by Cloud Imperium
  Games (CIG) / Roberts Space Industries (RSI). The name "I Held the Line" is a
  reference to the in-fiction Battle of Vega II. Use that framing in the brand voice.
- **Status:** Unofficial fan site. Not affiliated with, endorsed by, or connected to
  Cloud Imperium Games, RSI, or the Star Citizen franchise.
- **Audience:** Squadron 42 followers — both long-time backers tracking development
  and newcomers who want to understand what the game is and when it ships.

### 2. Local setup, repo & deployment

Do this first, before writing site content:

1. Create a new local project folder named `iheldtheline` in my current working
   directory.
2. Initialize it as a Git repository.
3. Scaffold the project (see tech stack below), commit the scaffold as the first
   commit, then create a **new GitHub repository** named `iheldtheline` and push to it.
   - If the GitHub CLI (`gh`) is authenticated, create the repo with `gh repo create`.
   - If repo creation fails or `gh` is not authenticated, **stop and tell me** the
     exact command to run or what you need from me — do not silently skip this.
4. Create a **new Vercel project** linked to that GitHub repo so the site
   auto-deploys on push.
   - Use the Vercel MCP connector / `vercel` CLI as available.
   - If you cannot create the Vercel project programmatically, set up the project so
     it is deploy-ready and give me the exact steps to finish linking it in the
     Vercel dashboard.
5. Add a clean `.gitignore`, a `README.md` describing the project, and make sure the
   build succeeds locally (`npm run build`) before any push.

### 3. Tech stack

Match the architecture of dayonecitizen.com so the two sites stay consistent:

- **Next.js** (App Router) with **TypeScript**.
- Static-first — use static generation / SSG wherever possible for SEO and speed.
- **next/image** for all imagery.
- No CMS. Content lives in typed data files (TS/JSON/MDX) in the repo so it is
  versioned and easy for me to update later.
- Deployable to Vercel with zero extra configuration.
- Accessible (semantic HTML, proper heading order, alt text, keyboard nav, visible
  focus states, color-contrast AA minimum).

### 4. Visual design

Model the **layout, structure, and tone** on dayonecitizen.com — clean, modern,
spacious, "no jargon / no gatekeeping" feel, with a full-bleed hero, clear section
blocks, a sticky top nav, and a content-rich footer with disclaimers.

**Change the color palette to navy blue and gold:**

- Deep navy as the dominant background (something near `#0a1a3a` / `#0d1b3e`).
- Gold as the primary accent for headings, buttons, links, and the countdown
  (a warm metallic gold near `#c8a04a` / `#d4af37`).
- Light off-white for body text on navy; navy text on gold buttons.
- Define these as CSS custom properties / Tailwind theme tokens so the palette is
  changeable in one place.
- The aesthetic should feel like a military squadron briefing room — confident,
  cinematic, slightly austere. Avoid generic "AI gradient" looks.

Set an appropriate `theme-color` meta and build matching favicon/OG assets
(placeholders are fine if real art is unavailable — flag them for me).

### 5. Site structure & pages

Build these pages, all reachable from the top nav:

1. **Home** — Hero with the "I Held the Line" framing, a prominent **release
   countdown timer**, a short "What is Squadron 42?" intro block, and cards linking
   to the News, Videos, and FAQ sections.
2. **News / Development Timeline** — The most recent Squadron 42 information,
   **covering the last 24 months**, newest first. Each entry: date, headline, concise
   summary, and a source link. This content is **factual** and must come only from
   the `sc-news` agent (see section 6).
3. **Official Videos** — A page listing **all official Squadron 42 videos from CIG /
   RSI** (e.g. CitizenCon presentations, "Squadron 42 — Save Yourselves", monthly/
   feature trailers, official gameplay reveals). Embed or thumbnail-link each, with
   title, date, and a one-line description. Sourced via the `sc-news` /
   `sc-fact-check` agents only.
4. **FAQ** — Common Squadron 42 questions (What is it? How is it different from Star
   Citizen? When does it release? What's the cast? Is it included with a Star Citizen
   package? What are the system requirements? Will it be on Steam/consoles?, etc.).
   Factual answers must be verified through `sc-fact-check`. Mark FAQ up with
   FAQPage structured data.
5. **About** — What this site is, who runs it, and the full fan-site /
   trademark / affiliate disclaimers.

### 6. Content sourcing — STRICT RULES

There are two distinct content types. Handle them differently.

**A. Factual content (News timeline, Videos, FAQ answers, countdown date,
release-status claims):**

- Gather this **only** by invoking the `sc-fact-check` and `sc-news` sub-agents.
- Use **`sc-news`** to collect the Squadron 42 development news/timeline entries and
  the official video list.
- Use **`sc-fact-check`** to verify every factual claim before it goes on the site —
  especially the FAQ answers, the release window, and the countdown target.
- You may **only** use the sources defined inside those two agents. Do **not** pull
  facts from any other website, search result, your own training data, or general
  knowledge. If a fact cannot be confirmed through those agents, either omit it or
  label it clearly as unconfirmed — never invent or estimate.
- If the agents cannot establish a precise release date (the public target is a
  2026 window, not a fixed day), the countdown must handle that honestly: count down
  to the best confirmed target the agents return, and clearly label it as a
  **target window, subject to change** rather than a guaranteed date. Do not fake a
  precise date for the timer.

**B. Generated content (SEO copy, intros, section descriptions, FAQ question
phrasing, meta descriptions, supporting prose):**

- This content you may write yourself, generated from general queries about
  Squadron 42, to give the site depth and search authority.
- It must stay consistent with — and never contradict — the verified facts from the
  agents. Verified facts always win.

### 7. Countdown timer

- Place a live countdown on the Home page (and optionally a compact version in the
  header).
- It counts toward the release target confirmed by the agents.
- Build it as a client component that degrades gracefully (shows the target window
  text if JS is disabled).
- Include a short, honest caption noting the date is CIG's stated target and may
  change.

### 8. SEO — go for ranking authority on Google & Bing

Implement a thorough, white-hat SEO layer:

- Per-page unique `<title>` and meta description; Open Graph + Twitter card tags.
- Canonical URLs; correct `robots` directives.
- `sitemap.xml` and `robots.txt` (Next.js metadata routes).
- Structured data (JSON-LD): `WebSite`, `Organization`, `BreadcrumbList`,
  `FAQPage` on the FAQ, and `VideoObject` for each official video.
- Semantic HTML5 with a single, correct `<h1>` per page and logical heading order.
- Fast Core Web Vitals: optimized images, lazy loading below the fold, minimal
  client JS, good LCP/CLS.
- Descriptive, keyword-relevant URL slugs; internal linking between News, Videos,
  FAQ, and Home.
- Image `alt` text and descriptive file names.
- Accessibility (it overlaps with SEO and is required regardless).
- A keyword focus around: "Squadron 42", "Squadron 42 release date", "Squadron 42
  news", "Squadron 42 trailers", "Squadron 42 vs Star Citizen", "Squadron 42 2026" —
  used naturally, never stuffed.
- Add a short, original `meta` keywords/author block in the same spirit as
  dayonecitizen.com (author/publisher attribution).

### 9. Required footer / legal content

Every page footer must include:

- **Fan site disclaimer:** unofficial, not affiliated with or endorsed by Cloud
  Imperium Games, Roberts Space Industries, or the Star Citizen franchise.
- **Trademark notice:** Star Citizen™ and Squadron 42™ are trademarks of Cloud
  Imperium Rights LLC; all game assets © Cloud Imperium Rights LLC.
- Copyright line for iheldtheline.com and the current year.
- If you add any referral/affiliate links, include an affiliate-disclosure line.

### 10. Workflow & deliverables

- Build incrementally: scaffold → commit → push → then build out pages.
- Keep components modular and the content data files clearly separated from layout.
- Run the production build and fix all errors/warnings before final push.
- When done, give me: the local path, the GitHub repo URL, the Vercel project URL/
  deployment status, and a short list of anything left for me to do manually
  (credentials, real art assets, custom domain DNS for iheldtheline.com, etc.).

### Final reminders

- **Factual content for the News, Videos, FAQ, and countdown comes ONLY from the
  `sc-fact-check` and `sc-news` agents, and ONLY from the sources defined within
  them.** No other sources for facts.
- Generated SEO content is fine for prose and structure, but must never contradict
  verified facts.
- Be honest about the release date being a moving target.
- Ask me before doing anything you cannot reverse (creating accounts, spending,
  changing credentials).

---

## If the sc-fact-check / sc-news agents don't exist yet

This prompt assumes both sub-agents already exist and already define their own
approved source lists. If they do not, create them first (separate task) — each as
a Claude Code sub-agent with:

- A clear description so Claude Code knows when to delegate to it.
- An explicit, hard-coded list of approved Squadron 42 / CIG / RSI sources
  (e.g. official RSI/Star Citizen site, Comm-Links, official CIG YouTube channel,
  official newsletters). `sc-news` for gathering news/videos, `sc-fact-check` for
  verifying claims against those same sources.
- Instructions to refuse or flag any fact that cannot be traced to an approved
  source.

Then run the build prompt above.
