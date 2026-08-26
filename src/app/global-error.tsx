'use client'

import { useEffect } from 'react'
import './globals.css'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Same reasoning as app/error.tsx: keep a broken root-layout render out
    // of the index so it can never be clustered with 747live.bet soft-404
    // space and hijack the real page's canonical.
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
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <title>Temporary error — iheldtheline.com</title>
      </head>
      <body className="bg-navy text-starwhite antialiased">
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
              The content is still here — this page just stumbled loading it. Reload and the
              line holds again.
            </p>
            <button
              onClick={() => reset()}
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-goldDark transition-colors"
            >
              Reload
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}
