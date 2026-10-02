import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import CTAButton from '@/components/CTAButton'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

const HEADER_ALT =
  'Star Citizen — portrait of a UEE Navy pilot in flight gear. Screenshot via hasgaha.com; illustrative.'

export const metadata: Metadata = {
  title: 'Answer the Call — What the Squadron 42 Phrase Means',
  description:
    '"Answer the call" is Squadron 42\'s signature recruitment line from the 2018 CitizenCon trailer — what it means and where it comes from.',
  alternates: { canonical: '/answer-the-call' },
  openGraph: {
    title: 'Answer the Call — What the Squadron 42 Phrase Means',
    description:
      'The origin and meaning of Squadron 42\'s "answer the call" recruitment line, from official CIG sources.',
    url: '/answer-the-call',
    images: [
      {
        url: '/images/42nd/navy-portrait.jpg',
        width: 3400,
        height: 1913,
        alt: HEADER_ALT,
      },
    ],
  },
}

const faqs = [
  {
    q: 'What does "answer the call" mean in Squadron 42?',
    a: 'It is the game\'s signature recruitment line — the framing device that casts the player as a civilian who enlists in the United Empire of Earth (UEE) Navy. In Squadron 42, answering the call means signing up, reporting for duty, and serving with the 42nd Squadron against the Vanduul.',
  },
  {
    q: 'Where does "answer the call" come from?',
    a: 'The official Squadron 42 CitizenCon trailer, published by Cloud Imperium Games on October 12, 2018. The trailer introduced the star-studded cast and closed on the recruitment framing that has anchored Squadron 42\'s marketing since.',
  },
  {
    q: 'How do you answer the call today?',
    a: 'Squadron 42 is not out yet — CIG announced a 2026 launch window at CitizenCon 2954, and the release window has since changed. Until it ships, the way in is Star Citizen, the playable multiplayer game in the same universe: create an RSI account, and enlisting with a referral code starts you with a 50,000 UEC bonus.',
  },
]

const linkClass = 'text-gold text-xs hover:text-goldDark transition-colors'
const h2Class = 'text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3'

export default function AnswerTheCallPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Answer the Call', item: `${SITE.url}/answer-the-call` },
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
        eyebrow="Recruitment Line"
        title="Answer the Call"
        description="“Answer the call” is Squadron 42’s signature recruitment line — the tagline of the official CitizenCon trailer published October 12, 2018. In-fiction, it is the UEE Navy’s invitation to enlist; the campaign casts you as the recruit who answers it."
        image="/images/42nd/navy-portrait.jpg"
        imageAlt={HEADER_ALT}
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className={h2Class}>The 2018 CitizenCon Trailer</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Cloud Imperium Games published the Squadron 42 CitizenCon trailer on October 12,
                  2018. It introduced the campaign&apos;s cinematic tone and its ensemble cast, and
                  it framed the whole game as a recruitment pitch: the UEE Navy needs pilots, and
                  the player is the one who steps forward. That framing — answer the call — has
                  anchored Squadron 42&apos;s marketing ever since.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/en/comm-link/transmission/16801-Squadron-42-CitizenCon-Trailer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — Squadron 42 CitizenCon Trailer (2018) →
                  </a>
                </p>
              </section>

              <section>
                <h2 className={h2Class}>What You Are Answering</h2>
                <p className="text-muted text-sm leading-relaxed">
                  In the fiction, the call is the United Empire of Earth&apos;s appeal for
                  volunteers. The player enlists as a new UEE Navy recruit and is assigned to serve
                  alongside the 42nd Squadron in the Odin system, on the front line against the
                  Vanduul. Squadron 42 is a military story told from the bottom rung: you are not a
                  chosen hero, you are a recruit who signed up.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1">
                  <Link href="/42nd-squadron" className={linkClass}>
                    The 42nd Squadron — the unit you join →
                  </Link>
                  <Link href="/odin-system" className={linkClass}>
                    The Odin System →
                  </Link>
                  <Link href="/vanduul" className={linkClass}>
                    The Vanduul — the enemy you fight →
                  </Link>
                </div>
              </section>

              <section>
                <h2 className={h2Class}>Answering the Call Today</h2>
                <p className="text-muted text-sm leading-relaxed">
                  CIG announced a 2026 launch window for Squadron 42 at CitizenCon 2954. The release
                  window has since changed —{' '}
                  <Link href="/release-date" className="text-gold underline hover:opacity-80">
                    the release date tracker lists every official release-date statement
                  </Link>
                  . Until it ships, the playable way into the universe is Star Citizen, the separate
                  multiplayer game. Creating an account is free, and enlisting with a referral code
                  starts you with a 50,000 UEC bonus.
                </p>
              </section>

              <section className="card-surface p-6">
                <h2 className={h2Class}>Want to Play Now?</h2>
                <p className="text-muted text-sm leading-relaxed mb-5">
                  Squadron 42 isn&apos;t out yet. But Star Citizen — the multiplayer universe in the
                  same galaxy — is playable right now. Use a referral code to start with 50,000 UEC
                  bonus credits.
                </p>
                <CTAButton trackingLabel="Answer the Call CTA" />
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

      <PageSources route="/answer-the-call" />
    </>
  )
}
