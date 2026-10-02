import Image from 'next/image'

const CREDIT_HREF = 'https://www.hasgaha.com/'

/**
 * A framed in-game screenshot with a caption and a linked image credit.
 * Used on the 42nd Squadron lore pages (/42nd-squadron, /ships, /answer-the-call).
 * Captions describe what the image shows — they never claim a specific
 * 42nd Squadron or Odin subject.
 */
export function ScreenshotFigure({
  src,
  alt,
  caption,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  caption: string
  priority?: boolean
  className?: string
}) {
  return (
    <figure className={`card-surface overflow-hidden ${className}`}>
      <div className="relative aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 720px"
          className="object-cover"
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 text-xs text-muted">
        <span>{caption}</span>
        <a
          href={CREDIT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-muted/70 hover:text-gold transition-colors"
        >
          hasgaha.com
        </a>
      </figcaption>
    </figure>
  )
}

type GalleryItem = { src: string; caption: string; alt?: string }

/** Responsive grid of screenshot tiles with one image credit for the section. */
export function ScreenshotGallery({ items }: { items: GalleryItem[] }) {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((it) => (
          <figure key={it.src} className="card-surface overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={it.src}
                alt={it.alt ?? `Star Citizen — ${it.caption}. Screenshot via hasgaha.com.`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                className="object-cover"
              />
            </div>
            <figcaption className="border-t border-white/10 px-3 py-2 text-xs text-muted">
              {it.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-3 text-right text-xs text-muted/70">
        Imagery:{' '}
        <a
          href={CREDIT_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition-colors"
        >
          hasgaha.com
        </a>
      </p>
    </div>
  )
}
