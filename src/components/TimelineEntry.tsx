import Link from 'next/link'
import type { NewsEntry } from '@/data/news'

export default function TimelineEntry({ entry }: { entry: NewsEntry }) {
  const date = new Date(entry.date + 'T00:00:00')
  const label = date
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase()

  return (
    <div className="relative pl-8 pb-10 last:pb-0 animate-fade-in">
      <div
        className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(200,160,74,0.5)]"
        aria-hidden
      />
      <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1">
        {label}
      </p>
      {entry.slug ? (
        <Link href={`/news/${entry.slug}`}>
          <h3 className="text-starwhite font-bold text-base leading-snug mb-2 hover:text-gold transition-colors">
            {entry.headline}
          </h3>
        </Link>
      ) : (
        <h3 className="text-starwhite font-bold text-base leading-snug mb-2">
          {entry.headline}
        </h3>
      )}
      <p className="text-muted text-sm leading-relaxed mb-2">{entry.summary}</p>
      <a
        href={entry.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gold text-xs hover:text-goldDark transition-colors"
      >
        {entry.sourceLabel} →
      </a>
    </div>
  )
}
