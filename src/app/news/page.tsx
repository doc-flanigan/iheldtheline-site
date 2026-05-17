import type { Metadata } from 'next'
import TimelineEntry from '@/components/TimelineEntry'
import Sidebar from '@/components/sidebar/Sidebar'
import { NEWS } from '@/data/news'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Development Timeline — Latest News',
  description:
    'Squadron 42 development updates and press coverage, sourced from official CIG communications and verified reporting, newest first.',
  alternates: { canonical: '/news' },
  openGraph: {
    title: 'Squadron 42 Development Timeline — Latest News',
    description:
      'Squadron 42 development updates and press coverage from official CIG sources and verified reporting, newest first.',
    url: '/news',
  },
}

export default function NewsPage() {
  const sorted = [...NEWS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
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
      <main className="container-wide py-16 sm:py-24">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <header className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Development Timeline
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">Squadron 42 News</h1>
              <p className="text-muted text-base">
                Development updates and reporting from official CIG sources and verified press coverage, newest first.
              </p>
            </header>

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
                  {sorted.map((entry, i) => (
                    <TimelineEntry key={`${entry.date}-${i}`} entry={entry} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
