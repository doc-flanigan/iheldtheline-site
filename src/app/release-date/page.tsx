import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Release Date — Every Official CIG Statement',
  description:
    'Every official Cloud Imperium Games statement on the Squadron 42 release date, in one place. 2026 target confirmed by Chris Roberts.',
  alternates: { canonical: '/release-date' },
  openGraph: {
    title: 'Squadron 42 Release Date — Every Official CIG Statement',
    description:
      'All official CIG release-window statements for Squadron 42, from feature-complete in 2023 to the 2026 target.',
    url: '/release-date',
    images: [
      {
        url: '/images/headers/release-date.jpg',
        width: 1920,
        height: 822,
        alt: 'Close-up of a Star Citizen capital ship\'s armored engine section erupting in orange thruster flame as blue light streaks past in deep space.',
      },
    ],
  },
}

const STATEMENTS = [
  {
    date: 'May 2026',
    summary:
      'Letter from the Chairman (May 25, 2026): Chris Roberts restated the goal to "push Squadron 42 toward Beta and release in 2026." The game is content complete, all chapters are "fully playable from beginning to end" with regular internal playthroughs, and the campaign is over forty hours long. Remaining work: polish, optimization, and bug fixing.',
    sourceLabel: 'RSI Comm-Link — Letter From The Chairman',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/20960-Letter-From-The-Chairman',
  },
  {
    date: 'October 2024',
    summary:
      'CitizenCon 2954: CIG announced a 2026 launch window during the first live gameplay demonstration of Squadron 42. Campaign length stated as 30 to 40 hours.',
    sourceLabel: 'RSI Comm-Link — CitizenCon 2954 Recap',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/citcon-featured-content/20262-CitizenCon-2954-Recap',
  },
  {
    date: 'October 2023',
    summary:
      'CitizenCon 2953: Cloud Imperium Games announced Squadron 42 had reached feature-complete status — all planned gameplay features implemented, project entering the polishing phase. The "I Held the Line" 26-minute showcase was released.',
    sourceLabel: 'RSI Comm-Link — I Held the Line',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/19453-Squadron-42-I-Held-The-Line',
  },
  {
    date: 'October 2020',
    summary:
      'Letter from the Chairman (October 10, 2020): Chris Roberts confirmed Squadron 42 would not release that year and declined to give a new date — "it will be done when it is done." This was the last official word on timing until the feature-complete announcement three years later.',
    sourceLabel: 'RSI Comm-Link — Letter From The Chairman',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/17805-Letter-From-The-Chairman',
  },
  {
    date: 'December 2017',
    summary:
      'The "vertical slice" — the first extended look at Squadron 42 gameplay, showing Navy life aboard an Idris and a rescue mission — was published in CIG\'s Holiday Special on the official Star Citizen YouTube channel on December 22, 2017.',
    sourceLabel: 'Official Star Citizen YouTube — Holiday Special 2017',
    sourceUrl: 'https://www.youtube.com/watch?v=tpVzJiarjvc',
  },
  {
    date: '2015–2016',
    summary:
      'A 2016 release window was promoted at CitizenCon 2015. The game did not ship in 2016, and its expected CitizenCon 2946 gameplay demo was pulled. In the November 2016 anniversary letter, CIG adopted the no-hard-dates stance it kept for the next eight years.',
    sourceLabel: 'RSI Comm-Link — Monthly Studio Report, October 2016',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/15587-Monthly-Studio-Report-October-2016',
  },
  {
    date: 'October 2012',
    summary:
      'Squadron 42 was announced together with Star Citizen by Chris Roberts at GDC Online in Austin on October 10, 2012, pitched as the campaign\'s Wing Commander-style single-player component.',
    sourceLabel: 'RSI Comm-Link — A Message From Chris Roberts',
    sourceUrl:
      'https://robertsspaceindustries.com/en/comm-link/transmission/12730-A-Message-From-Chris-Roberts',
  },
]

