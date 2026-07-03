import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="relative bg-navy bg-[url('/images/hero/hero-01.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy pointer-events-none" />
      <div className="relative container-wide flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
          Signal Lost
        </p>
        <h1 className="heading-display text-6xl sm:text-8xl mb-4">404</h1>
        <p className="text-starwhite text-lg font-semibold mb-2">
          You&apos;ve drifted off course, Citizen.
        </p>
        <p className="text-muted text-base max-w-md mb-10">
          This page doesn&apos;t exist — but the line still holds. Head back to the tracker or
          catch up on the latest Squadron 42 news.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-navy hover:bg-goldDark transition-colors"
          >
            Back to the tracker
          </Link>
          <Link
            href="/news"
            className="text-gold text-sm font-semibold hover:text-goldDark transition-colors"
          >
            Latest news →
          </Link>
        </div>
      </div>
    </main>
  )
}
