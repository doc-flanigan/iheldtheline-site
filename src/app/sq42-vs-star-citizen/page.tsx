import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: "Squadron 42 vs Star Citizen — What's the Difference?",
  description:
    'Squadron 42 is a standalone single-player game. Star Citizen is an online multiplayer universe. Here are the key differences explained from official CIG sources.',
  alternates: { canonical: '/sq42-vs-star-citizen' },
  openGraph: {
    title: "Squadron 42 vs Star Citizen — What's the Difference?",
    description:
      'Key differences between Squadron 42 and Star Citizen — single-player vs multiplayer, one purchase vs two, and more.',
    url: '/sq42-vs-star-citizen',
  },
}

export default function Sq42VsStarCitizenPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'SQ42 vs Star Citizen',
        item: `${SITE.url}/sq42-vs-star-citizen`,
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
                Comparison
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                Squadron 42 vs Star Citizen
              </h1>
              <p className="text-muted text-base">
                Two games, one universe. Here&apos;s how they differ — from official CIG sources
                only.
              </p>
            </header>

            {/* Comparison table */}
            <div className="max-w-2xl mb-14 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-muted py-3 pr-6 w-40">
                      &nbsp;
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gold py-3 pr-6">
                      Squadron 42
                    </th>
                    <th className="text-left text-xs font-semibold uppercase tracking-[0.15em] text-gold py-3">
                      Star Citizen
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Mode', 'Single-player', 'Multiplayer (online)'],
                    ['Internet required', 'No — offline capable', 'Yes — always online'],
                    ['Status', 'Targeting 2026 release', 'Playable now (Alpha)'],
                    ['Purchase', 'Sold separately', 'Sold separately'],
                    ['Setting', 'Same universe', 'Same universe'],
                    ['Engine', 'Star Engine (shared)', 'Star Engine (shared)'],
                    ['Campaign length', '40+ hours confirmed', 'No campaign — open world'],
                  ].map(([label, sq42, sc]) => (
                    <tr key={label}>
                      <td className="py-3 pr-6 text-muted font-medium">{label}</td>
                      <td className="py-3 pr-6 text-starwhite">{sq42}</td>
                      <td className="py-3 text-starwhite">{sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-3">
                <a
                  href="https://robertsspaceindustries.com/en/store/pledge/browse/game-packages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-goldDark transition-colors"
                >
                  Source: RSI Store — Game Packages →
                </a>
              </p>
            </div>

            <div className="max-w-2xl space-y-10">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Single-player vs Multiplayer
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 is a fully single-player experience — a story-driven military
                  campaign with a beginning, middle, and end. You play alone, offline if you choose.
                  Star Citizen is an online multiplayer persistent universe where players share a
                  live galaxy. CIG describes them as companion projects rather than one being a mode
                  of the other.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/store/pledge/browse/sq42"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Store — Squadron 42 →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Separate Purchases
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 and Star Citizen are sold as distinct products on the Roberts Space
                  Industries store. Some historical pledge packages bundled both together, but they
                  are currently separate purchases. Buying one does not include the other.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/store/pledge/browse/game-packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Store — Browse Packages →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Same Universe, Same Engine
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Both games are set in the same fictional universe — the United Empire of Earth
                  (UEE) — and are built on the same proprietary engine (Star Engine). Ships,
                  locations, and lore overlap. However, Squadron 42&apos;s story and characters are
                  self-contained within the single-player campaign.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20262-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — CitizenCon 2954 →
                  </a>
                </p>
              </section>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
