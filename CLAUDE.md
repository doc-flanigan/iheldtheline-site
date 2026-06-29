# CLAUDE.md — iheldtheline.com

## Quick Reference
```
Domain:         iheldtheline.com
Referral codes: STAR-GCQJ-N6NC / STAR-C2GJ-XSSS (rotating)
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
- `src/lib/referral-rotator.ts` — round-robin referral code selection

> **Note:** Endpoint was renamed from `/api/track-click` → `/api/log` because adblocker filter lists (EasyPrivacy, uBlock Origin) blocked the original URL pattern client-side.

### TODO: Verify end-to-end on this site
- [ ] Confirm DISCORD_CLICK_WEBHOOK_URL env var is saved in Vercel (was missing at end of 2026-05-17 session — user added it and deployment was triggered)
- [ ] Click CTA **with** adblocker enabled → Sheet row appears within 5s
- [ ] Click CTA **with** adblocker enabled → Discord embed appears in #referral-clicks
- [ ] Click CTA **without** adblocker → same as above

---

## SEO & GEO

**Network role:** Satellite / brand + authority lender. Authority flows to the hub.
**Hub:** https://dayonecitizen.com
**Search engines:** Google + AI answer engines.

**STATUS:** KEEP as a low-maintenance brand/community page — do NOT sunset/301
(decided 2026-06-29). Commercial intent is low; value is brand/links, not
conversions. But traffic may spike as Star Citizen / Squadron 42 marketing ramps
up later in 2026 — keep the page fast, indexable, and citation-ready so it can
absorb that attention without ongoing upkeep.
**Primary intent:** community / lore around the "hold the line" moment — informational,
not buyer intent. Treat as an authority/brand asset that links toward the hub.

**Cross-links this site must send:**
- → dayonecitizen.com only (footer + "new to Star Citizen?"). Do NOT link to satellites.
- Referral CTA is optional/secondary here given low buyer intent.   <!-- confirm code -->

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
