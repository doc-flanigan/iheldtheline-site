import type { Metadata } from 'next'
import Link from 'next/link'
import ReleaseWindow from '@/components/ReleaseWindow'
import { SITE } from '@/data/site'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: {
    absolute: 'I Held the Line — Squadron 42 Release Date & 2026 Tracker',
  },
  description:
    '"I held the line" — what long-time Star Citizen backers say while waiting for Squadron 42 to ship. Track the 2026 release window with live dev news, official trailers, cast FAQ, and a day-count. Unofficial fan site.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'I Held the Line — Squadron 42 Release Date & 2026 Tracker',
    description:
      '"I held the line" — the Star Citizen backer pledge to wait for Squadron 42. Live dev news, trailers, cast FAQ, and 2026 release window tracker.',
    url: '/',
  },
}

const SECTION_CARDS = [
  {
    href: '/news',
    label: 'Development News',
    description:
      'The latest Squadron 42 updates from official CIG sources — monthly reports, CitizenCon reveals, milestone announcements, newest first.',
    cta: 'Read the timeline →',
  },
  {
    href: '/videos',
    label: 'Official Videos',
    description:
      'Every official Squadron 42 video from Cloud Imperium Games — trailers, gameplay reveals, CitizenCon presentations, and cinematic clips.',
    cta: 'Watch the videos →',
  },
  {
    href: '/faq',
    label: 'FAQ',
    description:
      'What is Squadron 42? Who\'s in the cast? When does it release? Is it included with Star Citizen? Answers from official CIG communications only.',
    cta: 'Read the FAQ →',
  },
]

export default function Home() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        {/* Hero */}
        <div className="relative bg-navy bg-[url('/images/hero/hero-01.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/75 to-navy pointer-events-none" />
          <div className="relative container-wide">
            <ReleaseWindow />
          </div>
        </div>

        {/* What is Squadron 42 */}
        <section className="border-t border-white/5 py-20 sm:py-28">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                What is it?
              </p>
              <h2 className="heading-display text-3xl sm:text-4xl mb-6">
                Squadron 42 — the single-player campaign
              </h2>
              <div className="space-y-4 text-muted text-base leading-relaxed">
                <p>
                  Squadron 42 is a single-player, story-driven space game set in the same universe
                  as Star Citizen. Developed by Cloud Imperium Games, it follows a new UEE Navy
                  recruit through a cinematic military campaign — think Wing Commander for a new
                  generation.
                </p>
                <p>
                  The game features a star-studded cast including{' '}
                  <strong className="text-starwhite">Mark Hamill</strong>,{' '}
                  <strong className="text-starwhite">Gary Oldman</strong>,{' '}
                  <strong className="text-starwhite">Gillian Anderson</strong>,{' '}
                  <strong className="text-starwhite">Henry Cavill</strong>, and{' '}
                  <strong className="text-starwhite">Andy Serkis</strong>, with full
                  motion-capture performances throughout.
                </p>
                <p>
                  Unlike Star Citizen&apos;s persistent multiplayer universe, Squadron 42 is a
                  standalone, offline-capable campaign. CIG has confirmed a 2026 release target —
                  no specific date has been announced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Referral CTA */}
        <section className="border-t border-white/5 py-12 sm:py-16">
          <div className="container-wide text-center">
            <p className="text-muted text-sm mb-6">
              Squadron 42 is coming — Star Citizen is playable right now.
            </p>
            <CTAButton trackingLabel="Homepage CTA" />
            {/* SEO cross-link: dayonecitizen */}
            <div className="mt-8 space-y-2 text-sm text-muted max-w-2xl mx-auto text-left">
              <p>
                New to Star Citizen?{' '}
                <a href="https://dayonecitizen.com" className="text-gold underline hover:opacity-80" target="_blank" rel="noopener">
                  Start at dayonecitizen.com
                </a>{' '}
                — the plain-English getting-started guide for new players.
              </p>
            </div>
          </div>
        </section>

        {/* Section cards */}
        <section className="border-t border-white/5 bg-navyLight py-20 sm:py-28">
          <div className="container-wide">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Explore
            </p>
            <h2 className="heading-display text-3xl sm:text-4xl mb-12">
              Everything on the site
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {SECTION_CARDS.map(({ href, label, description, cta }) => (
                <article
                  key={href}
                  className="card-surface p-7 hover:border-gold/30 transition-colors"
                >
                  <h3 className="heading-display text-lg mb-3">{label}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>
                  <Link
                    href={href}
                    className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
                  >
                    {cta}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
