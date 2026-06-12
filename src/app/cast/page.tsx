import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from '@/components/sidebar/Sidebar'
import { CAST } from '@/data/cast'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Cast — Mark Hamill, Gary Oldman, Gillian Anderson & More',
  description:
    'The confirmed cast of Squadron 42 — Mark Hamill, Gary Oldman, Gillian Anderson, Henry Cavill, Andy Serkis, and John Rhys-Davies. Roles, characters, and official CIG sources.',
  alternates: { canonical: '/cast' },
  openGraph: {
    title: 'Squadron 42 Cast — Mark Hamill, Gary Oldman, Gillian Anderson & More',
    description:
      'Every confirmed cast member in Squadron 42 with their character, role, and official CIG source.',
    url: '/cast',
  },
}

export default function CastPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Cast', item: `${SITE.url}/cast` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <header className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Confirmed Cast
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">Squadron 42 Cast</h1>
              <p className="text-muted text-base">
                Squadron 42 features a star-studded cast with full motion-capture performances
                throughout. All cast members confirmed via official Cloud Imperium Games sources.
              </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
              {CAST.map((member) => (
                <Link
                  key={member.slug}
                  href={`/cast/${member.slug}`}
                  className="card-surface p-6 flex gap-4 items-start hover:border-gold/30 transition-colors group"
                >
                  <Image
                    src={member.img}
                    alt={member.actor}
                    width={56}
                    height={72}
                    className="rounded object-cover shrink-0"
                  />
                  <div>
                    <h2 className="text-starwhite font-bold text-base leading-tight group-hover:text-gold transition-colors">
                      {member.actor}
                    </h2>
                    <p className="text-gold text-sm mt-0.5">{member.character}</p>
                    <p className="text-muted text-xs mt-1 leading-snug">{member.role}</p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-xs text-muted/60">
              Source:{' '}
              <a
                href="https://robertsspaceindustries.com/comm-link/SCW/20401-API"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-goldDark transition-colors"
              >
                RSI Comm-Link — Cast Announcement →
              </a>
            </p>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
