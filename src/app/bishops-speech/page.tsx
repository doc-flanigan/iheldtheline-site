import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'
import SpeechQuote from '@/components/SpeechQuote'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: "Bishop's Speech — Squadron 42's Senate Address, Explained",
  description:
    "Admiral Ernst Bishop's Senate speech — performed by Gary Oldman — is the scene that opens Squadron 42 and the reason this site is named I Held the Line. What the speech says, where to watch both official versions, and how it connects to the famous phrase.",
  alternates: { canonical: '/bishops-speech' },
  keywords: [
    'bishop speech star citizen',
    'squadron 42 senate speech',
    'gary oldman squadron 42 speech',
    'admiral bishop speech',
    'we are at war speech star citizen',
    'i held the line meaning',
  ],
  openGraph: {
    title: "Bishop's Speech — Squadron 42's Senate Address, Explained",
    description:
      "The Gary Oldman Senate speech that opens Squadron 42: what it says, both official versions, and how it connects to 'I held the line'.",
    url: '/bishops-speech',
    images: ['/images/headers/i-held-the-line-trailer.jpg'],
  },
}

const CINEMATIC_URL = 'https://www.youtube.com/watch?v=8EC4WHPxnrk'
const PROLOGUE_URL = 'https://www.youtube.com/watch?v=1H-0x4xk2Xk&t=896s'

const faqs = [
  {
    q: "What is Bishop's speech in Squadron 42?",
    a: "It is the address Admiral Ernst Bishop delivers to an emergency session of the UEE Senate after the Vanduul attack on Vega II, urging humanity to stop calling two hundred years of Vanduul attacks 'raids' and commit to open war. It is the opening cinematic of Squadron 42 and the game's defining scene.",
  },
  {
    q: "Who performs Bishop's speech?",
    a: 'Gary Oldman, who plays Admiral Ernst Bishop in Squadron 42. His casting is confirmed in the official RSI cast announcement, and the performance was captured with full motion-capture technology.',
  },
  {
    q: "When was Bishop's speech first shown?",
    a: 'At CitizenCon 2015. Cloud Imperium Games published the cinematic on the official Star Citizen YouTube channel on October 10, 2015, describing it as the opening cinematic for Squadron 42.',
  },
  {
    q: "Is Bishop's speech in the actual game?",
    a: "Yes. The CitizenCon 2954 live gameplay reveal (October 2024) showed the speech running in-engine as part of the Squadron 42 prologue — it appears around the 15-minute mark of the official video.",
  },
  {
    q: "Does Bishop say 'I held the line' in the speech?",
    a: "No — the exact phrase does not appear in the speech. The speech's argument is what the phrase stands for: refusing to give the Vanduul any more ground. 'I Held the Line' is the title CIG gave the 2023 feature-complete showcase, and 'hold the line' became the rallying cry long-time backers used through development. This site's name honors both.",
  },
  {
    q: "How long is Bishop's speech?",
    a: 'The speech itself runs roughly a minute and a half inside a cinematic of about four minutes. The official standalone upload, including the scene around it, is 4 minutes 13 seconds.',
  },
]

