import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'I Held the Line — Squadron 42 CitizenCon 2953 Showcase Breakdown',
  description:
    'The 26-minute Squadron 42 showcase from CitizenCon 2953 — what was shown, the feature-complete announcement, and why it matters. Official CIG sources.',
  alternates: { canonical: '/i-held-the-line-trailer' },
  openGraph: {
    title: 'I Held the Line — Squadron 42 CitizenCon 2953 Showcase Breakdown',
    description:
      'Everything shown in the I Held the Line Squadron 42 showcase: squad combat, formation flying, feature-complete announcement.',
    url: '/i-held-the-line-trailer',
  },
}

export default function IHeldTheLineTrailerPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'I Held the Line Trailer',
        item: `${SITE.url}/i-held-the-line-trailer`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <header className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Showcase Breakdown
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                &quot;I Held the Line&quot;
              </h1>
              <p className="text-starwhite text-lg font-semibold mb-3">
                Squadron 42 CitizenCon 2953 — October 2023
              </p>
              <p className="text-muted text-base">
                The 26-minute gameplay showcase that introduced the phrase — and confirmed Squadron
                42 had reached feature-complete status.
              </p>
            </header>

            {/* Video link card */}
            <div className="max-w-2xl mb-14">
              <a
                href="https://www.youtube.com/watch?v=IDtjzLzs7V8"
                target="_blank"
                rel="noopener noreferrer"
                className="block card-surface overflow-hidden hover:border-gold/30 transition-colors group"
              >
                <div className="relative aspect-video">
                  <Image
                    src="https://img.youtube.com/vi/IDtjzLzs7V8/maxresdefault.jpg"
                    alt="Squadron 42: I Held the Line — CitizenCon 2953 Showcase"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-navy/40 group-hover:bg-navy/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center">
                      <svg className="w-7 h-7 text-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-starwhite text-sm font-semibold group-hover:text-gold transition-colors">
                    Watch on YouTube: Squadron 42 — I Held the Line (26 min)
                  </p>
                  <p className="text-muted text-xs mt-1">youtube.com — CIG Official Channel</p>
                </div>
              </a>
              <p className="mt-2">
                <a
                  href="https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-goldDark transition-colors"
                >
                  Source: RSI Comm-Link — I Held the Line →
                </a>
              </p>
            </div>

            <div className="max-w-2xl space-y-10">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What Is &quot;I Held the Line&quot;?
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  &quot;I Held the Line&quot; is both the title of the CitizenCon 2953 Squadron 42
                  showcase and a phrase used by long-time Star Citizen backers who have waited years
                  for Squadron 42 to release. The October 2023 event in which it premiered was the
                  most significant Squadron 42 content reveal between the 2017 Holiday Special and
                  the live CitizenCon 2954 gameplay demonstration in 2024.
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Feature-Complete Announcement
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Alongside the showcase, CIG announced that Squadron 42 had reached
                  feature-complete status — meaning all planned gameplay features had been
                  implemented and the project had entered the polishing and refinement phase. This
                  was a major milestone marking the transition from active feature development to
                  quality and performance work.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — I Held the Line →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What the Showcase Showed
                </p>
                <ul className="space-y-3 text-sm text-muted leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">Squad-based combat</span> —
                      the player fighting alongside NPC squadmates in on-foot sequences aboard a
                      capital ship.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">
                        Formation flying with the 42nd Squadron
                      </span>{' '}
                      — coordinated space combat showing multiple player and NPC ships in
                      formation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">On-foot sequences</span> —
                      movement through ship corridors, interactions with the environment, and
                      combat on foot.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">Space combat</span> —
                      dogfighting and large-scale space battle sequences.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Why It Matters
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The &quot;I Held the Line&quot; showcase was the last major Squadron 42 content
                  reveal before the first live gameplay demonstration at CitizenCon 2954 in October
                  2024. Together, the two events — feature-complete in 2023, live prologue demo in
                  2024 — defined the development arc that led to the current 2026 release target.
                </p>
                <div className="mt-4">
                  <Link
                    href="/release-date"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    See the full release date timeline →
                  </Link>
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
