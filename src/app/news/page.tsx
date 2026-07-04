import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import TimelineEntry from '@/components/TimelineEntry'
import CommLinkArchive from '@/components/CommLinkArchive'
import { PageSources } from '@/components/PageSources'
import Sidebar from '@/components/sidebar/Sidebar'
import { NEWS } from '@/data/news'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 News — the Complete Development Timeline (2012–Present)',
  description:
    'Every major Squadron 42 news beat from the 2012 announcement to today — verified against official CIG sources — plus a complete archive of every official SQ42 comm-link, monthly report, and newsletter.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'Squadron 42 News — the Complete Development Timeline (2012–Present)',
    description:
      'Every major Squadron 42 news beat since 2012, verified against official CIG sources, plus the complete official comm-link archive.',
    url: '/news',
    images: [
      {
        url: '/images/headers/news.jpg',
        width: 1920,
        height: 823,
        alt: 'An armored pilot stands beside a landed dark-green military fighter in a field of red alien grass and barrel cacti, mountains fading into dusty haze behind.',
      },
    ],
  },
}

export default function NewsPage() {
  const sorted = [...NEWS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const years = Array.from(new Set(sorted.map((e) => e.date.slice(0, 4)))).sort(
    (a, b) => Number(b) - Number(a)
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'News', item: `${SITE.url}/news` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        eyebrow="Development Timeline"
        title="Squadron 42 News"
        description="The complete Squadron 42 story — every major beat from the 2012 announcement to today, verified against official CIG sources, newest first."
        image="/images/headers/news.jpg"
        imageAlt="An armored pilot stands beside a landed dark-green military fighter in a field of red alien grass and barrel cacti, mountains fading into dusty haze behind."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Year jump nav */}
            <nav aria-label="Jump to year" className="mb-10 max-w-2xl">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {years.map((y) => (
                  <li key={y}>
                    <a
                      href={`#y${y}`}
                      className="text-gold hover:text-goldDark font-semibold transition-colors"
                    >
                      {y}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#archive"
                    className="text-muted hover:text-gold transition-colors"
                  >
                    Full comm-link archive ↓
                  </a>
                </li>
              </ul>
            </nav>

            {sorted.length === 0 ? (
              <p className="text-muted">No news entries yet — check back soon.</p>
            ) : (
              <div className="relative max-w-2xl">
                {/* Vertical connector line */}
                <div
                  className="absolute left-[1px] top-2 bottom-0 w-px timeline-line"
                  aria-hidden
                />
                <div>
                  {years.map((year) => (
                    <div key={year}>
                      <h2
                        id={`y${year}`}
                        className="relative pl-8 pb-6 scroll-mt-24 heading-display text-2xl text-gold"
                      >
                        {year}
                      </h2>
                      {sorted
                        .filter((e) => e.date.slice(0, 4) === year)
                        .map((entry, i) => (
                          <TimelineEntry key={`${entry.date}-${i}`} entry={entry} />
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="max-w-2xl">
              <CommLinkArchive />
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <PageSources route="/news" />
    </>
  )
}
