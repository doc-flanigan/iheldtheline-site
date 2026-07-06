import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import SpeechQuote from '@/components/SpeechQuote'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: "The Vanduul — Squadron 42's Primary Enemy Faction",
  description:
    "The Vanduul are the primary enemy alien faction in Squadron 42. Here's what CIG has officially revealed about them — language, intercepted communications, and their role in the campaign.",
  alternates: { canonical: '/vanduul' },
  openGraph: {
    title: "The Vanduul — Squadron 42's Primary Enemy Faction",
    description:
      'Everything officially confirmed about the Vanduul alien faction in Squadron 42, from RSI comm-links and newsletters.',
    url: '/vanduul',
    images: [
      {
        url: '/images/headers/vanduul.jpg',
        width: 1920,
        height: 1080,
        alt: 'A Vanduul fighter with a long blade-like wing and red-lit cockpit banking through dark space, engines flaring behind it.',
      },
    ],
  },
}

const faqs = [
  {
    q: 'Who are the Vanduul in Squadron 42?',
    a: 'The Vanduul are the hostile alien species the player fights as a new recruit in the United Empire of Earth Navy. CIG has developed them as a full faction with their own culture, constructed language, and combat style — not generic background enemies.',
  },
  {
    q: 'When did the Vanduul first attack humanity?',
    a: "In Star Citizen's official lore, first contact came on August 9, 2681, when a Vanduul raiding party struck the human colony on Armitage in the Orion system and slaughtered the colonists. The UEE had no prior warning that an aggressor species existed in the region.",
  },
  {
    q: 'Why do the Vanduul attack human worlds?',
    a: "Per CIG's official Galactic Guide lore, Vanduul warrior clans travel nomadically and revisit worlds they have identified as reservoirs of natural resources. They considered Armitage a 'feeding world' — territory they harvested — and treated the human settlement there accordingly.",
  },
  {
    q: 'What is a Vanduul Kingship?',
    a: 'A Vanduul capital ship class. In the official lore, the first Kingship humanity ever encountered entered the Orion system on February 16, 2712 — the battle that followed ended with the UEE abandoning Orion to the Vanduul.',
  },
  {
    q: 'Do the Vanduul have their own language?',
    a: 'Yes. The March 2025 Squadron 42 subscriber newsletter revealed that CIG built a constructed language for the species, and included intercepted in-universe Vanduul communications plus a community contest to interpret six Vanduul phrases.',
  },
  {
    q: 'Who plays a Vanduul character in Squadron 42?',
    a: 'Andy Serkis is officially confirmed as portraying a Vanduul character, performed with full motion capture — the same approach CIG used for the rest of the cast. The specific character has not been officially named.',
  },
]

