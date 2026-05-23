import type { Metadata } from 'next'
import VideoCard from '@/components/VideoCard'
import { VIDEOS } from '@/data/videos'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Official Squadron 42 Videos & Trailers',
  description:
    'All official Squadron 42 videos from Cloud Imperium Games — CitizenCon presentations, trailers, gameplay reveals, and cinematic clips. Updated from official CIG sources.',
  alternates: { canonical: '/videos' },
  openGraph: {
    title: 'Official Squadron 42 Videos & Trailers',
    description:
      'Every official Squadron 42 video from CIG — trailers, gameplay reveals, CitizenCon presentations.',
    url: '/videos',
    images: [
      {
        url: '/images/hero/hero-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Official Squadron 42 videos and trailers from Cloud Imperium Games',
      },
    ],
  },
}

export default function VideosPage() {
  const sorted = [...VIDEOS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: `${SITE.url}/videos` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <header className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
            Official Videos
          </p>
          <h1 className="heading-display text-4xl sm:text-5xl mb-4">
            Squadron 42 Videos & Trailers
          </h1>
          <p className="text-muted text-base">
            Every official video from Cloud Imperium Games — trailers, gameplay reveals,
            CitizenCon presentations, and cinematic clips. Clicking opens the official source.
          </p>
        </header>

        {sorted.length === 0 ? (
          <p className="text-muted">No videos yet — check back soon.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sorted.map((video, i) => (
              <VideoCard key={`${video.date}-${i}`} video={video} />
            ))}
          </div>
        )}
      </main>
    </>
  )
}
