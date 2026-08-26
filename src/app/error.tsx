'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Google's renderer executes JS and honors a JS-injected robots meta tag.
    // Next's default error shell renders as an indexable 200 — without this,
    // that shell gets clustered with spam soft-404 space (747live.bet) and
    // Google hijacks the canonical for the real page. Keep error states out
    // of the index entirely.
    if (!document.querySelector('meta[name="robots"]')) {
      const meta = document.createElement('meta')
      meta.name = 'robots'
      meta.content = 'noindex'
      document.head.appendChild(meta)
    }
    document.title = 'Temporary error — iheldtheline.com'

    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
  }, [error])

  return (
    <main className="relative bg-navy bg-[url('/images/hero/hero-01.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy pointer-events-none" />
      <div className="relative container-wide flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
          Signal Interrupted
        </p>
        <h1 className="heading-display text-4xl sm:text-6xl mb-4">
          iheldtheline.com hit a temporary error
        </h1>
        <p className="text-muted text-base max-w-md mb-10">
          The content is still here — this page just stumbled loading it. Reload and the line
          holds again.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-goldDark transition-colors"
        >
          Reload
        </button>
      </div>
    </main>
  )
}
