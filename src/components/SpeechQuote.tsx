import Link from 'next/link'

type SpeechQuoteProps = {
  /** Short verbatim fragment from Bishop's Senate speech, without surrounding quote marks. */
  quote: string
  /** Hide the "full story" link (used on /bishops-speech itself). */
  noLink?: boolean
  className?: string
}

/**
 * Flavor blockquote for short, attributed fragments of Admiral Bishop's
 * Senate speech — the scene the site is named for. Keep fragments brief
 * (the speech is CIG's copyrighted script); the full performance is
 * linked, not reproduced.
 */
export default function SpeechQuote({ quote, noLink, className }: SpeechQuoteProps) {
  return (
    <figure className={`border-l-2 border-gold pl-5 py-1 ${className ?? ''}`}>
      <blockquote className="heading-display text-xl sm:text-2xl text-starwhite leading-snug">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-2 text-xs text-muted">
        Admiral Ernst Bishop (Gary Oldman) — Squadron 42, Senate speech
        {noLink ? null : (
          <>
            {' · '}
            <Link
              href="/bishops-speech"
              className="text-gold hover:text-goldDark transition-colors"
            >
              the speech, explained →
            </Link>
          </>
        )}
      </figcaption>
    </figure>
  )
}
