import type { Metadata } from 'next'
import Link from 'next/link'
import ReleaseWindow from '@/components/ReleaseWindow'
import { SITE } from '@/data/site'
import { NEWS } from '@/data/news'
import CTAButton from '@/components/CTAButton'
import SpeechQuote from '@/components/SpeechQuote'
import { PageSources } from '@/components/PageSources'

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
    images: [
      {
        url: '/images/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'I Held the Line — tracking Squadron 42 development',
      },
    ],
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
    href: '/cast',
    label: 'Cast',
    description:
      'Mark Hamill, Gary Oldman, Gillian Anderson, Henry Cavill, Andy Serkis, and more — all ten confirmed cast members with roles and official sources.',
    cta: 'Meet the cast →',
  },
  {
    href: '/release-date',
    label: 'Release Date Tracker',
    description:
      'Every official CIG statement on the Squadron 42 release window, in one place. 2026 target confirmed.',
    cta: 'Track the date →',
  },
  {
    href: '/sq42-vs-star-citizen',
    label: 'SQ42 vs Star Citizen',
    description:
      'Single-player or multiplayer? One purchase or two? The key differences explained from official CIG sources.',
    cta: 'See the differences →',
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
  {
    href: '/gameplay',
    label: 'Gameplay Systems',
    description:
      'Seamless transitions, AI squad companions, zero-G traversal, and a living NPC crew — every confirmed gameplay system, sourced from official CIG reports.',
    cta: 'See the systems →',
  },
  {
    href: '/i-held-the-line-trailer',
    label: '"I Held the Line" Video',
    description:
      'The CitizenCon 2953 cinematic that gave this site its name — where the backer community\'s long wait for Squadron 42 was honored on stage.',
    cta: 'Watch the video →',
  },
  {
    href: '/vanduul',
    label: 'The Vanduul',
    description:
      'The alien enemy of Squadron 42 — who the Vanduul are, their ships, and their role in the campaign, from official CIG lore and reveals.',
    cta: 'Know the enemy →',
  },
  {
    href: '/odin-system',
    label: 'The Odin System',
    description:
      'Squadron 42\'s setting — a white-dwarf star system home to Fortune\'s Cross station and The Coil, revealed in the Q3 2025 subscriber newsletter.',
    cta: 'Explore the system →',
  },
  {
    href: '/worth-buying',
    label: 'Worth Buying?',
    description:
      'Thinking about buying in before Squadron 42 ships? What you get today, what\'s still coming, and how the two games are sold.',
    cta: 'Read the breakdown →',
  },
]

export default function Home() {
  const latest = NEWS[0]
  const latestDate = new Date(`${latest.date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

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
              <SpeechQuote
                quote="…without victory there can be no survival!"
                className="mt-8"
              />
            </div>
          </div>
        </section>

        {/* Latest development update */}
        <section className="border-t border-white/5 bg-navyLight py-16 sm:py-20">
          <div className="container-wide">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Latest Update
            </p>
            <article className="card-surface p-7 max-w-3xl">
              <time dateTime={latest.date} className="text-muted text-xs">
                {latestDate} · {latest.sourceLabel}
              </time>
              <h2 className="heading-display text-2xl mt-2 mb-3">{latest.headline}</h2>
              <p className="text-muted text-sm leading-relaxed mb-5">{latest.summary}</p>
              <Link
                href={latest.slug ? `/news/${latest.slug}` : '/news'}
                className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
              >
                Read the full update →
              </Link>
            </article>
          </div>
        </section>

        {/* "I held the line" quote band */}
        <section className="relative overflow-hidden border-t border-white/5 bg-navy bg-[url('/images/headers/i-held-the-line-trailer.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-navy/85 pointer-events-none" />
          <div className="relative container-wide py-16 sm:py-24 text-center">
            <p className="heading-display text-3xl sm:text-4xl mb-4">
              &ldquo;I held the line.&rdquo;
            </p>
            <p className="text-starwhite/80 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              The phrase long-time backers use while waiting for Squadron 42 — honored on stage at
              CitizenCon 2953, when CIG declared the game feature-complete.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <Link
                href="/i-held-the-line-trailer"
                className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
              >
                Watch the &ldquo;I Held the Line&rdquo; video →
              </Link>
              <Link
                href="/bishops-speech"
                className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
              >
                The speech where the line was drawn →
              </Link>
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

      <PageSources route="/" />
    </>
  )
}
