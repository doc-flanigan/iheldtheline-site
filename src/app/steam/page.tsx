import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

const STEAM_URL = 'https://store.steampowered.com/app/4045720/'
const IMG_ALT =
  'A grey heavy fighter with a manned top turret and open side hatch races low over an orange desert blurred by speed.'

export const metadata: Metadata = {
  title: 'Squadron 42 on Steam: Wishlist Now, Release Window, Requirements',
  description:
    'Squadron 42’s Steam page went live October 10, 2026. You can wishlist it, but not buy it yet. Release window, system requirements, and RSI account linking explained.',
  alternates: { canonical: '/steam' },
  openGraph: {
    title: 'Squadron 42 on Steam: Wishlist Now, Release Window, Requirements',
    description:
      'Squadron 42’s Steam page is live: wishlist only, planned release Q2 2027, Windows only. What it shows and what it does not.',
    url: '/steam',
    images: [{ url: '/images/headers/worth-buying.jpg', width: 1920, height: 1080, alt: IMG_ALT }],
  },
}

const MIN_SPECS = [
  ['OS', 'Windows 11'],
  ['Processor', 'Quad Core CPU – Intel: i7 (Sandy Bridge or later), AMD: Bulldozer or later'],
  ['Memory', '16 GB RAM'],
  ['Graphics', 'DirectX 11.1 compatible Graphics Card with 8 GB VRAM'],
  ['DirectX', 'Version 12'],
  ['Storage', '150 GB available space'],
]

const faqs = [
  {
    q: 'Can I buy Squadron 42 on Steam now?',
    a: 'No. Squadron 42’s Steam page, which went live on October 10, 2026, is wishlist only. It shows no price, no pre-purchase and no demo. Today the game is bought through the Roberts Space Industries store.',
  },
  {
    q: 'When does Squadron 42 release on Steam?',
    a: 'The Steam page shows a planned release of Q2 2027, which is a window (April to June 2027), not a date. It matches the Q2 2027 window in CIG’s August 27, 2026 Letter from the Chairman. In that letter CIG said a specific release date would follow shortly after the October playtest.',
  },
  {
    q: 'Will my RSI pledge work on Steam?',
    a: 'Steam’s page says Roberts Space Industries “Supports Linking to Steam Account.” CIG has not yet detailed how existing pledges would transfer or be redeemed on Steam, so check official CIG communications before assuming anything.',
  },
  {
    q: 'Is Star Citizen on Steam?',
    a: 'No. Star Citizen, the multiplayer game, is played through the RSI launcher only. Only Squadron 42, the separate single-player game, has a Steam page.',
  },
  {
    q: 'What are the minimum specs for Squadron 42 on Steam?',
    a: 'Windows 11, a quad-core CPU (Intel i7 Sandy Bridge or later, or AMD Bulldozer or later), 16 GB RAM, a DirectX 11.1 compatible graphics card with 8 GB VRAM, DirectX 12, and 150 GB of storage. Recommended specs are not listed yet.',
  },
  {
    q: 'Will Squadron 42 be on consoles?',
    a: 'No console release has been announced by CIG. The Steam page lists Windows only.',
  },
]

const link = 'text-gold hover:text-goldDark transition-colors'
const h2 = 'text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4'
const p = 'text-muted text-sm leading-relaxed mb-4'

