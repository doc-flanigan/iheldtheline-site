import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { PageSources } from '@/components/PageSources'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'SQ42 Playtest — Manchester, October 2026',
  description:
    'The invite-only Squadron 42 playtest is underway at CIG’s Manchester studio, October 9–11, 2026. Who was invited, what CIG said comes next, and why no release date has been announced yet.',
  alternates: { canonical: '/playtest-event' },
  openGraph: {
    title: 'Squadron 42 Playtest Event — October 2026 Manchester Weekend Explained',
    description:
      'The invite-only Squadron 42 playtest is underway at CIG Manchester, October 9–11, 2026. What CIG has confirmed and what comes next.',
    url: '/playtest-event',
    images: [
      {
        url: '/images/headers/gameplay.jpg',
        width: 1920,
        height: 822,
        alt: 'A Squadron 42 pilot in full flight gear seated in a fighter cockpit, instrument panels glowing against the black of space.',
      },
    ],
  },
}

const KNOWN_FACTS = [
  {
    label: 'Status',
    value:
      'Underway. Day one was Friday, October 9, 2026. As of October 9, CIG has not announced a Squadron 42 release date; the Q2 2027 window stands.',
  },
  {
    label: 'What',
    value:
      'An exclusive three-day event at Cloud Imperium Games’ Manchester studio. The invitation email promised the first hands-on experience with Squadron 42, a studio tour, and time with the development team.',
  },
  {
    label: 'When',
    value:
      'Friday, October 9 through Sunday, October 11, 2026, per the invitation email. CIG’s August 27, 2026 Letter from the Chairman names October 9 and 10 as the days people play Squadron 42.',
  },
  {
    label: 'Where',
    value:
      'CIG’s Manchester studio, UK — the studio that leads Squadron 42 development and hosted CitizenCon 2954.',
  },
  {
    label: 'Who',
    value:
      'Invite-only: “a small number of original backers and long-time Star Citizen content creators,” in CIG’s words. The invitation was addressed to “those who Held the Line.” It is not open to the public and there is no sign-up page.',
  },
  {
    label: 'Cost',
    value:
      'The event itself was free for invitees, but travel and accommodation were at the attendee’s own expense.',
  },
]

const faqs = [
  {
    q: 'What is the Squadron 42 playtest event?',
    a: 'It is an invite-only, three-day event at Cloud Imperium Games’ Manchester studio, running Friday, October 9 through Sunday, October 11, 2026, and underway as of October 9. According to the invitation email, attendees get the first hands-on experience with Squadron 42, a studio tour, and time with the development team. CIG’s August 27, 2026 Letter from the Chairman names October 9 and 10 as the days people play.',
  },
  {
    q: 'Can I play Squadron 42 now?',
    a: 'No. The Manchester playtest is invite-only and there is no public sign-up. CIG has not announced a public playtest, and Squadron 42 has not been released. The official release window is Q2 2027 (April to June 2027).',
  },
  {
    q: 'Who was invited?',
    a: 'In the August 27, 2026 Letter from the Chairman, CIG said it is allowing “a small number of original backers and long-time Star Citizen content creators” to play Squadron 42 on October 9 and 10. The invitation emails were addressed to “those who Held the Line.” CIG has not published public criteria and there is no way to apply.',
  },
  {
    q: 'When will CIG announce the Squadron 42 release date?',
    a: 'CIG said shortly after this playtest. In the same letter: "We’ll be making further announcements about our release plans during this time and a specific release date shortly afterwards." As of October 9, 2026 no release date has been announced, and the Q2 2027 window stands. We update this page when CIG announces one.',
  },
  {
    q: 'Does the October 2026 playtest mean the release date is close?',
    a: 'The playtest is not the release. On August 27, 2026 Chris Roberts moved Squadron 42 from 2026 to Q2 2027 to avoid launching alongside GTA 6. In the same letter he tied this event to the launch plan: CIG will make further announcements about its release plans during the sessions and a specific release date shortly afterwards. See our release date tracker for every official statement.',
  },
  {
    q: 'Is this the first time anyone outside CIG has played Squadron 42?',
    a: 'It is the first announced hands-on opportunity for players outside the studio. Until now, Squadron 42 has only ever been shown as presentations — the 2017 “vertical slice,” the 2018 Morrow Tour demo, and the live gameplay demonstration at CitizenCon 2954 in October 2024 were all played by CIG staff, not attendees.',
  },
  {
    q: 'Will the playtest be streamed or shown publicly?',
    a: 'CIG has not said. The invitation promised further details closer to the event, and CIG has not announced that any part of it will be public or recorded. This page will be updated as official information appears.',
  },
  {
    q: 'Is the event officially confirmed by CIG?',
    a: 'Yes. The invitations came directly from Cloud Imperium Games by email in July 2026, and on August 27, 2026 CIG confirmed the sessions publicly in the Letter from the Chairman: "We are allowing a small number of original backers and long-time Star Citizen content creators an opportunity to play Squadron 42 this October 9th and 10th." The three-day October 9–11 span and studio-tour details come from the invitation email, which is the only source for them.',
  },
]

