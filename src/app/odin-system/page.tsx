import type { Metadata } from 'next'
import Link from 'next/link'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: "Odin System — Squadron 42's Primary Setting",
  description:
    "The Odin system is the primary star system setting for Squadron 42 — a white dwarf system containing Fortune's Cross station, The Coil tunnel network, and magnetic aurora phenomena.",
  alternates: { canonical: '/odin-system' },
  openGraph: {
    title: "Odin System — Squadron 42's Primary Setting",
    description:
      "Everything officially confirmed about the Odin system in Squadron 42 — Fortune's Cross, The Coil, and the white dwarf.",
    url: '/odin-system',
  },
}

export default function OdinSystemPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Odin System',
        item: `${SITE.url}/odin-system`,
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
            <header className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Game Setting
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">The Odin System</h1>
              <p className="text-muted text-base">
                The primary star system setting for Squadron 42, revealed in the Q3 2025
                subscriber newsletter. All details sourced from official CIG communications.
              </p>
            </header>

            <div className="max-w-2xl space-y-10">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What Is the Odin System?
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The Odin system is the primary star system in which Squadron 42&apos;s campaign
                  takes place. It is centered on a white dwarf star — a dense stellar remnant — and
                  was revealed by CIG in the Q3 2025 Squadron 42 subscriber newsletter. This was
                  the first official disclosure of the game&apos;s main setting.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20745-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Q3 2025 Squadron 42 Newsletter →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Key Locations
                </p>
                <div className="space-y-6">
                  <div className="card-surface p-5">
                    <p className="text-starwhite font-semibold text-sm mb-2">
                      Fortune&apos;s Cross Station
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      A station within the Odin system, named in the Q3 2025 newsletter as one of
                      the key locations in the campaign setting.
                    </p>
                  </div>
                  <div className="card-surface p-5">
                    <p className="text-starwhite font-semibold text-sm mb-2">
                      The Coil
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      A network of tunnels within the Odin system, described in the Q3 2025
                      newsletter. The Coil was also featured in an Around the Verse developer
                      update that highlighted it as a key hazardous location in Squadron 42.
                    </p>
                    <p className="mt-3">
                      <a
                        href="https://www.youtube.com/watch?v=Yi9WdFRq8oA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold text-xs hover:text-goldDark transition-colors"
                      >
                        Source: CIG YouTube — Around the Verse: Welcome to the Coil →
                      </a>
                    </p>
                  </div>
                  <div className="card-surface p-5">
                    <p className="text-starwhite font-semibold text-sm mb-2">
                      Magnetic Aurora Phenomena
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      The Q3 2025 newsletter described magnetic aurora phenomena occurring within
                      the Odin system — visual and potentially gameplay-affecting environmental
                      features tied to the white dwarf star&apos;s properties.
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20745-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Q3 2025 Newsletter (Odin System) →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Conflict
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The Odin system is the setting for the ongoing conflict between the United Empire
                  of Earth Navy — the military organization the player joins — and the Vanduul alien
                  faction. The player&apos;s campaign unfolds across this system and its key
                  locations.
                </p>
                <div className="mt-3 flex gap-6">
                  <Link
                    href="/vanduul"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Learn about the Vanduul →
                  </Link>
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20745-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Q3 2025 Newsletter →
                  </a>
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
