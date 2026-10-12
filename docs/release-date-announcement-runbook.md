# Runbook: CIG announces the Squadron 42 release date

Prepared 2026-10-12, after the Manchester playtest (Oct 9–11). In the Aug 27, 2026
Letter from the Chairman CIG said a "specific release date" would come "shortly
afterwards". iheldtheline owns this story for the network. The goal is to have the
update live within hours of the announcement. The playtest page peaked on its first
day (59 Google clicks on Oct 9, then 10 and 5), so the first day of searches is
most of the opportunity.

## 0. Verify before touching anything (10 min)

- **Source must be official CIG:** a comm-link (usually a Letter from the Chairman),
  an RSI Spectrum staff post, or CIG's official channels. Third-party articles and
  creator videos are leads only.
- **If only the Steam page changed** (app 4045720), attribute the date to "the Steam
  page", never "CIG announced". The network already follows this rule for Steam.
- **Check what kind of date it is.** CIG has said the game is being "prepared for
  Beta", so the announcement could be a Beta, early-access, pre-order or launch
  date. Copy says exactly what CIG said.
- **Record:** exact quote, comm-link URL and id, and the date. Also note the platform
  scope and whether the date is global (CIG often gives a UK/US time).
- `git pull` in `docs/` before any ledger work. That's a standing rule: the source-watch
  autopilot commits there.

## 1. Data flip — homepage countdown (1 file, 2 min)

`src/data/release.ts`:

| Field | Set to |
|---|---|
| `date` | `'YYYY-MM-DD'` (launch day) |
| `dateLabel` | e.g. `'May 12, 2027'` |
| `dateNote` | One sourced sentence, e.g. `'CIG announced the May 12, 2027 release date in the <Month D, YYYY> Letter from the Chairman.'` |
| `announced` / `announcedLabel` | The announcement's date (the progress bar runs from here to `date`) |
| `lastVerified` | Today |
| `label`, `windowStart`/`windowEnd`, `disclaimer` | Change **only if** the date is outside Q2 2027 (Apr 1 – Jun 30) |

`ReleaseWindow` switches automatically to "Release Date: …", shows "N days until
launch", and shows "Out now" on the day. Tested 2026-10-12 with a dummy date.

## 2. Copy — iheldtheline (status lines that say "no date announced")

Find everything: `grep -rn -E "Q2 2027|no (specific|exact)? ?(release )?date|not announced|As of October" src public`

**Must change**

- `src/app/release-date/page.tsx`
  - metadata title, description and OG (top of file)
  - direct answer ("does not have an exact release date…")
  - "What We Know" bullets: current target, "specific release date is due", Steam bullet
  - FAQ: "When is…" / "Has CIG announced…" / "When will CIG announce…"
  - **add the announcement as the newest entry in `STATEMENTS`**, with the quote and comm-link URL
- `src/app/playtest-event/page.tsx`: the "Status" fact, the "What CIG said comes
  next" section, and the FAQ "When will CIG announce…". Turn these into "CIG
  announced the date on <day>" and link to /release-date.
- `src/app/steam/page.tsx`: OG description, FAQ (planned release), body lines on
  Steam's "Q2 2027" label. Re-check the Steam page first — it may still show the window.
- `src/app/page.tsx` and `src/app/layout.tsx`: site titles ("Release Date & Q2 2027
  Tracker" → "Release Date: <date>"), homepage description, release-date card blurb,
  in-page Q2 2027 line.
- `src/data/faq.ts`: the release-date FAQ answers.
- `src/components/sidebar/QuickFactsCard.tsx`: `Release window` → `Release date`.
- `src/components/Footer.tsx`: "Squadron 42 arrives Q2 2027".
- `src/data/site.ts`: site description ("Q2 2027 release-window tracker").
- `public/llms.txt`: playtest + release lines, and a new key fact.
- `src/data/news.ts`: new top entry (template below).

**Check and keep if still true** (most say "CIG is targeting Q2 2027"; replace with the date)

- `src/app/worth-buying/page.tsx`, `src/app/sq42-vs-star-citizen/page.tsx`,
  `src/app/cast/[slug]/page.tsx`, `src/app/i-held-the-line-trailer/page.tsx`

News entry template (`src/data/news.ts`, top of the array):

```ts
{
  slug: 'squadron-42-release-date-announced',
  metaTitle: 'Squadron 42 Release Date: <Mon D, YYYY>',
  date: '<announcement YYYY-MM-DD>',
  headline: 'Squadron 42 Release Date Announced: <Month D, YYYY>',
  summary: '<What CIG announced, exact quote, platform/scope, what it means for backers. One paragraph, sourced.>',
  sourceLabel: 'RSI Comm-Link — <title>',
  sourceUrl: '<comm-link URL>',
},
```

## 3. Claims ledger (`docs/claims/`)

- New claim, e.g. `sq42-release-date-<yyyy-mm-dd>.md`: verified, official source, usage list.
- `sq42-release-date-announcement-after-playtest.md`: mark the promise fulfilled; update notes and lastVerified.
- Any claim whose canonical text says "Q2 2027 window, no specific day" gets updated
  or scoped. Grep `docs/claims` for `Q2 2027`.
- Then run `npm run gen-sources` in this repo.

## 4. Rest of the network (separate PRs per repo; link to iheldtheline /release-date, don't restate details)

`grep -rln -E "Q2 2027|Quartal 2027" <repo>/src <repo>/public`. As of 2026-10-12 it hits:

- **dayonecitizen-main**: `day-one-citizen/is-star-citizen-on-steam`, the DE Steam
  page, `src/data/glossary.ts`, `src/data/claims.json`, `public/llms.txt`
- **freeflyevent-site**: `is-star-citizen-free`
- **bestspacesim-site**: `is-star-citizen-a-scam`
- **fundedgame-site**: homepage

## 5. Ship

1. `npx tsc --noEmit` and `npx next build` (not `npm run build`, whose postbuild pings IndexNow from local).
2. PR → merge → prod deploy (the deploy pings IndexNow).
3. Smoke-test prod. Homepage shows "Release Date: …" and the countdown;
   `/release-date` has the new title and statement; `/playtest-event` has the new status; `/llms.txt` updated.
4. Google: in Search Console, request indexing for `/`, `/release-date`,
   `/playtest-event`, `/steam` and the new news URL. Resubmit the sitemap with
   `gsc-mcp-server` `sitemaps.submit`.
5. Discord: crosspost the news entry.
6. Update `STATUS.md` in sc-portfolio.
