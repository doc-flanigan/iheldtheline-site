import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import CTAButton from '@/components/CTAButton'
import { PageSources } from '@/components/PageSources'
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
    images: [
      {
        url: '/images/headers/worth-buying.jpg',
        width: 1920,
        height: 1080,
        alt: 'A grey heavy fighter with a manned top turret and open side hatch races low over an orange desert blurred by speed.',
      },
    ],
  },
}

const faqs = [
  {
    q: 'Can you play Squadron 42 right now?',
    a: 'No. Squadron 42 has not been released in any form. CIG is targeting a 2026 release window, announced at CitizenCon 2954. Buying it today means paying now and playing later.',
  },
  {
    q: 'How long is the Squadron 42 campaign?',
    a: 'Over forty hours, per Chris Roberts in the May 2026 Letter from the Chairman. At CitizenCon 2954 the length was stated as 30 to 40 hours; the May 2026 letter settled on "over forty hours."',
  },
  {
    q: 'Do I need Star Citizen to play Squadron 42?',
    a: 'No. Squadron 42 is a standalone single-player game. It does not require Star Citizen, an internet connection, or any knowledge of the multiplayer game.',
  },
  {
    q: 'Will Squadron 42 be on Steam or consoles?',
    a: 'No such release has been announced. As of mid-2026, Squadron 42 is sold exclusively through the Roberts Space Industries store for PC.',
  },
  {
    q: 'When does Squadron 42 release?',
    a: 'The only official commitment is a 2026 release window. No specific day, month, or quarter has been announced. The game is content complete, with polish, optimization, and bug fixing remaining.',
  },
]

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Buyer's Guide"
        title="Is Squadron 42 Worth Buying?"
        description="What CIG has officially confirmed you'll get. No hype — just the facts from official sources."
        image="/images/headers/worth-buying.jpg"
        imageAlt="A grey heavy fighter with a manned top turret and open side hatch races low over an orange desert blurred by speed."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Squadron 42 is not out yet, so buying it today is a preorder,
                not a game you can play tonight.
              </strong>{' '}
              What you would be paying for is well defined: a single-player
              campaign officially confirmed at over forty hours, content
              complete per CIG&apos;s May 2026 Letter from the Chairman, and
              targeting a 2026 release. If you want a finished game with
              reviews, nothing is lost by waiting for launch. If you want to
              play something in this universe today, that game is Star Citizen
              — not Squadron 42.
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What You Get
                </h2>
                <ul className="space-y-3 text-sm text-muted leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-gold shrink-0 mt-0.5">—</span>
                    <span>
                      <span className="text-starwhite font-semibold">40+ hour campaign</span> —
                      confirmed by Chris Roberts in the May 2026 Letter from the Chairman. All
                      chapters fully playable internally.{' '}
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Where Development Actually Stands
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 reached feature complete in October 2023 — all planned gameplay
                  features implemented, announced at CitizenCon 2953 alongside the 26-minute
                  &ldquo;I Held the Line&rdquo; showcase. A year later, at CitizenCon 2954, CIG
                  committed to a 2026 launch window during the first live gameplay demonstration.
                  The most recent milestone came in the May 2026 Letter from the Chairman: the game
                  is content complete, every chapter is playable from beginning to end in regular
                  internal playthroughs, and the remaining work is polish, optimization, and bug
                  fixing. That is a meaningfully late stage of development — but it is not a
                  release date, and CIG has not announced one.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/20960-Letter-From-The-Chairman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Letter From The Chairman (May 2026) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Honest Case for Waiting
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  This site exists because Squadron 42 has a long history of moving targets. A 2016
                  release window was promoted at CitizenCon 2015 and missed; in October 2020 Chris
                  Roberts declined to give any new date — &ldquo;it will be done when it is
                  done&rdquo; — and that stance held until the feature-complete announcement of
                  2023. None of that history says the 2026 window will slip. It does say that a
                  cautious buyer loses nothing by waiting: the game will be reviewable at launch,
                  and no official statement gives preorder buyers anything you cannot get by
                  purchasing on release day. If you buy now, you are buying because you want to
                  back the project — which is a fine reason, as long as it is the reason you think
                  you are buying for.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/17805-Letter-From-The-Chairman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Letter From The Chairman (October 2020) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Who It&apos;s For
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 is aimed at players who want a cinematic single-player space game
                  with a strong story and AAA production values — think of it as a spiritual
                  successor to Wing Commander. It does not require any familiarity with Star
                  Citizen or its multiplayer universe to enjoy. If your interest is an open-ended
                  online sandbox rather than a scripted campaign, Star Citizen is the half of the
                  project built for you — see our{' '}
                  <Link
                    href="/sq42-vs-star-citizen"
                    className="text-gold hover:text-goldDark transition-colors"
                  >
                    full comparison
                  </Link>{' '}
                  of the two games.
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  How to Buy
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Squadron 42 is sold exclusively through the Roberts Space Industries store.
                  Check the RSI store for current pricing and package options — prices are set by
                  CIG and may change. Squadron 42 is not available on Steam or consoles as of
                  mid-2026 — no such release has been announced.
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Want to Play Now?
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Squadron 42 isn&apos;t out yet. But Star Citizen — the multiplayer companion
                  game set in the same universe — is playable right now. Use a referral code to
                  start with bonus in-game credits.
                </p>
                <CTAButton trackingLabel="Worth Buying CTA" />
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map(({ q, a }) => (
                    <div key={q}>
                      <h3 className="text-starwhite font-semibold text-sm">{q}</h3>
                      <p className="text-muted text-sm leading-relaxed mt-2">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <PageSources route="/worth-buying" />
    </>
  )
}
