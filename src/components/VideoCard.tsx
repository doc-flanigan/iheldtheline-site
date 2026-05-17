import Image from 'next/image'
import type { VideoEntry } from '@/data/videos'

export default function VideoCard({ video }: { video: VideoEntry }) {
  const date = new Date(video.date + 'T00:00:00')
  const label = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  const videoObjectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    url: video.sourceUrl,
    uploadDate: video.date,
    ...(video.duration ? { duration: video.duration } : {}),
  }

  return (
    <article className="card-surface overflow-hidden hover:border-gold/30 transition-colors group">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectJsonLd) }}
      />
      <a
        href={video.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Watch ${video.title} on official CIG channel`}
      >
        <div className="relative aspect-video bg-navy">
          {video.thumbnailUrl ? (
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover group-hover:opacity-75 transition-opacity"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-muted text-xs">No thumbnail available</span>
            </div>
          )}
          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-navy ml-0.5"
                aria-hidden
              >
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </div>
        </div>
        <div className="p-4">
          <p className="text-muted text-xs mb-1">{label}</p>
          <h3 className="text-starwhite font-bold text-sm leading-snug mb-1 group-hover:text-gold transition-colors">
            {video.title}
          </h3>
          <p className="text-muted text-xs leading-relaxed">{video.description}</p>
        </div>
      </a>
    </article>
  )
}
