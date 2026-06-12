import type { Metadata } from 'next'
import Link from 'next/link'
import Sidebar from '@/components/sidebar/Sidebar'
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
  },
}

export default function VanduulPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'The Vanduul', item: `${SITE.url}/vanduul` },
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
                Enemy Faction
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">The Vanduul</h1>
              <p className="text-muted text-base">
                The primary antagonist faction in Squadron 42. Everything below is sourced
                exclusively from official Cloud Imperium Games communications.
              </p>
            </header>

            <div className="max-w-2xl space-y-10">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Who Are the Vanduul?
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The Vanduul are a hostile alien species that serves as the primary enemy faction
                  in Squadron 42. The player, as a new recruit in the United Empire of Earth Navy,
                  fights against the Vanduul as part of the campaign&apos;s central military
                  conflict. CIG has described them as a species with a distinct culture, language,
                  and combat style — not simply background enemies, but a developed faction central
                  to the game&apos;s story.
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
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  The Vanduul Language
                </p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Andy Serkis as a Vanduul Character
                </p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  In the Campaign
                </p>
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