export default function SteamPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Squadron 42 on Steam', item: `${SITE.url}/steam` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHeader
        eyebrow="Steam page live · October 10, 2026 · Wishlist only"
        title="Squadron 42 on Steam"
        description="Squadron 42 now has a Steam page. You can wishlist it today, but you cannot buy it there yet. Here is what the page shows."
        image="/images/headers/worth-buying.jpg"
        imageAlt={IMG_ALT}
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Yes, Squadron 42 is on Steam, but only as a wishlist page.
              </strong>{' '}
              Squadron 42&rsquo;s{' '}
              <a href={STEAM_URL} target="_blank" rel="noopener" className={link}>
                Steam page
              </a>{' '}
              went live on October 10, 2026. It is published by Roberts Space Industries and lets you
              add the game to your wishlist. There is no price, no pre-order and no demo. Steam lists a
              planned release of Q2 2027.
            </p>

            <section className="max-w-2xl mb-14">
              <h2 className={h2}>What you can and can&rsquo;t do on Steam</h2>
              <ul className="text-muted text-sm leading-relaxed list-disc pl-5 space-y-2">
                <li>
                  <span className="text-starwhite font-semibold">You can:</span> wishlist the game and
                  get a Steam notification when it becomes available.
                </li>
                <li>
                  <span className="text-starwhite font-semibold">You can&rsquo;t:</span> buy it,
                  pre-order it, or download a demo. None of those options appear on the page.
                </li>
              </ul>
              <p className={`${p} mt-4`}>
                Until release, the way to own Squadron 42 is still the Roberts Space Industries store.
              </p>
            </section>

            <section className="max-w-2xl mb-14">
              <h2 className={h2}>The release window Steam shows</h2>
              <p className={p}>
                Steam says &ldquo;Planned Release Date: Q2 2027.&rdquo; That is a window, not a day. It
                matches the window CIG set in its August 27, 2026{' '}
                <a
                  href="https://robertsspaceindustries.com/en/comm-link/transmission/21301-Letter-From-The-Chairman"
                  target="_blank"
                  rel="noopener"
                  className={link}
                >
                  Letter from the Chairman
                </a>
                . In that letter CIG said it would make &ldquo;a specific release date shortly
                afterwards&rdquo; following the October playtest. We track every statement on the{' '}
                <Link href="/release-date" className={link}>
                  release date page
                </Link>
                .
              </p>
            </section>

            <section className="max-w-2xl mb-14">
              <h2 className={h2}>What the Steam page lists</h2>
              <ul className="text-muted text-sm leading-relaxed list-disc pl-5 space-y-2">
                <li>Platform: Windows only.</li>
                <li>Single-player, with Steam Achievements and Steam Cloud.</li>
                <li>Full controller support, including DualShock and DualSense, plus HDR and Family Sharing.</li>
                <li>
                  Languages: English with full audio, plus French, Italian, German, Spanish (Spain and
                  Latin America), Japanese, Korean, Brazilian Portuguese and Simplified Chinese.
                </li>
                <li>Developer Cloud Imperium Games, publisher Roberts Space Industries.</li>
              </ul>
              <p className={`${p} mt-4`}>
                One more line matters to existing backers: Steam&rsquo;s account notice reads &ldquo;Roberts
                Space Industries (Supports Linking to Steam Account).&rdquo; CIG has not yet explained
                what that means for pledges you already own.
              </p>
            </section>

            <section className="max-w-2xl mb-14">
              <h2 className={h2}>System requirements on Steam</h2>
              <p className={p}>These are the minimum requirements as Steam lists them:</p>
              <dl className="card-surface p-5 space-y-2 text-sm leading-relaxed mb-4">
                {MIN_SPECS.map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <dt className="w-24 shrink-0 text-gold font-semibold">{k}</dt>
                    <dd className="text-muted flex-1">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className={p}>
                Recommended specs are not listed yet; Steam only says a 64-bit processor and operating
                system are required. These are Squadron 42&rsquo;s requirements, not Star Citizen&rsquo;s.
              </p>
            </section>

            <section className="max-w-2xl mb-14">
              <h2 className={h2}>Is Star Citizen on Steam?</h2>
              <p className={p}>
                No. Star Citizen, the multiplayer game, is played through the RSI launcher only. The
                Steam page covers Squadron 42, the separate single-player game. Our hub site explains
                the difference in{' '}
                <a
                  href="https://dayonecitizen.com/day-one-citizen/is-star-citizen-on-steam"
                  target="_blank"
                  rel="noopener"
                  className={link}
                >
                  Is Star Citizen on Steam?
                </a>
              </p>
              <p className="text-muted text-xs leading-relaxed">
                Source: the{' '}
                <a href={STEAM_URL} target="_blank" rel="noopener" className={link}>
                  Squadron 42 Steam store page
                </a>
                , checked October 11, 2026. We found no CIG comm-link about the page yet, so this page
                reports what Steam shows.
              </p>
            </section>

            <section className="max-w-2xl mt-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Squadron 42 on Steam &mdash; FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="card-surface p-5">
                    <h3 className="text-starwhite font-semibold text-sm">{q}</h3>
                    <p className="text-muted text-sm leading-relaxed mt-2">{a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>

      <PageSources route="/steam" />
    </>
  )
}
