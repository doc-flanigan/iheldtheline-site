import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import CTAButton from '@/components/CTAButton'
import { ScreenshotFigure } from '@/components/ScreenshotFigure'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

const HEADER_ALT =
  'Star Citizen — an Idris-class frigate landed on Euterpe. Screenshot via hasgaha.com.'

export const metadata: Metadata = {
  title: '42nd Squadron — The UEE Navy Unit at the Heart of Squadron 42',
  description:
    'The 42nd Squadron is the UEE Navy unit at the centre of Squadron 42. Its in-universe history, battles, and ships, from official CIG sources.',
  alternates: { canonical: '/42nd-squadron' },
  openGraph: {
    title: '42nd Squadron — The UEE Navy Unit at the Heart of Squadron 42',
    description:
      'In-universe history of the 42nd Squadron from official CIG newsletters and showcases.',
    url: '/42nd-squadron',
    images: [
      {
        url: '/images/42nd/idris-on-euterpe.jpg',
        width: 3360,
        height: 1440,
        alt: HEADER_ALT,
      },
    ],
  },
}

const CONFIRMED_DATA = [
  { element: 'Featured Unit', detail: '42nd Squadron, UEE Navy', source: 'RSI Comm-Link' },
  { element: 'Theater of Operations', detail: 'Odin system', source: 'RSI Comm-Link' },
  { element: 'Primary Adversary', detail: 'Vanduul', source: 'RSI Comm-Link' },
  { element: 'Source Newsletter', detail: '42nd Squadron — May 2025', source: 'RSI Comm-Link' },
]

const faqs = [
  {
    q: 'What is the 42nd Squadron in Star Citizen?',
    a: 'The 42nd Squadron is the United Empire of Earth (UEE) Navy unit at the centre of Squadron 42, Cloud Imperium Games’ single-player campaign. The player enlists as a new recruit and serves alongside the 42nd, fighting the Vanduul in the Odin system.',
  },
  {
    q: 'Is the 42nd Squadron the same thing as Squadron 42?',
    a: 'The game Squadron 42 is named after the unit. The 42nd Squadron is the in-universe UEE Navy fighter squadron the player is assigned to during the campaign.',
  },
  {
    q: 'When is Squadron 42 coming out?',
    a: 'CIG announced a 2026 launch window for Squadron 42 at CitizenCon 2954, and the release window has since changed. The release date tracker lists every official statement.',
  },
  {
    q: 'What star system is Squadron 42 set in?',
    a: 'The Odin system — a white dwarf binary system that serves as the 42nd Squadron’s theater of operations against the Vanduul.',
  },
  {
    q: 'Who are the Vanduul?',
    a: 'The Vanduul are a nomadic alien species and the primary antagonist faction. Squadron 42 places the 42nd Squadron in the middle of a major Vanduul incursion in the Odin system.',
  },
  {
    q: 'Do I need to play Star Citizen to play Squadron 42?',
    a: 'No. Squadron 42 is a standalone single-player game. Star Citizen is the separate multiplayer universe set in the same galaxy — and it is playable right now.',
  },
  {
    q: 'Where does the 42nd Squadron’s lore come from?',
    a: 'Official Cloud Imperium Games sources only. The May 2025 Squadron 42 subscriber newsletter detailed the unit’s fictional history, and the CitizenCon 2953 "I Held the Line" showcase depicted the squadron flying in formation during space combat.',
  },
  {
    q: 'What role does the player have in the 42nd Squadron?',
    a: 'The player begins as a new UEE Navy recruit assigned to serve alongside the 42nd. The campaign follows the conflict against the Vanduul in the Odin system, with the celebrity cast — including Mark Hamill as veteran Steve "Old Man" Colton — serving alongside or commanding the player.',
  },
]

const RELATED = [
  { href: '/ships', label: 'Ships & Fighters', blurb: 'The fighters and capital ships associated with the 42nd.' },
  { href: '/odin-system', label: 'The Odin System', blurb: 'The unit’s theater of operations.' },
  { href: '/vanduul', label: 'The Vanduul', blurb: 'The enemy the 42nd fights in the campaign.' },
  { href: '/cast', label: 'The Cast', blurb: 'Who plays whom, sourced only from Cloud Imperium Games.' },
  { href: '/answer-the-call', label: 'Answer the Call', blurb: 'The recruitment line behind the campaign.' },
  { href: '/release-date', label: 'Release Date Tracker', blurb: 'Every official statement on when Squadron 42 releases.' },
]

const linkClass = 'text-gold text-xs hover:text-goldDark transition-colors'
const h2Class = 'text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3'

