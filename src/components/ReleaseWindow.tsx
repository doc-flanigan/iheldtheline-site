'use client'
import { useEffect, useState } from 'react'
import { RELEASE } from '@/data/release'

function getDaysRemaining(): number {
  const now = new Date()
  const end = new Date(RELEASE.windowEnd + 'T23:59:59')
  const diff = end.getTime() - now.getTime()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

function getProgressPercent(): number {
  const now = new Date()
  const start = new Date(RELEASE.windowStart)
  const end = new Date(RELEASE.windowEnd + 'T23:59:59')
  const total = end.getTime() - start.getTime()
  const elapsed = now.getTime() - start.getTime()
  return Math.min(100, Math.max(0, (elapsed / total) * 100))
}

export default function ReleaseWindow() {
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setDaysRemaining(getDaysRemaining())
    // Small delay lets the CSS transition animate on mount
    const id = setTimeout(() => setProgress(getProgressPercent()), 50)
    return () => clearTimeout(id)
  }, [])

  return (
    <section
      className="min-h-[calc(100vh-56px)] flex flex-col items-center justify-center px-4 py-20 text-center"
      aria-label="Squadron 42 release window"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
        Squadron 42
      </p>

      <h1 className="heading-display text-5xl sm:text-7xl mb-4 leading-tight">
        I Held the Line
      </h1>

      <p className="text-muted text-base sm:text-lg max-w-xl mb-12">
        {SITE_TAGLINE}
      </p>

      {/* Progress bar panel */}
      <div className="w-full max-w-lg bg-navyLight border border-gold/30 rounded-xl p-6 shadow-[0_0_40px_rgba(200,160,74,0.06)]">
        <p className="text-gold text-xs uppercase tracking-[0.2em] font-semibold mb-5">
          {RELEASE.year} Release Window
        </p>

        <div className="flex justify-between text-xs text-muted mb-2">
          <span>Jan {RELEASE.year}</span>
          <span>
            {daysRemaining !== null
              ? `${daysRemaining} day${daysRemaining !== 1 ? 's' : ''} remaining`
              : `${RELEASE.year} window`}
          </span>
          <span>Dec {RELEASE.year}</span>
        </div>

        <div
          className="bg-navy rounded-full h-3 overflow-hidden border border-gold/20"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${Math.round(progress)}% through CIG's ${RELEASE.year} release window`}
        >
          <div
            className="h-full bg-gradient-to-r from-gold to-goldDark rounded-full transition-[width] duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-muted text-xs mt-4 leading-relaxed">{RELEASE.disclaimer}</p>
      </div>
    </section>
  )
}

// Defined here to avoid importing SITE in a client component (keeps bundle small)
const SITE_TAGLINE = 'Tracking Squadron 42 — the single-player campaign from Cloud Imperium Games'
