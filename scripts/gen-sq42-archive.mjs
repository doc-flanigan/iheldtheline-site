// Regenerates src/data/sq42-archive.generated.json — the complete archive of
// official RSI comm-links about Squadron 42, enumerated live from the
// Star Citizen Wiki comm-link API (mirror of the official RSI Comm-Link feed).
//
// Run: npm run gen-archive   (safe to re-run any time CIG posts something new)
//
// Notes on data quality, learned the hard way:
// - The API's created_at is the wiki's SCRAPE date, not publication — wrong for
//   re-scraped old posts. We derive dates from titles (monthly reports and
//   newsletters name their month/quarter) and fall back to scrape dates only
//   when they are era-plausible for the comm-link id.
// - Press-mirror stubs (urls containing /comm-link/SCW/) have empty bodies and
//   junk titles — excluded. The archive lists RSI-native posts only.
// - Index pagination caps at ~3000 rows per sort order, so we scan from both
//   ends plus date-sorted, plus targeted searches, and merge.
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const API = 'https://api.star-citizen.wiki/api/comm-links';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '../src/data/sq42-archive.generated.json');

// Known-wrong scrape dates, pinned from verified sources (see docs/claims ledger).
const DATE_OVERRIDES = { 19453: '2023-10' }; // I Held the Line — published Oct 2023

const MONTHS = ['january','february','march','april','may','june','july','august','september','october','november','december'];
const isSq42 = (t) => /squadron\s*42|sq42/i.test(t || '');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const found = new Map();
const add = (c) => {
  if (!c || !isSq42(c.title)) return;
  if (/\/comm-link\/SCW\//.test(c.rsi_url || '')) return; // press-mirror stubs
  if (!found.has(c.id)) found.set(c.id, c);
};

async function getJson(url, opts) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const r = await fetch(url, opts);
      if (r.ok) return await r.json();
    } catch {}
    await sleep(800);
  }
  return null;
}

async function scanIndex(sortQs, maxPages) {
  let page = 1, last = 1, prevFirst = null;
  do {
    const r = await getJson(`${API}?limit=100&${sortQs}page%5Bnumber%5D=${page}`);
    if (!r?.data?.length || r.data[0].id === prevFirst) break;
    prevFirst = r.data[0].id;
    last = r.meta?.last_page || 1;
    r.data.forEach(add);
    page++;
  } while (page <= last && page <= maxPages);
}

async function search(query, maxPages) {
  let page = 1, last = 1, prevFirst = null;
  do {
    const r = await getJson(`${API}/search?page%5Bnumber%5D=${page}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });
    if (!r?.data?.length || r.data[0].id === prevFirst) break;
    prevFirst = r.data[0].id;
    last = r.meta?.last_page || 1;
    r.data.forEach(add);
    page++;
  } while (page <= last && page <= maxPages);
}

// "Squadron 42 Monthly Report: September 2018" -> { period: 'September 2018', sortKey: '2018-09' }
// "Squadron 42 Q3 2025 Newsletter Comm-Link"   -> { period: 'Q3 2025', sortKey: '2025-07' }
function periodFromTitle(title) {
  const my = title.match(new RegExp(`(${MONTHS.join('|')})\\s*(?:&\\s*(${MONTHS.join('|')})\\s*)?(20\\d\\d)`, 'i'));
  if (my) {
    const month = MONTHS.indexOf(my[1].toLowerCase()) + 1;
    const label = my[2] ? `${cap(my[1])} & ${cap(my[2])} ${my[3]}` : `${cap(my[1])} ${my[3]}`;
    return { period: label, sortKey: `${my[3]}-${String(month).padStart(2, '0')}` };
  }
  const q = title.match(/Q([1-4])\s*(20\d\d)/i);
  if (q) return { period: `Q${q[1]} ${q[2]}`, sortKey: `${q[2]}-${String((q[1] - 1) * 3 + 1).padStart(2, '0')}` };
  return null;
}
const cap = (s) => s[0].toUpperCase() + s.slice(1).toLowerCase();

await scanIndex('', 35);
await scanIndex('sort=id&', 35);
await scanIndex('sort=created_at&', 35);
for (const q of ['Squadron 42', 'SQ42', 'Squadron 42 Monthly Report', 'Squadron 42 Newsletter', 'Squadron 42 Update']) {
  await search(q, 10);
  await sleep(400);
}

const items = [...found.values()].sort((a, b) => a.id - b.id).map((c) => {
  const scraped = (c.created_at || '').slice(0, 7);
  const scrapedYear = Number(scraped.slice(0, 4));
  const fromTitle = periodFromTitle(c.title);
  const override = DATE_OVERRIDES[c.id];
  // Scrape date is trusted only when era-plausible for the id (old ids with
  // 2025+ scrape dates are re-scrapes).
  const scrapePlausible = scrapedYear >= 2012 && !(c.id < 20000 && scrapedYear >= 2025);
  const sortKey = override || fromTitle?.sortKey || (scrapePlausible ? scraped : null);
  const period = fromTitle?.period || (sortKey ? sortKey : '');
  return {
    id: c.id,
    period,
    year: sortKey ? Number(sortKey.slice(0, 4)) : null,
    title: c.title,
    url: c.rsi_url,
    kind: /monthly report/i.test(c.title) ? 'report' : /newsletter/i.test(c.title) ? 'newsletter' : 'post',
  };
});

writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), count: items.length, items }, null, 1) + '\n');
console.log(`sq42 archive: ${items.length} comm-links -> src/data/sq42-archive.generated.json`);
const byYear = {};
items.forEach((i) => { const y = i.year ?? 'unknown'; byYear[y] = (byYear[y] || 0) + 1; });
console.log('by year:', JSON.stringify(byYear));
const undated = items.filter((i) => !i.year);
if (undated.length) undated.forEach((i) => console.log('  UNDATED:', i.id, i.title));