export default function BishopsSpeechPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: "Bishop's Speech", item: `${SITE.url}/bishops-speech` },
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

  const videosJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'VideoObject',
        name: 'Squadron 42: Bishop Senate Speech',
        description:
          'Opening cinematic for Squadron 42, as seen during CitizenCon 2015. Admiral Ernst Bishop (Gary Oldman) addresses an emergency session of the UEE Senate.',
        uploadDate: '2015-10-10',
        thumbnailUrl: 'https://img.youtube.com/vi/8EC4WHPxnrk/maxresdefault.jpg',
        contentUrl: CINEMATIC_URL,
        duration: 'PT4M13S',
        publisher: { '@type': 'Organization', name: 'Cloud Imperium Games' },
      },
      {
        '@type': 'VideoObject',
        name: 'Squadron 42 CitizenCon 2954 Live Gameplay Reveal',
        description:
          "The official CitizenCon 2954 live gameplay reveal of Squadron 42. Bishop's Senate speech appears in-engine in the prologue.",
        uploadDate: '2024-10-19',
        thumbnailUrl: 'https://img.youtube.com/vi/1H-0x4xk2Xk/maxresdefault.jpg',
        contentUrl: 'https://www.youtube.com/watch?v=1H-0x4xk2Xk',
        duration: 'PT1H16M12S',
        publisher: { '@type': 'Organization', name: 'Cloud Imperium Games' },
        hasPart: {
          '@type': 'Clip',
          name: "Bishop's Senate speech (in-engine prologue)",
          startOffset: 896,
          endOffset: 1060,
          url: PROLOGUE_URL,
        },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }}
      />

      <PageHeader
        eyebrow="The Scene Behind the Name"
        title={<>Bishop&apos;s Speech</>}
        description="One address to the UEE Senate — performed by Gary Oldman — sets Squadron 42's entire war in motion. This is the scene this site is named for."
        image="/images/headers/i-held-the-line-trailer.jpg"
        imageAlt="Squadron 42 — the I Held the Line era of Squadron 42 marketing"
      />

      <main className="container-wide py-14 sm:py-20">
        <div className="max-w-2xl space-y-12">
          {/* Crisp, extractable definition — the GEO answer block */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              What Is Bishop&apos;s Speech?
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Bishop&apos;s speech is the address{' '}
              <strong className="text-starwhite">Admiral Ernst Bishop</strong> — played by{' '}
              <strong className="text-starwhite">Gary Oldman</strong> — delivers to an emergency
              session of the UEE Senate in the opening cinematic of Squadron 42. Speaking after the
              Vanduul attack on Vega II, Bishop tells the Senate that two hundred years of attacks
              humanity has downplayed as raids and skirmishes are, in truth, a war — and demands
              the Empire stop retreating, rebuild its fleet, and fight back. Cloud Imperium Games
              debuted the cinematic at CitizenCon 2015 and published it on the official Star
              Citizen YouTube channel on October 10, 2015, as &ldquo;the opening cinematic for
              Squadron 42.&rdquo;
            </p>
          </section>

          {/* The speech, beat by beat */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              What the Speech Says
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-8">
              The speech runs barely a minute and a half, and it moves in three beats. The words
              below are brief excerpts — the performance belongs to CIG and to Oldman, and it is
              worth watching in full (both official versions are linked below).
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="heading-display text-lg mb-2">1. Naming the war</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Bishop opens with an indictment: for two centuries humanity has softened Vanduul
                  attacks with words like &ldquo;raids&rdquo; and &ldquo;skirmishes&rdquo; while
                  systems — Tiber, Orion, Caliban, Virgil — were abandoned one by one. He refuses
                  the euphemisms.
                </p>
                <SpeechQuote quote="But I am here to tell you that we are at war!" noLink />
              </div>

              <div>
                <h3 className="heading-display text-lg mb-2">2. Drawing the line</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Then the demand — the line this site is named for. No more retreat, no more
                  ceded systems: defend the Empire by attacking, rebuild the fleet, and reclaim
                  what was lost, whatever it costs.
                </p>
                <SpeechQuote quote="We cannot give the Vanduul any more ground." noLink />
              </div>

              <div>
                <h3 className="heading-display text-lg mb-2">3. The price, and the promise</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Bishop doesn&apos;t hide the cost — resources, credits, lives. Asked why humanity
                  should undertake such a fight, his answer is a single word: victory. The closing
                  line is the speech&apos;s most quoted.
                </p>
                <SpeechQuote quote="…without victory there can be no survival!" noLink />
              </div>
            </div>

            {/*
              Site-owner note: longer verbatim excerpts are deliberately not included here —
              the speech is CIG-scripted content. If you (Doc) decide to extend the excerpts
              under CIG's fan-content tolerance, add them in this section and keep the
              attribution + official video links prominent.
            */}
          </section>

          {/* Watch both versions */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Watch Both Official Versions
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              CIG has shown the speech twice, nine years apart — first as the 2015 cinematic that
              introduced Squadron 42&apos;s cast era, then running live in-engine as the game&apos;s
              prologue at CitizenCon 2954.
            </p>

            <div className="space-y-5">
              <a
                href={CINEMATIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface block overflow-hidden hover:border-gold/40 transition-colors"
              >
                <div className="relative aspect-video">
                  <Image
                    src="https://img.youtube.com/vi/8EC4WHPxnrk/maxresdefault.jpg"
                    alt="Squadron 42: Bishop Senate Speech — official 2015 cinematic on YouTube"
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-starwhite font-semibold text-sm">
                    Squadron 42: Bishop Senate Speech (2015 cinematic, 4:13)
                  </p>
                  <p className="text-muted text-xs mt-1">
                    youtube.com — CIG official channel · published October 10, 2015
                  </p>
                </div>
              </a>

              <a
                href={PROLOGUE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface block overflow-hidden hover:border-gold/40 transition-colors"
              >
                <div className="relative aspect-video">
                  <Image
                    src="https://img.youtube.com/vi/1H-0x4xk2Xk/maxresdefault.jpg"
                    alt="Squadron 42 CitizenCon 2954 Live Gameplay Reveal — the speech in-engine"
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-starwhite font-semibold text-sm">
                    In-engine, inside the live prologue demo — CitizenCon 2954 (link starts at
                    14:56)
                  </p>
                  <p className="text-muted text-xs mt-1">
                    youtube.com — CIG official channel · published October 19, 2024 · speech runs
                    to ~17:40
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* The honest phrase-origin answer */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Does Bishop Say &ldquo;I Held the Line&rdquo;?
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                No — and this surprises people. The exact phrase never appears in the speech.
                What the speech contains is the <em>idea</em>: Bishop&apos;s whole argument is
                that humanity must stop giving ground. The line — the boundary the Vanduul will
                not be allowed to cross — is drawn in this scene.
              </p>
              <p>
                The literal phrase came later, in two places. Long-time backers adopted
                &ldquo;hold the line&rdquo; as a rallying cry through Squadron 42&apos;s long
                development. Then, at CitizenCon 2953 in October 2023, CIG titled its
                feature-complete showcase{' '}
                <Link
                  href="/i-held-the-line-trailer"
                  className="text-gold hover:text-goldDark transition-colors"
                >
                  &ldquo;Squadron 42: I Held The Line&rdquo;
                </Link>{' '}
                — honoring the community that waited.
              </p>
              <p>
                This site is named for all of it: the speech that drew the line, and the players
                who held it.
              </p>
            </div>
          </section>

          {/* Lore context */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              The Moment in the Story
            </h2>
            <div className="space-y-4 text-muted text-sm leading-relaxed">
              <p>
                In the fiction, the speech follows the Vanduul attack on Vega II — a devastating
                raid on a populated human system that ends any illusion of peace. Bishop, the
                admiral who fought at Vega, addresses the emergency session while the Senate is
                still reeling, and the chamber answers his closing line with a standing ovation.
              </p>
              <p>
                That vote for war is the world Squadron 42 drops you into: a{' '}
                <Link href="/vanduul" className="text-gold hover:text-goldDark transition-colors">
                  Vanduul
                </Link>{' '}
                conflict finally called by its name, a Navy rebuilding for the counteroffensive,
                and a new recruit — you — joining the fight Bishop demanded. The{' '}
                <Link href="/cast" className="text-gold hover:text-goldDark transition-colors">
                  cast page
                </Link>{' '}
                covers Oldman&apos;s role and the rest of the ensemble.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Bishop&apos;s Speech — FAQ
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
      </main>

      <PageSources route="/bishops-speech" />
    </>
  )
}
