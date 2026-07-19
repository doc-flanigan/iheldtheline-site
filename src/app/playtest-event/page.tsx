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
    'CIG is hosting the first hands-on Squadron 42 playtest at its Manchester studio, October 9–11, 2026. Who is invited, what happens, and what we know so far.',
  alternates: { canonical: '/playtest-event' },
  openGraph: {
    title: 'Squadron 42 Playtest Event — October 2026 Manchester Weekend Explained',
    description:
      'The first hands-on Squadron 42 experience: an invite-only three-day event at CIG Manchester, October 9–11, 2026. Everything known so far.',
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
    label: 'What',
    value:
      'An exclusive three-day event at Cloud Imperium Games’ Manchester studio — including the first hands-on experience with Squadron 42, a studio tour, and time with the development team.',
  },
  {
    label: 'When',
    value: 'Friday, October 9 through Sunday, October 11, 2026.',
  },
  {
    label: 'Where',
    value:
      'CIG’s Manchester studio, UK — the studio that leads Squadron 42 development and hosted CitizenCon 2954.',
  },
  {
    label: 'Who',
    value:
      'Invite-only. Invitations went out by email to a group of long-time backers — “those who Held the Line.” It is not open to the public and no sign-up page exists.',
  },
  {
    label: 'Cost',
    value:
      'The event itself is free for invitees, but travel and accommodation are at the attendee’s own expense. CIG plans to share discounted nearby hotel options.',
  },
]

const faqs = [
  {
    q: 'What is the Squadron 42 playtest event?',
    a: 'It is an invite-only, three-day event at Cloud Imperium Games’ Manchester studio running Friday, October 9 through Sunday, October 11, 2026. According to the invitation email sent to eligible backers, attendees will get the first hands-on experience with Squadron 42, tour the studio, and spend time with the development team.',
  },
  {
    q: 'How do I get invited to the Squadron 42 playtest?',
    a: 'You can’t apply — invitations were sent directly by CIG to selected long-time backers, addressed to “those who Held the Line.” CIG has not published public criteria, and there is no sign-up form. If you received the email, you’re in the group; if not, watch official CIG channels for any wider playtest news.',
  },
  {
    q: 'Is this the first time anyone outside CIG has played Squadron 42?',
    a: 'It is the first announced hands-on opportunity for players outside the studio. Until now, Squadron 42 has only ever been shown as presentations — the 2017 “vertical slice,” the 2018 Morrow Tour demo, and the live gameplay demonstration at CitizenCon 2954 in October 2024 were all played by CIG staff, not attendees.',
  },
  {
    q: 'Does the October 2026 playtest mean the release date is close?',
    a: 'CIG has not tied the event to a launch date. The official target remains a 2026 release, restated by Chris Roberts in the May 2026 Letter from the Chairman. A hands-on backer event in October is consistent with a late-stage polish phase, but CIG has announced no specific release day — see our release date tracker for every official statement.',
  },
  {
    q: 'Will the playtest be streamed or shown publicly?',
    a: 'Unknown. The invitation says additional details about the weekend’s activities will be shared closer to the event, and CIG has not said whether any part of it will be public, recorded, or covered by press. This page will be updated as official information appears.',
  },
  {
    q: 'Is the event officially confirmed by CIG?',
    a: 'Yes — the invitations come directly from Cloud Imperium Games by email. As of July 11, 2026, however, CIG has not published a public comm-link or news post about the event, which is why searching for it turns up so little. The details on this page come from the invitation email itself.',
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
      'Invite-only three-day event at CIG Manchester: the first hands-on experience with Squadron 42, a studio tour, and time with the development team. Not open to the public.',
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
        eyebrow="October 2026 · Manchester"
        title="The Squadron 42 Playtest Event"
        description="CIG is putting Squadron 42 in players' hands for the first time — an invite-only weekend at the Manchester studio, October 9–11, 2026. Here is everything actually known."
        image="/images/headers/gameplay.jpg"
        imageAlt="A Squadron 42 pilot in full flight gear seated in a fighter cockpit, instrument panels glowing against the black of space."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            {/* Direct answer */}
            <p className="max-w-2xl text-base leading-relaxed text-muted mb-10">
              <strong className="text-starwhite">
                Cloud Imperium Games is hosting an exclusive three-day Squadron 42
                event at its Manchester studio from Friday, October 9 through
                Sunday, October 11, 2026
              </strong>{' '}
              — the first time anyone outside the studio gets hands-on time with
              the game. Invitations went out by email in July 2026 to a group of
              long-time backers CIG addresses as &ldquo;those who Held the
              Line.&rdquo; The event is invite-only: there is no sign-up page, no
              ticket sale, and as of mid-July no public comm-link about it.
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
                  The invitation email as received by backers in July 2026
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
                2954, where the 2026 release window was announced. CIG has not
                announced a CitizenCon 2956 or connected this event to any
                broader reveal — but an October weekend of first hands-on
                sessions, one year after the 2026 window was set, speaks for
                itself about where the game is. The official release target
                remains 2026;{' '}
                <Link href="/release-date" className="text-gold hover:text-goldDark transition-colors">
                  every official statement is tracked here
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
