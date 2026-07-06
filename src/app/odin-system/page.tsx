import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { PageSources } from '@/components/PageSources'
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
    images: [
      {
        url: '/images/headers/odin-system.jpg',
        width: 1920,
        height: 1080,
        alt: "Two dark Aegis Eclipse stealth bombers flying in formation high above a planet's pale blue, cloud-mottled surface.",
      },
    ],
  },
}

const faqs = [
  {
    q: 'What is the Odin system in Squadron 42?',
    a: "The Odin system is the primary star system in which Squadron 42's campaign takes place, named by CIG in the Q3 2025 Squadron 42 subscriber newsletter. In Star Citizen lore it is a dead system centered on a white dwarf star.",
  },
  {
    q: 'What is the Coil?',
    a: "In official lore, the Coil is the debris field left behind by Odin's destroyed first planet — a shifting cloud of planetary fragments, minerals, and electromagnetic 'arc charge' storms deadly to ships. It is mined for valuable ore despite the danger, and its labyrinthine tunnels are a known pirate hiding spot.",
  },
  {
    q: 'Is Odin a real star system?',
    a: 'No — Odin is a fictional star system in the Star Citizen universe. CIG introduced it in November 2012 and detailed its lore in the official Galactic Guide: Odin System comm-link in April 2014.',
  },
  {
    q: "What is Fortune's Cross?",
    a: "Fortune's Cross is a station within the Odin system, named in the Q3 2025 Squadron 42 subscriber newsletter as one of the key locations in the campaign setting.",
  },
  {
    q: 'Why is the Odin system dangerous?',
    a: "Per CIG's official lore, the system combines environmental hazards — the Coil's arc-charge energy storms and magnetic aurora phenomena tied to the white dwarf — with human ones: as legitimate industry declined, criminal elements moved in.",
  },
]

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Game Setting"
        title="The Odin System"
        description="The primary star system setting for Squadron 42, revealed in the Q3 2025 subscriber newsletter. All details sourced from official CIG communications."
        image="/images/headers/odin-system.jpg"
        imageAlt="Two dark Aegis Eclipse stealth bombers flying in formation high above a planet's pale blue, cloud-mottled surface."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                The Odin system is the star system where Squadron 42&apos;s
                campaign takes place.
              </strong>{' '}
              In Star Citizen lore it is a dead system — its star destroyed the
              local biospheres during a red giant phase before collapsing into a
              white dwarf — now dotted with mining outposts, testing facilities,
              and the Coil, a vast debris field of planetary fragments and
              electrical storms. CIG named Odin as the game&apos;s primary
              setting in the Q3 2025 subscriber newsletter, with locations
              including Fortune&apos;s Cross station and the Coil.
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  What Is the Odin System?
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The Odin system is the primary star system in which Squadron 42&apos;s campaign
                  takes place. It is centered on a white dwarf star — a dense stellar remnant — and
                  was named as the game&apos;s main setting by CIG in the Q3 2025 Squadron 42
                  subscriber newsletter. The system itself is much older than the game: CIG
                  introduced Odin to the Star Citizen universe in November 2012 and published its
                  full lore profile in the official Galactic Guide series in April 2014.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20745-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Q3 2025 Squadron 42 Newsletter →
                  </a>
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/12768-Unlocked-Odin-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Unlocked: Odin System (2012) →
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  A Dead System, by Official Lore
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  CIG&apos;s Galactic Guide tells Odin&apos;s backstory in-universe. First
                  discovered by humanity in 2532, the system once showed evidence of vibrant
                  ecosystems — until its star entered a red giant phase, swallowing the first
                  planet outright and boiling away the biospheres of the rest before collapsing
                  into the white dwarf that remains today. Explorers found only icy rock worlds.
                  With no terraforming candidates, Odin was given over to industrial development:
                  mining outposts and refineries spread through the system, then declined as the
                  easily harvestable materials ran out. In the lore, that economic slide had a
                  familiar consequence — as legitimate businesses left, criminal elements moved in,
                  and Odin is now regarded as an unsavory system on the decline. It is, in other
                  words, a fitting stage for a war story.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/13815-Galactic-Guide-Odin-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Galactic Guide: Odin System (2014) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Key Locations
                </h2>
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
                      The most distinctive location in the system — and, per the Galactic Guide,
                      thought to be the remains of Odin&apos;s destroyed first planet. The Coil is
                      a seemingly unending cloud of planetary fragments, minerals, and
                      electromagnetic energy surges. Its &ldquo;arc charges&rdquo; — deadly
                      electrical storms caused by the exposed planetary core&apos;s iron reacting
                      with stellar remnants — destroy ships caught in them, so mining crews work
                      only the temporarily safe pockets that appear in the shifting cloud. The
                      guide adds two more hazards: the labyrinthine tunnels are a long-standing
                      pirate hiding spot, and the ore inside is valuable enough that people keep
                      going in anyway. The Coil also featured in an Around the Verse developer
                      update as a key hazardous location in Squadron 42.
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Rest of the System
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The Galactic Guide fills in the remaining worlds. Gainey, the former moon of the
                  destroyed first planet, still drifts near the Coil and hosts small gas-extraction
                  operations. Odin II — believed to have sat in the star&apos;s habitable band
                  before the collapse — is now a frigid world used mostly by companies and
                  scientists wanting isolated testing facilities; its moon Villi is home to Raleigh
                  Station, a snowy outpost originally built by a now-defunct weapons-testing
                  company. Odin III is a dead world whose surface may preserve more of the
                  system&apos;s fossil record. Odin IV, a gas giant, supports a hydrogen rendering
                  station in orbit so automated that supplier crews rarely meet its occupants. The
                  guide&apos;s own travel advice for the system is blunt: if you go to Odin, stay
                  very alert.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/13815-Galactic-Guide-Odin-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Galactic Guide: Odin System (2014) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Conflict
                </h2>
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

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map(({ q, a }) => (
                    <div key={q}>
                      <h3 className="text-starwhite font-semibold text-sm">{q}</h3>
                      <p className="text-muted text-sm leading-relaxed mt-2">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>

      <PageSources route="/odin-system" />
    </>
  )
}