export default function PlaytestEventPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const eventJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Squadron 42 Hands-On Backer Event (invite-only)',
    startDate: '2026-10-09',
    endDate: '2026-10-11',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Cloud Imperium Games — Manchester Studio',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manchester',
        addressCountry: 'GB',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Cloud Imperium Games',
      url: 'https://cloudimperiumgames.com',
    },
    description:
      'Invite-only three-day event at CIG Manchester, October 9–11, 2026, now underway: the first hands-on Squadron 42 experience for original backers and long-time content creators, a studio tour, and time with the development team. CIG named October 9 and 10 as the play days. Not open to the public.',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Playtest Event',
        item: `${SITE.url}/playtest-event`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        eyebrow="Underway · October 9–11, 2026 · Manchester"
        title="The Squadron 42 Playtest Event"
        description="The invite-only Squadron 42 playtest is underway at CIG's Manchester studio, October 9–11, 2026. Here is what CIG has confirmed, and what it said comes next."
        image="/images/headers/gameplay.jpg"
        imageAlt="A Squadron 42 pilot in full flight gear seated in a fighter cockpit, instrument panels glowing against the black of space."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Cloud Imperium Games&rsquo; invite-only Squadron 42 event at its
                Manchester studio is underway: Friday, October 9 through Sunday,
                October 11, 2026
              </strong>{' '}
              — the first time people outside the studio get hands-on time with
              the game. CIG confirmed it publicly in the August 27, 2026 Letter
              from the Chairman: &ldquo;We are allowing a small number of
              original backers and long-time Star Citizen content creators an
              opportunity to play Squadron 42 this October 9th and 10th.&rdquo;
              The event is invite-only: there is no sign-up page and no ticket
              sale. As of October 9, no release date has been announced and the
              Q2 2027 window stands.
            </p>

            {/* What we know summary */}
            <div className="card-surface p-6 mb-14 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                What We Know
              </p>
              <dl className="space-y-3 text-sm leading-relaxed">
                {KNOWN_FACTS.map(({ label, value }) => (
                  <div key={label} className="flex gap-4">
                    <dt className="w-14 shrink-0 text-gold font-semibold uppercase text-xs tracking-[0.15em] pt-0.5">
                      {label}
                    </dt>
                    <dd className="text-muted flex-1">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* What CIG said comes next */}
            <section className="max-w-2xl mb-14">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                What CIG said comes next
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                The sentence after the playtest announcement in the same Letter
                from the Chairman ties the event to the launch plan:
              </p>
              <blockquote className="card-surface p-5 text-sm leading-relaxed text-starwhite border-l-2 border-gold mb-4">
                &ldquo;We&rsquo;ll be making further announcements about our
                release plans during this time and a specific release date
                shortly afterwards.&rdquo;
              </blockquote>
              <p className="text-muted text-sm leading-relaxed">
                That is CIG&rsquo;s stated intention, not an announcement. As of
                October 9, 2026 no Squadron 42 release date has been announced,
                and the{' '}
                <strong className="text-starwhite">Q2 2027</strong> window set in
                that letter stands. We update this page and the{' '}
                <Link href="/release-date" className="text-gold hover:text-goldDark transition-colors">
                  release date tracker
                </Link>{' '}
                when CIG publishes a date.
              </p>
            </section>

            {/* The invitation */}
            <section className="max-w-2xl mb-14">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                The Invitation
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                In early July 2026, selected backers began receiving an email
                from CIG carrying the Squadron 42 wings crest. The invitation
                frames the event as a thank-you to veterans of the long wait:
                &ldquo;For those who Held the Line&rdquo; — the phrase CIG has
                used for loyal backers since the famous October 2023
                feature-complete video — it is &ldquo;only fitting&rdquo; that
                they are among the first to experience what comes next.
              </p>
              <p className="text-muted text-sm leading-relaxed mb-6">
                The email promises three things for the weekend: time with the
                development team, a tour of the Manchester studio, and
                participation in the first hands-on experience with Squadron 42.
                Further details on the weekend&rsquo;s activities are promised
                closer to the event. Travel and accommodation are at attendees&rsquo;
                own expense, with CIG planning to share discounted nearby hotel
                options.
              </p>
              <figure className="card-surface p-4 inline-block">
                <Image
                  src="/images/news/sq42-playtest-invite-email-oct-2026.png"
                  alt="Screenshot of the official CIG invitation email for the Squadron 42 hands-on event at the Manchester studio, October 9-11, 2026, with the recipient's name redacted."
                  width={471}
                  height={995}
                  className="rounded max-w-[320px] h-auto"
                />
                <figcaption className="text-xs text-muted mt-3 max-w-[320px]">
                  The invitation email as received by backers in July 2026 &mdash; the evidence for the three-day October 9&ndash;11 span
                  (recipient name redacted).
                </figcaption>
              </figure>
            </section>

            {/* Why it matters */}
            <section className="max-w-2xl mb-14">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Why This Matters
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                In fourteen years of development, Squadron 42 has never been
                playable by anyone outside Cloud Imperium Games. Every public
                showing — the 2017 vertical slice, the 2018 Morrow Tour, the
                CitizenCon 2954 live demo — was played by CIG staff while the
                audience watched. An event built around outsiders actually
                holding the controls is a first, and the kind of thing studios
                typically do late in a polish phase.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The timing also lands in familiar territory: early-to-mid
                October is CitizenCon season, and Manchester hosted CitizenCon
                2954, where the 2026 release window was announced. On August 27,
                2026, Chris Roberts pushed the release from 2026 to{' '}
                <strong className="text-starwhite">Q2 2027</strong> to stay clear
                of GTA 6, and in the same letter tied this event to the launch
                plan. Every official statement is tracked on the{' '}
                <Link href="/release-date" className="text-gold hover:text-goldDark transition-colors">
                  release date page
                </Link>
                .
              </p>
            </section>

            {/* FAQ */}
            <section className="max-w-2xl mt-16">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
                Playtest Event — FAQ
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

      <PageSources route="/playtest-event" />
    </>
  )
}
