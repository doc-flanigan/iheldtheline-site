import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Sidebar from '@/components/sidebar/Sidebar'
import { CAST } from '@/data/cast'
import { SITE } from '@/data/site'

export function generateStaticParams() {
  return CAST.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const member = CAST.find((m) => m.slug === slug)
  if (!member) return {}

  return {
    title: `${member.actor} in Squadron 42 — ${member.character}`,
    description: `${member.actor} plays ${member.character} in Squadron 42. ${member.bio.split('.')[0]}.`,
    alternates: { canonical: `/cast/${slug}` },
    openGraph: {
      title: `${member.actor} in Squadron 42 — ${member.character}`,
      description: `${member.actor} plays ${member.character} in Squadron 42.`,
      url: `/cast/${slug}`,
    },
  }
}

export default async function CastMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const member = CAST.find((m) => m.slug === slug)
  if (!member) notFound()

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Cast', item: `${SITE.url}/cast` },
      {
        '@type': 'ListItem',
        position: 3,
        name: member.actor,
        item: `${SITE.url}/cast/${slug}`,
      },
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
            <Link
              href="/cast"
              className="text-gold text-xs hover:text-goldDark transition-colors mb-10 inline-block"
            >
              ← Back to Cast
            </Link>

            <div className="flex gap-6 items-start mb-12 max-w-2xl">
              <Image
                src={member.img}
                alt={member.actor}
                width={96}
                height={128}
                className="rounded object-cover shrink-0"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
                  Confirmed Cast
                </p>
                <h1 className="heading-display text-4xl sm:text-5xl mb-2">{member.actor}</h1>
                <p className="text-gold text-xl font-semibold mb-1">{member.character}</p>
                <p className="text-muted text-sm">{member.role}</p>
              </div>
            </div>

            <section className="max-w-2xl space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Role in Squadron 42
                </p>
                <p className="text-muted text-base leading-relaxed">{member.bio}</p>
                <p className="mt-3">
                  <a
                    href={member.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: {member.officialSourceLabel} →
                  </a>
                </p>
              </div>

              {member.slug === 'mark-hamill' && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                    Behind the Scenes
                  </p>
                  <p className="text-muted text-sm leading-relaxed">
                    Cloud Imperium Games released a behind-the-scenes video of Hamill&apos;s
                    motion-capture recording session in November 2015, along with a short character
                    teaser introducing Steve &quot;Old Man&quot; Colton.
                  </p>
                  <p className="mt-3 space-x-4">
                    <a
                      href="https://www.youtube.com/watch?v=3vRE6LtYBHg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-xs hover:text-goldDark transition-colors"
                    >
                      Source: Behind the Scenes — Mark Hamill (CIG YouTube) →
                    </a>
                  </p>
                </div>
              )}

              <div className="card-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">
                  About the Game
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 is a standalone single-player campaign set in the Star Citizen
                  universe. CIG has confirmed a 2026 release target. All cast performances were
                  recorded with full motion-capture technology.
                </p>
                <Link
                  href="/cast"
                  className="text-gold text-xs hover:text-goldDark transition-colors mt-3 inline-block"
                >
                  ← View full cast →
                </Link>
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
