import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { ScreenshotFigure, ScreenshotGallery } from '@/components/ScreenshotFigure'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

const HEADER_ALT =
  'Star Citizen — an Anvil F8C Lightning heavy fighter streaking over a red planet. Screenshot via hasgaha.com.'

export const metadata: Metadata = {
  title: '42nd Squadron Ships — Fighters & Capitals',
  description:
    'The fighters and capital ships of the 42nd Squadron in Squadron 42, confirmed from official CIG sources.',
  alternates: { canonical: '/ships' },
  openGraph: {
    title: '42nd Squadron Ships — Fighters and Capital Ships in Squadron 42',
    description: 'Ships and fighters of the 42nd Squadron from official CIG sources.',
    url: '/ships',
    images: [
      {
        url: '/images/42nd/f8c-orange-streak.jpg',
        width: 3400,
        height: 1913,
        alt: HEADER_ALT,
      },
    ],
  },
}

const faqs = [
  {
    q: 'What ship is the player based on in Squadron 42?',
    a: 'An Idris-class frigate — the UEE Navy capital ship that serves as the player\'s base of operations for much of the campaign. CIG dedicated an Around the Verse episode, "The Living Idris," to showing it as a populated environment with crew routines and interior life.',
  },
  {
    q: 'What fighters are associated with the 42nd Squadron?',
    a: 'The May 2025 Squadron 42 subscriber newsletter detailed fighter craft tied to the unit\'s history, presented as in-universe lore, with downloadable wallpapers of in-game ship renders.',
  },
  {
    q: 'Is formation flying part of Squadron 42 gameplay?',
    a: 'Yes. The CitizenCon 2953 "I Held the Line" showcase prominently featured the 42nd Squadron flying and fighting in coordinated formation, shown as a core gameplay element alongside on-foot combat aboard capital ships.',
  },
]

const GALLERY = [
  { src: '/images/42nd/gladius-in-blue.jpg', caption: 'Gladius in blue' },
  { src: '/images/42nd/sabre-firebird.jpg', caption: 'Sabre Firebird' },
  { src: '/images/42nd/vanguard-night.jpg', caption: 'Vanguard landed at night' },
  { src: '/images/42nd/f8c-lorville.jpg', caption: 'F8C at Lorville' },
  { src: '/images/42nd/valkyrie-hurston.jpg', caption: 'Valkyrie over Hurston' },
  { src: '/images/42nd/gladiator.jpg', caption: 'Gladiator bomber' },
  { src: '/images/42nd/hammerhead.jpg', caption: 'Hammerhead over Yela' },
  { src: '/images/42nd/eclipse-torpedo.jpg', caption: 'Eclipse torpedo run' },
  { src: '/images/42nd/raven-shooting.jpg', caption: 'Sabre Raven firing' },
  { src: '/images/42nd/bengal-idris.jpg', caption: 'Bengal & Idris (Invictus)' },
  { src: '/images/42nd/vanguards-above.jpg', caption: 'Vanguards on patrol' },
  { src: '/images/42nd/gladius-sunset.jpg', caption: 'Gladius at Aberdeen sunset' },
]

const linkClass = 'text-gold text-xs hover:text-goldDark transition-colors'
const h2Class = 'text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3'

export default function ShipsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Ships', item: `${SITE.url}/ships` },
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
        eyebrow="Fighters & Capital Ships"
        title="Ships of the 42nd Squadron"
        description="The fighter craft and capital ships featured in Squadron 42, sourced from official Cloud Imperium Games communications only."
        image="/images/42nd/f8c-orange-streak.jpg"
        imageAlt={HEADER_ALT}
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <div className="max-w-2xl space-y-10">
              <section>
                <h2 className={h2Class}>Squadron Fighters</h2>
                <p className="text-muted text-sm leading-relaxed">
                  The May 2025 Squadron 42 newsletter detailed the fighter craft associated with the
                  42nd Squadron, including ships tied to the unit&apos;s history in a past battle.
                  The newsletter included downloadable wallpapers of in-game ship renders. Specific
                  ship model names were presented as part of the in-universe lore of the 42nd
                  Squadron&apos;s history.
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
                  src="/images/42nd/gladius-on-hurston.jpg"
                  alt="Star Citizen — an Aegis Gladius light fighter in flight over Hurston. Screenshot via hasgaha.com."
                  caption="Gladius on Hurston"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>The Idris — Capital Ship Setting</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Much of Squadron 42&apos;s campaign takes place aboard an Idris-class frigate — the
                  UEE Navy capital ship that serves as the player&apos;s base of operations. CIG
                  dedicated an Around the Verse developer episode to &quot;The Living Idris,&quot;
                  showing how the ship functions as a populated environment with crew routines,
                  interior spaces, and animated NPC life throughout.
                </p>
                <p className="mt-3">
                  <a
                    href="https://www.youtube.com/watch?v=CP_GTmqs2Zg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: CIG YouTube — Around the Verse: The Living Idris →
                  </a>
                </p>
                <ScreenshotFigure
                  src="/images/42nd/idris-railgun-fire.jpg"
                  alt="Star Citizen — an Idris-class frigate firing its spinal railgun. Screenshot via hasgaha.com."
                  caption="Idris railgun fire"
                  className="mt-5"
                />
              </section>

              <section>
                <h2 className={h2Class}>Formation Flying</h2>
                <p className="text-muted text-sm leading-relaxed">
                  The CitizenCon 2953 &quot;I Held the Line&quot; showcase prominently featured
                  coordinated formation flying with the 42nd Squadron — multiple player and NPC
                  ships flying and fighting together in space combat. This was shown as a core
                  gameplay element of the campaign, alongside on-foot combat aboard capital ships
                  and direct engagement with Vanduul forces.
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
              </section>

              <section>
                <h2 className={h2Class}>Point-Defense and Ship AI</h2>
                <p className="text-muted text-sm leading-relaxed">
                  Monthly Squadron 42 development reports confirm that ship AI received updates
                  covering point-defense weapons and formation-flying logic — both directly relevant
                  to how the 42nd Squadron&apos;s ships behave in combat alongside the player. The
                  June 2024 report also detailed NPC ship AI improvements including elevator
                  interactions for crew characters and transitions between indoor and outdoor ship
                  spaces.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20051-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Source: RSI Comm-Link — Monthly Report June 2024 →
                  </a>
                </p>
              </section>

              <section>
                <h2 className={h2Class}>Fleet Gallery — UEE Ships &amp; Fighters</h2>
                <ScreenshotGallery items={GALLERY} />
              </section>

              <section>
                <h2 className={h2Class}>Keep Reading</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link href="/42nd-squadron" className={linkClass}>
                    The 42nd Squadron — the unit these ships fly with →
                  </Link>
                  <Link href="/odin-system" className={linkClass}>
                    The Odin System →
                  </Link>
                  <Link href="/vanduul" className={linkClass}>
                    The Vanduul →
                  </Link>
                  <Link href="/gameplay" className={linkClass}>
                    Gameplay systems →
                  </Link>
                </div>
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

      <PageSources route="/ships" />
    </>
  )
}