const faqs = [
  {
    q: 'When does Squadron 42 come out?',
    a: 'Squadron 42 targets a 2026 release. CIG announced the 2026 launch window at CitizenCon 2954 in October 2024 and restated it in the May 2026 Letter from the Chairman ("push Squadron 42 toward Beta and release in 2026"). No specific day, month, or quarter has been announced.',
  },
  {
    q: 'Does Squadron 42 have an exact release date?',
    a: 'No. The only official commitment is the 2026 window. CIG has avoided hard dates since the promoted 2016 window was missed — from late 2016 to late 2024 the studio\'s only answer on timing was "it will be done when it is done."',
  },
  {
    q: 'Is Squadron 42 finished?',
    a: 'It is feature complete (announced October 2023) and, per the May 2026 Letter from the Chairman, content complete — all chapters fully playable from beginning to end, with the team running regular internal playthroughs. Remaining work is polish, optimization, and bug fixing as the game is prepared for Beta.',
  },
  {
    q: 'How long is Squadron 42?',
    a: 'Over forty hours, per the May 2026 Letter from the Chairman. At CitizenCon 2954 the campaign was described as 30 to 40 hours.',
  },
  {
    q: 'Has Squadron 42 been delayed before?',
    a: 'Yes. A 2016 release window promoted at CitizenCon 2015 was missed, and in October 2020 Chris Roberts confirmed there would be no release that year and gave no new date. The 2026 window announced in October 2024 is the current — and only — official target.',
  },
  {
    q: 'Do I need Star Citizen to play Squadron 42?',
    a: 'No. Squadron 42 is a standalone single-player game set in the same universe. Star Citizen, the multiplayer game, has no single-player campaign mode — the two are separate titles.',
  },
]

export default function ReleaseDatePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Release Date',
        item: `${SITE.url}/release-date`,
      },
    ],
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
        eyebrow="Release Date Tracker"
        title="Squadron 42 Release Date"
        description="Every official statement from Cloud Imperium Games on the Squadron 42 release window. No speculation — CIG sources only."
        image="/images/headers/release-date.jpg"
        imageAlt="Close-up of a Star Citizen capital ship's armored engine section erupting in orange thruster flame as blue light streaks past in deep space."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Squadron 42 does not have an exact release date. The official
                target is a 2026 release
              </strong>{' '}
              — announced by Cloud Imperium Games at CitizenCon 2954 in October
              2024 and restated by Chris Roberts in the May 2026 Letter from the
              Chairman. The game is content complete, every chapter is fully
              playable internally, and the studio is preparing it for Beta.
            </p>

            {/* What we know summary */}
            <div className="card-surface p-6 mb-14 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                What We Know
              </p>
              <ul className="space-y-2 text-sm text-muted leading-relaxed list-disc list-inside">
                <li>
                  <span className="text-starwhite font-semibold">2026</span> is the confirmed
                  release target — no specific date or quarter announced.
                </li>
                <li>
                  Campaign is{' '}
                  <span className="text-starwhite font-semibold">40+ hours</span> long,
                  confirmed in the May 2026 Letter from the Chairman.
                </li>
                <li>
                  All chapters are{' '}
                  <span className="text-starwhite font-semibold">
                    fully playable internally
                  </span>{' '}
                  as of the May 2026 letter, with regular full playthroughs.
                </li>
                <li>
                  Feature-complete status was reached in{' '}
                  <span className="text-starwhite font-semibold">October 2023</span>;
                  the game is now content complete and being prepared for Beta.
                </li>
                <li>No public beta date, demo, or Steam release has been announced.</li>
              </ul>
              <p className="mt-4">
                <a
                  href="https://robertsspaceindustries.com/en/comm-link/transmission/20960-Letter-From-The-Chairman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-goldDark transition-colors"
                >
                  Source: RSI Comm-Link — Letter From The Chairman (May 2026) →
                </a>
              </p>
            </div>

            {/* Timeline of statements */}
            <section className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-8">
                Official Statements — Newest First
              </p>
              <div className="relative">
                <div
                  className="absolute left-[1px] top-2 bottom-0 w-px timeline-line"
                  aria-hidden
                />
                <div className="space-y-10">
                  {STATEMENTS.map((s, i) => (
                    <div key={i} className="relative pl-8">
                      <div
                        className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_8px_rgba(200,160,74,0.5)]"
                        aria-hidden
                      />
                      <p className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-1">
                        {s.date}
                      </p>
                      <p className="text-muted text-sm leading-relaxed mb-2">{s.summary}</p>
                      <a
                        href={s.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold text-xs hover:text-goldDark transition-colors"
                      >
                        {s.sourceLabel} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="max-w-2xl mt-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Release Date — FAQ
              </h2>
              <div className="space-y-4">
                {faqs.map(({ q, a }) => (
                  <div key={q} className="card-surface p-5">
                    <h3 className="text-starwhite font-semibold text-sm">{q}</h3>
                    <p className="text-muted text-sm leading-relaxed mt-2">{a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>

      <PageSources route="/release-date" />
    </>
  )
}
