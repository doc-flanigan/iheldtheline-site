import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Sidebar from '@/components/sidebar/Sidebar'
import { NEWS } from '@/data/news'
import { SITE } from '@/data/site'

export function generateStaticParams() {
  return NEWS.filter((e) => e.slug).map((e) => ({ slug: e.slug as string }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = NEWS.find((e) => e.slug === slug)
  if (!entry) return {}

  return {
    title: `${entry.headline} — Squadron 42 News`,
    description: entry.summary.slice(0, 160),
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title: entry.headline,
      description: entry.summary.slice(0, 160),
      url: `/news/${slug}`,
    },
  }
}

export default async function NewsEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = NEWS.find((e) => e.slug === slug)
  if (!entry) notFound()

  const date = new Date(entry.date + 'T00:00:00')
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'News', item: `${SITE.url}/news` },
      {
        '@type': 'ListItem',
        position: 3,
        name: entry.headline,
        item: `${SITE.url}/news/${slug}`,
      },
    ],
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: entry.headline,
    datePublished: entry.date,
    description: entry.summary,
    publisher: {
      '@type': 'Organization',
      name: 'I Held the Line',
      url: SITE.url,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <Link
              href="/news"
              className="text-gold text-xs hover:text-goldDark transition-colors mb-10 inline-block"
            >
              ← Back to News
            </Link>

            <article className="max-w-2xl">
              <header className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  {formattedDate}
                </p>
                <h1 className="heading-display text-3xl sm:text-4xl mb-4 leading-snug">
                  {entry.headline}
                </h1>
              </header>

              <div className="text-muted text-base leading-relaxed mb-8">{entry.summary}</div>

              <footer className="border-t border-white/5 pt-6">
                <p className="text-xs text-muted mb-2">Original source:</p>
                <a
                  href={entry.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm hover:text-goldDark transition-colors"
                >
                  {entry.sourceLabel} →
                </a>
              </footer>
            </article>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
