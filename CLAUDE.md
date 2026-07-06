# CLAUDE.md — iheldtheline.com

## Quick Reference
```
Domain:         iheldtheline.com
Referral code:  STAR-GCQJ-N6NC (single — rotation discontinued 2026-06-28)
Enlist URL:     https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
Hub:            https://dayonecitizen.com
Conventions:    E:\Claude Code\sc-portfolio\SHARED_CONVENTIONS.md
```

## Click Tracking

Added 2026-05-17. Every referral CTA click fires a background POST to `/api/log` which writes a row to the shared Google Sheet and posts an embed to the #referral-clicks Discord channel.

**Env vars required** (Vercel project settings + `.env.local`):
- `CLICK_TRACKER_SHEET_URL` — Google Apps Script web app deploy URL
- `DISCORD_CLICK_WEBHOOK_URL` — Discord channel webhook URL

**Key files:**
- `src/app/api/log/route.ts` — server-side handler (parallel Sheet + Discord calls)
- `src/components/CTAButton.tsx` — `handleClick` fires the fetch on CTA click
- `src/lib/referral-rotator.ts` — referral URL builder (single code STAR-GCQJ-N6NC; rotation discontinued 2026-06-28, function/export names retained for back-compat)

> **Note:** Endpoint was renamed from `/api/track-click` → `/api/log` because adblocker filter lists (EasyPrivacy, uBlock Origin) blocked the original URL pattern client-side.

### Verified end-to-end 2026-07-06
Confirmed with organic traffic: the 2026-07-05 03:40:53 CST `NavBar CTA` click
produced both the Sheet row and the #cta-referral-clicks Discord embed
(timestamps match to the second), so DISCORD_CLICK_WEBHOOK_URL is set and the
full pipeline works. Adblocker-specific cases weren't separately tested — the
`/api/log` rename already addressed the known filter-list issue.

---

## SEO & GEO

**Network role:** Satellite / brand + authority lender. Authority flows to the hub.
**Hub:** https://dayonecitizen.com
**Search engines:** Google + AI answer engines.

**STATUS:** KEEP as a low-maintenance brand/community page — do NOT sunset/301
(decided 2026-06-29). On-page search intent is low/informational, so the primary
value here is brand/links/authority — but the referral CTA stays active for the
conversions that do come (see below). Traffic may spike as Star Citizen / Squadron 42 marketing ramps
up later in 2026 — keep the page fast, indexable, and citation-ready so it can
absorb that attention without ongoing upkeep.
**Primary intent:** community / lore around the "hold the line" moment — informational,
not buyer intent. Treat as an authority/brand asset that links toward the hub.

**Cross-links this site must send:**
- → dayonecitizen.com only (footer + "new to Star Citizen?"). Do NOT link to satellites.
- **Exception (added 2026-07-05):** → 42ndsquadron.com is allowed in body copy — it is the
  SQ42 sister site (lore depth; this site owns release tracking/marketing history). Current
  link: /vanduul → 42ndsquadron.com/vanduul. Same precedent as SCH's freeflyevent exception.
- Referral CTA stays ACTIVE and prominent — driving enlist referrals is the primary
  business purpose of every SC site, this one included, even though on-page intent is
  informational. Target: https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC
  (single code — see Quick Reference). Confirmed against `referral-rotator.ts` / `CTAButton.tsx` 2026-06-29.

**GEO / AI citation (structured-data + indexing only):**
- Article/Breadcrumb JSON-LD with real author/publisher and accurate dates.
- FAQPage/HowTo only if matching visible content exists — likely minimal here.
- /llms.txt from the content source; robots.txt open to AI crawlers; sitemap referenced.
- This page is most likely to be cited for *what "I held the line" means* — make that
  answer a crisp, extractable paragraph near the top.

**Do not:**
- Invent lore, dates, or quotes — community facts must be accurate to be cited.
- Cross-link to any satellite other than the hub.

**Full strategy:** `E:\Claude Code\sc-portfolio\docs\seo\README.md`

## Claims ledger (network-wide)

Fact-checked claims are tracked in the portfolio claims ledger: `E:\Claude Code\sc-portfolio\docs\claims\` — one md file per claim (canonical text, status, official sources, lastVerified, usage map). Before adding or rewording a factual claim on this site, grep the ledger; a `verified` entry is network canon. Any edit that adds, changes, or removes a factual claim must update the matching claim file's `usage` list (or create the file — see the ledger README.md).