export default function FortySecondSquadronPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: '42nd Squadron', item: `${SITE.url}/42nd-squadron` },
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
        eyebrow="UEE Navy Unit"
        title="42nd Squadron"
        description="The United Empire of Earth Navy unit at the centre of Squadron 42 — Cloud Imperium Games’ upcoming single-player space campaign. Here is their lore, their theater, and their enemy."
        image="/images/42nd/idris-on-euterpe.jpg"
        imageAlt={HEADER_ALT}
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className={h2Class}>Who Are the 42nd Squadron?</h2>
                <div className="space-y-4 text-muted text-sm leading-relaxed">
                  <p>
                    <strong className="text-starwhite">
                      The 42nd Squadron is the United Empire of Earth Navy unit that serves as the
                      setting for Cloud Imperium Games&apos; Squadron 42 campaign.
                    </strong>{' '}
                    The player enlists as a new recruit and serves alongside the 42nd, fighting
                    against the Vanduul in the Odin system.
                  </p>
                  <p>
                    CIG has developed detailed in-universe lore for the unit — including its
                    history, a historical battle, and the fighter craft associated with the
                    squadron. The May 2025 subscriber newsletter was dedicated entirely to the 42nd
                    Squadron&apos;s history and ships.
                  </p>
                  <p>
                    CIG announced a 2026 launch window for Squadron 42 at CitizenCon 2954. The
                    release window has since changed — the{' '}
                    <Link href="/release-date" className="text-gold underline hover:opacity-80">
                      release date tracker
                    </Link>{' '}
                    lists every official statement.
                  </p>
                </div>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20613-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — 42nd Squadron Newsletter, May 2025 →
                  </a>
                </p>
              </section>

              <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <h2 className={h2Class}>Confirmed Data</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        {['Element', 'Detail', 'Source'].map((h) => (
                          <th
                            key={h}
                            className="py-2 pr-4 text-xs font-medium uppercase tracking-wider text-muted"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {CONFIRMED_DATA.map(({ element, detail, source }) => (
                        <tr key={element} className="border-b border-white/5 last:border-b-0">
                          <td className="py-2 pr-4 text-sm font-medium text-starwhite">{element}</td>
                          <td className="py-2 pr-4 text-sm text-muted">{detail}</td>
                          <td className="py-2 text-xs text-muted">{source}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className={h2Class}>The Unit</h2>
                <p className="text-muted text-sm leading-relaxed">
                  The 42nd Squadron is a United Empire of Earth Navy fighter unit whose history
                  serves as the backdrop for the Squadron 42 campaign. The player character enlists
                  and is assigned to serve alongside the 42nd, engaging in combat operations against
                  the Vanduul in the Odin system. The unit lends its name to the game itself —
                  Squadron 42.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20613-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — 42nd Squadron Newsletter, May 2025 →
                  </a>
                </p>
                <ScreenshotFigure
                  src="/images/42nd/hangar-deck-crew.jpg"
                  alt="Star Citizen — crew on a capital-ship hangar deck. Screenshot via hasgaha.com."
                  caption="Hangar deck crew"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>The May 2025 Newsletter</h2>
                <p className="text-muted text-sm leading-relaxed">
                  The May 2025 Squadron 42 subscriber newsletter — timed to an in-game naval holiday
                  event — focused entirely on the fictional history of the 42nd Squadron. It
                  detailed the unit&apos;s role in a historical battle, described fighter craft
                  associated with the unit, and introduced a fictional crew character connected to
                  the squadron&apos;s past. Downloadable wallpapers of in-game ships were included
                  with the newsletter.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20613-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — May 2025 Newsletter →
                  </a>
                </p>
                <ScreenshotFigure
                  src="/images/42nd/gladius-vs-avenger.jpg"
                  alt="Star Citizen — an Aegis Gladius dogfighting an Avenger. Screenshot via hasgaha.com."
                  caption="Gladius versus Avenger"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>Formation Flying in Combat</h2>
                <p className="text-muted text-sm leading-relaxed">
                  The CitizenCon 2953 &quot;I Held the Line&quot; gameplay showcase featured the
                  42nd Squadron flying in formation during space combat sequences — one of the most
                  prominent depictions of the unit in action. The showcase demonstrated coordinated
                  multi-ship combat operations as a core part of the Squadron 42 gameplay
                  experience.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — I Held the Line Showcase →
                  </a>
                  <Link href="/i-held-the-line-trailer" className={linkClass}>
                    Watch the &quot;I Held the Line&quot; video →
                  </Link>
                </div>
                <ScreenshotFigure
                  src="/images/42nd/hornets-over-lake.jpg"
                  alt="Star Citizen — three Anvil Hornet fighters flying in formation over a lake at dusk. Screenshot via hasgaha.com."
                  caption="Hornets over lake"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>The Player&apos;s Role</h2>
                <p className="text-muted text-sm leading-relaxed">
                  In Squadron 42, the player begins as a new recruit in the UEE Navy and is assigned
                  to the unit. The campaign follows the player through the conflict against the
                  Vanduul in the Odin system, with story interactions involving the full celebrity
                  cast — including veterans like Steve &quot;Old Man&quot; Colton (Mark Hamill) —
                  who serve alongside or command the player throughout the campaign.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20262-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — CitizenCon 2954 Reveal →
                  </a>
                  <Link href="/cast" className={linkClass}>
                    Meet the cast →
                  </Link>
                </div>
                <ScreenshotFigure
                  src="/images/42nd/navy-portrait.jpg"
                  alt="Star Citizen — a UEE Navy character portrait. Screenshot via hasgaha.com; illustrative, not a Squadron 42 cast member."
                  caption="UEE Navy personnel (illustrative)"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>More on the 42nd Squadron&apos;s World</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {RELATED.map(({ href, label, blurb }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="card-surface block p-4 h-full hover:border-gold/30 transition-colors"
                      >
                        <span className="block text-starwhite font-semibold text-sm">{label}</span>
                        <span className="block text-muted text-xs mt-1 leading-snug">{blurb}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="card-surface p-6">
                <h2 className={h2Class}>Want to Play Now?</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Squadron 42 isn&apos;t out yet. But Star Citizen — the multiplayer universe in the
                  same galaxy — is playable right now. Use a referral code to start with 50,000 UEC
                  bonus credits.
                </p>
                <CTAButton trackingLabel="42nd Squadron CTA" />
              </section>

              <section>
                <h2 className={h2Class}>Frequently Asked Questions</h2>
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

      <PageSources route="/42nd-squadron" />
    </>
  )
}
