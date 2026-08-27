import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import CTAButton from '@/components/CTAButton'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: "Squadron 42 vs Star Citizen — Differences",
  description:
    'Squadron 42 is a standalone single-player game. Star Citizen is an online multiplayer universe. Here are the key differences explained from official CIG sources.',
  alternates: { canonical: '/sq42-vs-star-citizen' },
  openGraph: {
    title: "Squadron 42 vs Star Citizen — What's the Difference?",
    description:
      'Key differences between Squadron 42 and Star Citizen — single-player vs multiplayer, one purchase vs two, and more.',
    url: '/sq42-vs-star-citizen',
    images: [
      {
        url: '/images/headers/sq42-vs-star-citizen.jpg',
        width: 1920,
        height: 1079,
        alt: "Viewed from beneath a UEE fighter's missile-laden wing, an enemy ship erupts in a burst of sparks and flame against a cratered moon.",
      },
    ],
  },
}

const faqs = [
  {
    q: 'Is Squadron 42 part of Star Citizen?',
    a: 'No. Squadron 42 is a separate, standalone single-player title. Star Citizen — the live multiplayer game — has no single-player campaign mode. The two are companion projects set in the same universe, sold as distinct products.',
  },
  {
    q: 'Do I need Star Citizen to play Squadron 42?',
    a: 'No. Squadron 42 is fully standalone and does not require Star Citizen, an internet connection, or any familiarity with the multiplayer game.',
  },
  {
    q: 'Can I play Squadron 42 right now?',
    a: 'No. Squadron 42 has not released — CIG is targeting Q2 2027, set in the August 2026 Letter from the Chairman after the earlier 2026 window was dropped. Star Citizen, by contrast, is playable now in ongoing alpha.',
  },
  {
    q: 'Does buying Star Citizen include Squadron 42?',
    a: 'No. They are sold separately on the Roberts Space Industries store. Some historical pledge packages bundled both games, but buying one today does not include the other.',
  },
  {
    q: 'Will my progress carry over between the two games?',
    a: 'Cloud Imperium Games has not officially announced any cross-game progression between Squadron 42 and Star Citizen. Until CIG says otherwise, treat them as fully separate.',
  },
  {
    q: 'Are they made by the same studio?',
    a: 'Yes. Both are developed by Cloud Imperium Games and run on Star Engine, CIG\'s proprietary engine — a heavily modified derivative of CryEngine built over many years for both projects.',
  },
]

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
        eyebrow="Comparison"
        title="Squadron 42 vs Star Citizen"
        description="Two games, one universe. Here's how they differ — from official CIG sources only."
        image="/images/headers/sq42-vs-star-citizen.jpg"
        imageAlt="Viewed from beneath a UEE fighter's missile-laden wing, an enemy ship erupts in a burst of sparks and flame against a cratered moon."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Squadron 42 and Star Citizen are two separate games set in the
                same universe, made by the same studio, and sold separately.
              </strong>{' '}
              Squadron 42 is a single-player, story-driven campaign you can play
              offline; it has not released yet, and CIG is targeting Q2 2027. Star
              Citizen is an online multiplayer universe that is playable right
              now in ongoing alpha. Buying one does not include the other.
            </p>

            {/* At a glance — restates facts covered in the table and FAQ below */}
            <section className="max-w-2xl mb-10 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                At a Glance
              </h2>
              <ul className="text-muted text-sm leading-relaxed space-y-1.5 list-disc pl-4">
                <li>Two separate games, sold separately — buying one does not include the other.</li>
                <li>Squadron 42: standalone single-player campaign, playable offline, not yet released. CIG is targeting Q2 2027, announced August 2026.</li>
                <li>Star Citizen: online multiplayer universe, playable now in ongoing alpha.</li>
                <li>Both are built by Cloud Imperium Games on Star Engine.</li>
              </ul>
              <p className="text-muted/70 text-xs mt-3">
                Page reviewed August 27, 2026 — sourced from official CIG communications only.
              </p>
            </section>

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
                    ['Status', 'Targeting Q2 2027 release', 'Playable now (Alpha)'],
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Single-player vs Multiplayer
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 is a fully single-player experience — a story-driven military
                  campaign with a beginning, middle, and end. You play a new recruit in the United
                  Empire of Earth Navy, working through a scripted story performed by a full
                  motion-capture cast that includes Mark Hamill, Gary Oldman, and Gillian Anderson.
                  You play alone, offline if you choose, and when the campaign ends, the game ends.
                </p>
                <p className="text-muted text-sm leading-relaxed mt-3">
                  Star Citizen is the opposite shape of game: an online multiplayer persistent
                  universe where players share a live galaxy. There is no campaign and no ending —
                  you fly cargo, take missions, mine, fight, and explore alongside other players in
                  an open sandbox that CIG updates continuously. CIG describes the two as companion
                  projects rather than one being a mode of the other.
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  One Is Out. One Isn&apos;t.
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  This is the difference that trips people up most. Star Citizen is playable today
                  — it has been in continuous, publicly playable alpha development for years, with
                  a live server you can log into right now. Squadron 42 has never been released in any form. CIG
                  announced a 2026 launch window at CitizenCon 2954 (October 2024), then moved it
                  to Q2 2027 in the August 27, 2026 Letter from the Chairman to avoid launching
                  alongside GTA 6. The game is content complete — every chapter playable from
                  beginning to end internally — with polish, optimization, and bug fixing
                  remaining. No exact date has been announced.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/21301-Letter-From-The-Chairman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Letter From The Chairman (August 2026) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Separate Purchases
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 and Star Citizen are sold as distinct products on the Roberts Space
                  Industries store. Some historical pledge packages bundled both together, but they
                  are currently separate purchases. Buying one does not include the other. CIG has
                  also not announced any cross-game progression — nothing you do in one game has
                  been officially confirmed to carry into the other.
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
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Announced Together, Shipping Apart
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  The two games have been intertwined since the very first announcement. Chris
                  Roberts unveiled Star Citizen and Squadron 42 together at GDC Online in Austin on
                  October 10, 2012 — Squadron 42 pitched as the Wing Commander-style single-player
                  component of the project. In the years since, the two efforts diverged into
                  separate products on separate schedules: Star Citizen opened its alpha to backers
                  and grew module by module, while Squadron 42 stayed behind closed doors — reaching
                  feature complete in October 2023 and content complete by May 2026.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/12730-A-Message-From-Chris-Roberts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — A Message From Chris Roberts (2012) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Same Universe, Same Engine
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Both games are set in the same fictional universe — the United Empire of Earth
                  (UEE) — and are built on Star Engine, CIG&apos;s proprietary engine, a heavily
                  modified derivative of CryEngine rebuilt over many years for both projects.
                  Ships, locations, and lore overlap: the Vanduul you fight in Squadron 42 are the
                  same species that exists in Star Citizen&apos;s lore. However, Squadron 42&apos;s
                  story and characters are self-contained within the single-player campaign.
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

              <section className="card-surface p-6">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Which One Should You Get?
                </h2>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  If what you want is the story campaign, there is nothing to play yet — Squadron
                  42 releases when it releases, and the only official window is Q2 2027. If you want
                  to fly in this universe today, Star Citizen is the game that exists. Use a
                  referral code when creating your account to start with bonus in-game credits.
                  Brand-new to Star Citizen? The plain-English getting-started guide at{' '}
                  <a
                    href="https://dayonecitizen.com"
                    className="text-gold hover:text-goldDark transition-colors"
                  >
                    dayonecitizen.com
                  </a>{' '}
                  covers your first session.
                </p>
                <CTAButton trackingLabel="SQ42 vs SC CTA" />
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

      <PageSources route="/sq42-vs-star-citizen" />
    </>
  )
}
