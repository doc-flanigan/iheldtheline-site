import archive from '@/data/sq42-archive.generated.json'

// Complete archive of official RSI comm-links about Squadron 42, enumerated
// from the comm-link feed by scripts/gen-sq42-archive.mjs (npm run gen-archive).
// Rendered as native <details> per year — no client JS.

type ArchiveItem = {
  id: number
  period: string
  year: number | null
  title: string
  url: string
  kind: 'report' | 'newsletter' | 'post'
}

const ITEMS = (archive.items as ArchiveItem[]).filter((i) => i.year)

const KIND_LABEL: Record<ArchiveItem['kind'], string> = {
  report: 'Monthly Report',
  newsletter: 'Newsletter',
  post: 'Comm-Link',
}

export default function CommLinkArchive() {
  const years = Array.from(new Set(ITEMS.map((i) => i.year as number))).sort((a, b) => b - a)

  return (
    <section id="archive" className="mt-16">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
        Complete Official Comm-Link Archive
      </h2>
      <p className="text-muted text-sm leading-relaxed mb-2">
        Every official RSI comm-link about Squadron 42 — {archive.count} posts: monthly
        development reports, newsletters, and announcements — linked to the original source.
        The curated timeline above covers the beats that mattered; this is everything else.
      </p>
      <p className="text-muted text-xs mb-6">
        Auto-generated from the official RSI Comm-Link feed · last regenerated{' '}
        {archive.generatedAt}
      </p>

      <div className="space-y-2">
        {years.map((year) => {
          const rows = ITEMS.filter((i) => i.year === year).sort((a, b) => b.id - a.id)
          return (
            <details key={year} className="card-surface group">
              <summary className="cursor-pointer select-none p-4 text-starwhite font-semibold text-sm flex items-baseline gap-3">
                <span className="text-gold">{year}</span>
                <span className="text-muted text-xs font-normal">
                  {rows.length} post{rows.length === 1 ? '' : 's'}
                </span>
              </summary>
              <ul className="px-4 pb-4 space-y-1.5">
                {rows.map((i) => (
                  <li key={i.id} className="text-sm leading-snug">
                    <a
                      href={i.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-starwhite/90 hover:text-gold transition-colors"
                    >
                      {i.title}
                    </a>{' '}
                    <span className="text-muted text-xs whitespace-nowrap">
                      · {KIND_LABEL[i.kind]}
                      {i.period ? ` · ${i.period}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
            </details>
          )
        })}
      </div>
    </section>
  )
}
