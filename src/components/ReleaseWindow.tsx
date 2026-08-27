'use client'
import { useEffect, useState } from 'react'
import { RELEASE } from '@/data/release'

const DAY_MS = 1000 * 60 * 60 * 24

function startMs(): number {
  return new Date(RELEASE.windowStart + 'T00:00:00').getTime()
}

function endMs(): number {
  return new Date(RELEASE.windowEnd + 'T23:59:59').getTime()
}

function announcedMs(): number {
  return new Date(RELEASE.announced + 'T00:00:00').getTime()
}

type Phase = 'before' | 'during' | 'after'

function getPhase(now: number): Phase {
  if (now < startMs()) return 'before'
  if (now > endMs()) return 'after'
  return 'during'
}

// Before the window opens the bar tracks the run-up from the announcement to
// the start of the window; once it opens it tracks the window itself.
function getProgressPercent(now: number, phase: Phase): number {
  if (phase === 'after') return 100
  const [from, to] = phase === 'before' ? [announcedMs(), startMs()] : [startMs(), endMs()]
  return Math.min(100, Math.max(0, ((now - from) / (to - from)) * 100))
}

function getDaysUntil(target: number, now: number): number {
  return Math.max(0, Math.ceil((target - now) / DAY_MS))
}

export default function ReleaseWindow() {
  // Seeded with the pre-window phase rather than the live one: server and first
  // client render must agree, so the real phase is resolved after mount.
  const [phase, setPhase] = useState<Phase>('before')
  const [days, setDays] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const now = Date.now()
    const p = getPhase(now)
    setPhase(p)
    setDays(getDaysUntil(p === 'before' ? startMs() : endMs(), now))
    // Small delay lets the CSS transition animate on mount
    const id = setTimeout(() => setProgress(getProgressPercent(now, p)), 50)
    return () => clearTimeout(id)
  }, [])

  const leftLabel = phase === 'before' ? RELEASE.announcedLabel : RELEASE.startLabel
  const rightLabel = phase === 'before' ? RELEASE.startLabel : RELEASE.endLabel

  let status = `${RELEASE.label} window`
  if (phase === 'after') status = 'Window ended — awaiting new date'
  else if (days !== null) {
    const unit = `${days} day${days !== 1 ? 's' : ''}`
    status = phase === 'before' ? `${unit} until window opens` : `${unit} remaining`
  }

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
          {RELEASE.label} Release Window
        </p>

        <div className="flex justify-between text-xs text-muted mb-2 gap-3">
          <span>{leftLabel}</span>
          <span>{status}</span>
          <span>{rightLabel}</span>
        </div>

        <div
          className="bg-navy rounded-full h-3 overflow-hidden border border-gold/20"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={
            phase === 'before'
              ? `${Math.round(progress)}% of the wait until CIG's ${RELEASE.label} release window opens`
              : `${Math.round(progress)}% through CIG's ${RELEASE.label} release window`
          }
        >
          <div
            className="h-full bg-gradient-to-r from-gold to-goldDark rounded-full transition-[width] duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-muted text-xs mt-4 leading-relaxed">
          {phase === 'after' ? RELEASE.windowPassedNote : RELEASE.disclaimer}
        </p>
      </div>
    </section>
  )
}

// Defined here to avoid importing SITE in a client component (keeps bundle small)
const SITE_TAGLINE = 'Tracking Squadron 42 — the single-player campaign from Cloud Imperium Games'
