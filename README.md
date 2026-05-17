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
