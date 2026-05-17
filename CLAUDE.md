# CLAUDE.md — iheldtheline.com

## Quick Reference
```
Domain:         iheldtheline.com
Referral codes: STAR-GCQJ-N6NC / STAR-RXW4-JPN3 / STAR-C2GJ-XSSS (rotating)
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
