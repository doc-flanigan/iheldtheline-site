# GEO / SEO Pass — reusable Claude Code prompt

A portable prompt for running an SEO + GEO (generative-engine optimization) pass
on any site in the portfolio. It maximizes correct search indexing **and**
citation by AI answer engines (ChatGPT, Copilot, Perplexity, Google AI
Overviews, Claude).

It is intentionally generic: it discovers each site's stack and obeys that
site's own `CLAUDE.md` posture (hub vs. satellite/sunset) instead of hardcoding
any one site's rules.

## How to run it

1. Open a Claude Code session **in the target site's repo** (web, desktop, or
   `cd <repo> && claude`).
2. Paste the prompt below, replacing `<DOMAIN>` with the site (e.g.
   `DayOneCitizen.com`).
3. Review the audit + changes it reports. It works on a feature branch and will
   **ask before merging to main / deploying to production**.

> Hub note: on DayOneCitizen.com (the authority destination), make sure its
> `CLAUDE.md` says "optimize aggressively" — otherwise the prompt will stay
> conservative as if it were a sunsetting satellite.

---

## The prompt

```text
You are doing an SEO + GEO (generative-engine optimization) pass on <DOMAIN>.
The goal is to maximize correct indexing by search engines AND citation by AI
answer engines (ChatGPT, Copilot, Perplexity, Google AI Overviews, Claude).

Work methodically. Do NOT guess — verify against the real code and the live site.

## Step 0 — Orient before changing anything
1. Read CLAUDE.md (and any docs/seo/* files). Treat its SEO posture as binding:
   - Is this site a HUB (optimize aggressively, attract links) or a SATELLITE/
     sunsetting site (light optimization only, no new content/keywords)?
   - Note required cross-links, canonical domain, and any "do not" rules.
   - If the site's rules forbid something below, skip it and say so.
2. Detect the stack and how pages are produced: framework (Next.js app/pages
   router, Astro, etc.), where page metadata is set, and the single source of
   truth for content (e.g. a data/*.ts file, MDX, CMS). Find the route that
   renders detail pages and where <title>/<meta>/<h1>/JSON-LD come from.
3. Enumerate the indexable URLs (read sitemap.ts/sitemap.xml and route files).

## Step 1 — Audit each indexable page (build a table)
For every page, record: H1 present? title (and is it duplicated/truncated?),
meta description length, canonical correct?, which JSON-LD types are emitted,
and whether a visible FAQ/step list exists without matching schema.
Pull the RENDERED HTML for a few representative URLs (not just source) — crawler
"missing H1/short description" reports are often stale, so confirm the real
current state before "fixing" something that isn't broken.

## Step 2 — Fix checklist (apply what the site's rules allow)
- H1: exactly one per page, descriptive. If a tool reports it missing but the
  rendered HTML has it, say it's a stale crawl and move on.
- Title duplication: if a per-page metaTitle already ends with "| Brand" AND a
  layout title template adds "%s | Brand", you get a doubled suffix. Fix by
  emitting the per-page title as absolute (e.g. Next.js `title: { absolute }`),
  not by editing every string.
- Meta descriptions: 150–160 chars, unique, answer-led. Find pages silently
  falling back to a short shared default and give them real descriptions.
- Duplicate/alternate URLs (e.g. numeric-ID variants like /guides/10 vs a slug):
  301-redirect the non-canonical form to the slug URL and make metadata +
  canonical resolve to the slug.
- Structured data (JSON-LD), built generically in the detail route so every
  page benefits and future pages auto-inherit:
  • Article/TechArticle with headline, description, image, datePublished,
    dateModified, author (Person), publisher (Organization + logo),
    mainEntityOfPage.
  • BreadcrumbList (Home › Section › Page).
  • FAQPage ONLY where a visible on-page FAQ exists, and the schema text must
    mirror the visible Q&A verbatim (don't fabricate Q&As).
  • HowTo where there's a real numbered step sequence.
- /llms.txt: add a curated plain-text index (H1 site name, one-line summary
  blockquote, then sectioned links with one-line descriptions). Generate it
  from the content source (a static route handler or build step) so it stays in
  sync — don't hand-maintain it.
- robots.txt: ensure AI crawlers aren't blocked — GPTBot, OAI-SearchBot,
  ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Bingbot.
  Confirm the sitemap is referenced.

## Step 3 — Verify
- Run the production build; it must pass.
- Re-fetch a sample of built/live pages and confirm the new <title>, meta
  description, H1, and JSON-LD are present and valid (well-formed JSON, correct
  @type). Confirm /llms.txt renders.

## Step 4 — Ship (branch + deploy discipline)
- Make changes on a feature branch with clear, scoped commits (one logical
  change per commit). Push the branch.
- Production usually deploys only from the main branch. Do NOT merge to main or
  promote to production without explicit confirmation — tell me the branch is
  built as a preview and ask before going live. If asked to deploy, fast-forward
  merge to main and confirm the production deployment reaches READY.

## Guardrails
- Honor CLAUDE.md above all. On a sunsetting/satellite site, do structured-data
  + indexing fixes only — no new prose, no new keyword targeting.
- Never invent FAQ answers, stats, dates, or authorship. Author/publisher must
  match the site's real identity.
- Prefer generic fixes in shared routes/components over per-page edits.

## Deliver
A short report: the audit table, what you changed and why, build/verification
result, the branch name, and anything you intentionally skipped (and why).
```
