import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Release Date — Every Official CIG Statement',
  description:
    'Every official Cloud Imperium Games statement on the Squadron 42 release date, in one place. 2026 target confirmed by Chris Roberts.',
  alternates: { canonical: '/release-date' },
  openGraph: {
    title: 'Squadron 42 Release Date — Every Official CIG Statement',
    description:
      'All official CIG release-window statements for Squadron 42, from feature-complete in 2023 to the 2026 target.',
    url: '/release-date',
  },
}

const STATEMENTS = [
  {
    date: 'May 2026',
    summary:
      'Chris Roberts stated in an interview that Squadron 42 is targeting a release by the end of 2026. He cited major industry releases as a scheduling consideration but stopped short of a firm guarantee.',
    sourceLabel: 'Via OpenCritic (citing This Week in Videogames)',
    sourceUrl:
      'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    date: 'December 2025',
    summary:
      'Chairman\'s Letter 2025: Chris Roberts confirmed all Squadron 42 chapters are "fully playable from beginning to end," with the team regularly running complete internal playthroughs. Campaign length confirmed at 40+ hours. Roberts stated the studio is "confident in the direction the game is headed and fully focused on delivering."',
    sourceLabel: "RSI Comm-Link — Chairman's Letter 2025",
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20960-API',
  },
  {
    date: 'October 2024',
    summary:
      'CitizenCon 2954: Chris Roberts confirmed a 2026 release window during the first live gameplay demonstration of Squadron 42. Campaign length stated as 30 to 40 hours.',
    sourceLabel: 'RSI Comm-Link — CitizenCon 2954',
    sourceUrl: 'https://robertsspaceindustries.com/comm-link/SCW/20262-API',
  },
  {
    date: 'October 2023',
    summary:
      'CitizenCon 2953: Cloud Imperium Games announced Squadron 42 had reached feature-complete status — all planned gameplay features implemented, project entering the polishing phase. The "I Held the Line" 26-minute showcase was released.',
    sourceLabel: 'RSI Comm-Link — I Held the Line',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },
]

export default function ReleaseDatePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Release Date',
        item: `${SITE.url}/release-date`,
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
                Release Date Tracker
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                Squadron 42 Release Date
              </h1>
              <p className="text-muted text-base">
                Every official statement from Cloud Imperium Games on the Squadron 42 release
                window. No speculation — CIG sources only.
              </p>
            </header>

            {/* What we know summary */}
            <div className="card-surface p-6 mb-14 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                What We Know
              </p>
              <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                <li>
                  <span className="text-starwhite font-semibold">2026</span> is the confirmed
                  release target — no specific date or quarter announced.
                </li>
                <li>
                  Campaign is{' '}
                  <span className="text-starwhite font-semibold">40+ hours</span> long,
                  confirmed in the Chairman&apos;s Letter 2025.
                </li>
                <li>
                  All chapters are{' '}
                  <span className="text-starwhite font-semibold">
                    fully playable internally
                  </span>{' '}
                  as of December 2025.
                </li>
                <li>
                  Feature-complete status was reached in{' '}
                  <span className="text-starwhite font-semibold">October 2023</span>.
                </li>
                <li>No beta, demo, or Steam release has been announced.</li>
              </ul>
              <p className="mt-4">
                <a
                  href="https://robertsspaceindustries.com/comm-link/SCW/20960-API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-goldDark transition-colors"
                >
                  Source: RSI Comm-Link — Chairman&apos;s Letter 2025 →
                </a>
              </p>
            </div>

            {/* Timeline of statements */}
            <section className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-8">
                Official Statements — Newest First
              </p>
              <div className="relative">
                <div
                  className="absolute left-[1px] top-2 bottom-0 w-px timeline-line"
                  aria-hidden
                />
                <div className="space-y-10">
                  {STATEMENTS.map((s, i) => (
                    <div key={i} className="relative pl-8">
                      <div
                        className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(200,160,74,0.5)]"
                        aria-hidden
                      />
                      <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1">
                        {s.date}
                      </p>
                      <p className="text-muted text-sm leading-relaxed mb-2">{s.summary}</p>
                      <a
                        href={s.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold text-xs hover:text-goldDark transition-colors"
                      >
                        {s.sourceLabel} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
