import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import CTAButton from '@/components/CTAButton'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Is Squadron 42 Worth Buying? — What You Get',
  description:
    'What do you get with Squadron 42? A 40+ hour single-player campaign, star-studded cast, and seamless transitions. Here\'s what CIG has officially confirmed.',
  alternates: { canonical: '/worth-buying' },
  openGraph: {
    title: 'Is Squadron 42 Worth Buying? — What You Get',
    description:
      'Everything CIG has officially confirmed about what Squadron 42 includes — campaign length, cast, gameplay, and how to buy.',
    url: '/worth-buying',
  },
}

export default function WorthBuyingPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Is It Worth Buying?',
        item: `${SITE.url}/worth-buying`,
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
            <header className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Buyer&apos;s Guide
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                Is Squadron 42 Worth Buying?
              </h1>
              <p className="text-muted text-base">
                What CIG has officially confirmed you&apos;ll get. No hype — just the facts from
                official sources.
              </p>
            </header>

            <div className="max-w-2xl space-y-10">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What You Get
                </p>
                <ul className="space-y-3 text-sm text-muted leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">40+ hour campaign</span> —
                      confirmed by Chris Roberts in the Chairman&apos;s Letter 2025. All chapters
                      fully playable internally.{' '}
                      <a
                        href="https://robertsspaceindustries.com/comm-link/SCW/20960-API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-goldDark transition-colors"
                      >
                        Source →
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">
                        Star-studded motion-capture cast
                      </span>{' '}
                      — Mark Hamill, Gary Oldman, Gillian Anderson, Henry Cavill, Andy Serkis, and
                      John Rhys-Davies.{' '}
                      <a
                        href="https://robertsspaceindustries.com/comm-link/SCW/20401-API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-goldDark transition-colors"
                      >
                        Source →
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">Seamless transitions</span> —
                      moving from on-foot to spacecraft to planetary surfaces without loading
                      screens, confirmed in the Chairman&apos;s Letter.{' '}
                      <a
                        href="https://robertsspaceindustries.com/comm-link/SCW/20960-API"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-goldDark transition-colors"
                      >
                        Source →
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">
                        Offline-capable single-player
                      </span>{' '}
                      — no internet connection required to play the campaign.{' '}
                      <a
                        href="https://robertsspaceindustries.com/en/store/pledge/browse/sq42"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-goldDark transition-colors"
                      >
                        Source →
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">
                        164 minutes of original orchestral score
                      </span>{' '}
                      — recorded at Abbey Road Studios with a 96-piece orchestra, 40-piece choir,
                      and bagpipes.{' '}
                      <a
                        href="https://mailchi.mp/cloudimperiumgames/squadron-42-newsletter-en-1232025"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold hover:text-goldDark transition-colors"
                      >
                        Source →
                      </a>
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Who It&apos;s For
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 is aimed at players who want a cinematic single-player space game
                  with a strong story and AAA production values — think of it as a spiritual
                  successor to Wing Commander. It does not require any familiarity with Star
                  Citizen or its multiplayer universe to enjoy.
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  How to Buy
                </p>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Squadron 42 is sold exclusively through the Roberts Space Industries store.
                  Check the RSI store for current pricing and package options — prices are set by
                  CIG and may change. Squadron 42 is not available on Steam or consoles as of
                  June 2026 — no such release has been announced.
                </p>
                <a
                  href="https://robertsspaceindustries.com/en/store/pledge/browse/sq42"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-goldDark transition-colors"
                >
                  Source: RSI Store — Squadron 42 →
                </a>
              </section>

              <section className="card-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Want to Play Now?
                </p>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Squadron 42 isn&apos;t out yet. But Star Citizen — the multiplayer companion
                  game set in the same universe — is playable right now. Use a referral code to
                  start with bonus in-game credits.
                </p>
                <CTAButton trackingLabel="Worth Buying CTA" />
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
