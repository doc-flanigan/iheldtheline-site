import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { CAST } from '@/data/cast'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Cast — Mark Hamill, Gary Oldman, Gillian Anderson & More',
  description:
    'The confirmed cast of Squadron 42 — Mark Hamill, Gary Oldman, Gillian Anderson, Henry Cavill, Andy Serkis, Liam Cunningham, Mark Strong, Sophie Wu, Ben Mendelsohn, and John Rhys-Davies. Roles, characters, and official CIG sources.',
  alternates: { canonical: '/cast' },
  openGraph: {
    title: 'Squadron 42 Cast — Mark Hamill, Gary Oldman, Gillian Anderson & More',
    description:
      'Every confirmed cast member in Squadron 42 with their character, role, and official CIG source.',
    url: '/cast',
    images: [
      {
        url: '/images/headers/cast.jpg',
        width: 1920,
        height: 1080,
        alt: 'A female Star Citizen pilot in a dark flight helmet with glowing cyan accents, her face warmly lit inside a dim ship interior.',
      },
    ],
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
      <PageHeader
        eyebrow="Confirmed Cast"
        title="Squadron 42 Cast"
        description="Squadron 42 features a star-studded cast with full motion-capture performances throughout. All cast members confirmed via official Cloud Imperium Games sources."
        image="/images/headers/cast.jpg"
        imageAlt="A female Star Citizen pilot in a dark flight helmet with glowing cyan accents, her face warmly lit inside a dim ship interior."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
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
                    className="rounded object-cover shrink-0 bg-navyLight"
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

            <p className="mt-10 text-xs text-muted">
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
