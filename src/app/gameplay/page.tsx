import type { Metadata } from 'next'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 Gameplay — Systems and Features',
  description:
    'What gameplay systems does Squadron 42 have? Seamless transitions, AI companions, zero-G traversal, squad combat, and living NPC crew — confirmed from official CIG sources.',
  alternates: { canonical: '/gameplay' },
  openGraph: {
    title: 'Squadron 42 Gameplay — Systems and Features',
    description:
      'Official gameplay systems confirmed for Squadron 42 — seamless transitions, AI squad combat, zero-G traversal, and more.',
    url: '/gameplay',
  },
}

export default function GameplayPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Gameplay', item: `${SITE.url}/gameplay` },
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
                Gameplay
              </p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                Squadron 42 Gameplay Systems
              </h1>
              <p className="text-muted text-base">
                What CIG has officially confirmed about how Squadron 42 plays. All details sourced
                from official comm-links, monthly reports, and CitizenCon presentations.
              </p>
            </header>

            <div className="max-w-2xl space-y-12">
              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Seamless Transitions
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 features seamless transitions between on-foot gameplay, spacecraft
                  interiors, space flight, and planetary surfaces — with no loading screens
                  interrupting the experience. Chris Roberts highlighted this as a defining feature
                  of the game in his Chairman&apos;s Letter 2025, describing it as something that
                  sets Squadron 42 apart from conventional single-player campaigns.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20960-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Chairman&apos;s Letter 2025 →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  AI Companions and Squad Combat
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 features squad-based combat with AI companions fighting alongside the
                  player. Monthly development reports describe an AI Groups system that clusters
                  non-player characters so they share awareness — if one enemy spots the player,
                  others in the group are alerted. Combat dialogue was expanded to include
                  situation-specific spoken lines, including surrender-related callouts. Friendly AI
                  companion behavior was fine-tuned to control when allies draw weapons and engage
                  enemies.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20107-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Monthly Report July 2024 →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Zero-G Traversal
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Zero-gravity movement is a confirmed gameplay mechanic in Squadron 42. The
                  CitizenCon 2954 gameplay reveal included zero-G sequences during the prologue
                  mission. Monthly development reports document ongoing animation improvements for
                  zero-gravity movement and weapon reloading in zero-G conditions.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20262-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — CitizenCon 2954 Reveal →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Living NPC Crew
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  The capital ship aboard which the player serves functions as a living environment
                  populated with NPCs going about their daily routines. Monthly development reports
                  describe detailed NPC interaction systems — for example, a janitor character that
                  retrieves a uniform, picks up a mop, and moves between cleaning spots with
                  appropriate animations throughout. The &quot;Look At&quot; gaze technology gives
                  crew characters realistic eye movement — glancing or staring at the player based
                  on context. Social scenes in the hangar, gym, bridge, barracks, and mess hall
                  were all polished as part of the narrative development process.
                </p>
                <p className="mt-3">
                  <a
                    href="https://robertsspaceindustries.com/comm-link/SCW/20051-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: RSI Comm-Link — Monthly Report June 2024 →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Space Combat
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Space combat includes formation flying with the 42nd Squadron — as shown in the
                  CitizenCon 2953 &quot;I Held the Line&quot; showcase. Ship AI received updates to
                  point-defense weapons and formation-flying logic. The CitizenCon 2954 gameplay
                  reveal included turret combat sequences during the prologue. The Idris capital
                  ship, aboard which much of the game takes place, was detailed in a developer
                  update as a living environment with crew routines and interior design work.
                </p>
                <p className="mt-3">
                  <a
                    href="https://www.youtube.com/watch?v=CP_GTmqs2Zg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: CIG YouTube — Around the Verse: The Living Idris →
                  </a>
                </p>
              </section>

              <section>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                  Narrative and Cinematics
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Squadron 42 uses an interrupt system that lets scripted story events blend
                  seamlessly into gameplay without breaking immersion. The facial animation team
                  worked on the full celebrity cast&apos;s performances across the campaign. CIG
                  described the game as being designed to play like a cinematic military space drama
                  — comparable to a blockbuster single-player release.
                </p>
                <p className="mt-3">
                  <a
                    href="https://www.youtube.com/watch?v=y-uR8lJFbMY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-xs hover:text-goldDark transition-colors"
                  >
                    Source: CIG YouTube — The Briefing Room Episode 1 →
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