export default function VanduulPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'The Vanduul', item: `${SITE.url}/vanduul` },
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
        eyebrow="Enemy Faction"
        title="The Vanduul"
        description="The primary antagonist faction in Squadron 42. Everything below is sourced exclusively from official Cloud Imperium Games communications."
        image="/images/headers/vanduul.jpg"
        imageAlt="A Vanduul fighter with a long blade-like wing and red-lit cockpit banking through dark space, engines flaring behind it."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                The Vanduul are the alien enemy of Squadron 42 — a nomadic
                species organized into warrior clans that, in Star Citizen
                lore, has been raiding human space since 2681.
              </strong>{' '}
              In the game, you fight them as a new recruit in the United Empire
              of Earth Navy. CIG has built them out as a genuine faction: Andy
              Serkis plays a Vanduul character in full motion capture, and the
              species has its own constructed language, revealed in an official
              2025 newsletter.
            </p>

            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Who Are the Vanduul?
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The Vanduul are a hostile alien species that serves as the primary enemy faction
                  in Squadron 42. The player, as a new recruit in the United Empire of Earth Navy,
                  fights against the Vanduul as part of the campaign&apos;s central military
                  conflict. CIG has described them as a species with a distinct culture, language,
                  and combat style — not simply background enemies, but a developed faction central
                  to the game&apos;s story. In the universe&apos;s lore, they are nomads: warrior
                  clans that move through space harvesting resources from worlds they regard as
                  their own, regardless of who happens to be living there.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20262-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — CitizenCon 2954 Gameplay Reveal →
                  </a>
                </p>
                <SpeechQuote
                  quote="We cannot give the Vanduul any more ground."
                  className="mt-6"
                />
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  First Contact: Armitage, 2681
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The lore behind the war predates Squadron 42 by decades of in-universe history,
                  laid out in CIG&apos;s official Galactic Guide series. On August 9, 2681,
                  humanity met the Vanduul for the first time when a heavily armed raiding party
                  struck the main colonial post on Armitage, in the Orion system, and slaughtered
                  the colonists. The UEE was caught completely by surprise — there had been no
                  indication of an aggressor species in the region. Researchers later concluded
                  that the Vanduul considered Armitage a &ldquo;feeding world&rdquo;: their clans
                  travel nomadically, revisiting places they have marked as reservoirs of natural
                  resources, and by their reckoning Armitage was already theirs. Raids continued —
                  outposts in Orion were hit fifteen times in the first year alone.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/13061-Galactic-Guide-Orion-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Galactic Guide: Orion System →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  How Humanity Lost Three Systems
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The official lore charts a long human retreat. In 2712, a Vanduul Kingship — the
                  first capital ship of its kind humanity had ever encountered — entered the Orion
                  system, and the UEE ultimately abandoned Orion to the Vanduul. The front moved to
                  Tiber, where a four-year sustained engagement known as the Siege of Tiber ended
                  with the line cracking in 2736; the system&apos;s battle-scarred debris fields
                  earned it the nickname &ldquo;the Grinder.&rdquo; The Vanduul then flooded into
                  Virgil before a proper defense could be mounted, pulverizing its colony world
                  with bombing raids. Three systems, one enemy — that is the history sitting behind
                  the war the player joins in Squadron 42.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/13614-Galactic-Guide-Tiber-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: Galactic Guide: Tiber System →
                  </a>
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/spectrum-dispatch/14437-Galactic-Guide-Virgil-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: Galactic Guide: Virgil System →
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Vanduul Language
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The March 2025 Squadron 42 subscriber newsletter focused on the Vanduul and
                  revealed that CIG has developed a constructed language for the species. The
                  newsletter included intercepted in-universe Vanduul communication samples and
                  launched a community contest challenging subscribers to interpret six Vanduul
                  phrases and submit video entries. This confirms the faction has a fully developed
                  fictional language, not merely generic alien sounds.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20432-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Vanduul Newsletter March 2025 →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Andy Serkis as a Vanduul Character
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Andy Serkis — known for his motion-capture work on major film productions — is
                  confirmed as part of the Squadron 42 cast, portraying a Vanduul character. His
                  performance uses full motion-capture technology, the same approach CIG used for
                  the entire celebrity cast. This makes the Vanduul a more prominent presence in
                  the narrative than a purely background enemy faction.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20401-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Cast Announcement →
                  </a>
                </p>
                <div className="mt-3">
                  <Link
                    href="/cast/andy-serkis"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    View Andy Serkis cast page →
                  </Link>
                </div>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  In the Campaign
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The CitizenCon 2954 gameplay reveal showed the player&apos;s first encounter
                  with the Vanduul during the game&apos;s prologue — a confrontation aboard the
                  player&apos;s ship that escalates from an alert to direct combat. The Odin system
                  — revealed as the primary setting for Squadron 42 in the Q3 2025 newsletter — is
                  the location of ongoing conflict between the UEE and the Vanduul.
                </p>
                <div className="mt-3 space-x-4 flex gap-4">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20262-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — CitizenCon 2954 →
                  </a>
                  <Link
                    href="/odin-system"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Learn about the Odin System →
                  </Link>
                  <a
                    href="https://42ndsquadron.com/vanduul"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Full Vanduul lore dossier at 42ndsquadron.com →
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

      <PageSources route="/vanduul" />
    </>
  )
}
