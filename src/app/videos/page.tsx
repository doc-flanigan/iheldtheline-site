import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
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
        url: '/images/headers/videos.jpg',
        width: 1920,
        height: 1080,
        alt: 'A Star Citizen military fighter fires its nose cannon in a muzzle flash while banking over a cloud-covered planet in orbit.',
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
      <PageHeader
        eyebrow="Official Videos"
        title="Squadron 42 Videos & Trailers"
        description="Every official video from Cloud Imperium Games — trailers, gameplay reveals, CitizenCon presentations, and cinematic clips. Clicking opens the official source."
        image="/images/headers/videos.jpg"
        imageAlt="A Star Citizen military fighter fires its nose cannon in a muzzle flash while banking over a cloud-covered planet in orbit."
      />
      <main className="container-wide py-12 sm:py-16">
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
