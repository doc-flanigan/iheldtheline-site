import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'About This Site',
  description:
    'About iheldtheline.com — an unofficial Squadron 42 fan site created by Doc_Flanigan. Fan-site disclaimer, trademark notice, and contact information.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About This Site — I Held the Line',
    description:
      'About iheldtheline.com — an unofficial Squadron 42 fan site created by Doc_Flanigan. Fan-site disclaimer, trademark notice, and contact information.',
    url: '/about',
    images: [
      {
        url: '/images/headers/about.jpg',
        width: 1920,
        height: 1080,
        alt: 'A crew member walks beneath a sleek black-and-white fighter parked in a dim hangar, a boarding ladder resting against its open cockpit.',
      },
    ],
  },
}

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE.url}/about` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader
        eyebrow="About"
        title="About This Site"
        image="/images/headers/about.jpg"
        imageAlt="A crew member walks beneath a sleek black-and-white fighter parked in a dim hangar, a boarding ladder resting against its open cockpit."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <div className="max-w-2xl space-y-6 text-muted text-base leading-relaxed">
              <p>
                <strong className="text-starwhite">iheldtheline.com</strong> is an unofficial fan
                site dedicated to tracking Squadron 42 — the single-player campaign from Cloud
                Imperium Games. The name references the Battle of Vega II, the in-fiction event that
                opens the Squadron 42 storyline.
              </p>
              <p>
                This site is run by <strong className="text-starwhite">{SITE.author}</strong>, a
                long-time Star Citizen backer. The goal is to give Squadron 42 followers — veterans
                and newcomers alike — a single honest place to track development without hype,
                speculation, or gatekeeping.
              </p>
              <p>
                All factual content (news, videos, FAQ answers) is sourced exclusively from official
                Cloud Imperium Games and Roberts Space Industries communications. Nothing is invented
                or extrapolated from community rumour.
              </p>

              <div className="border-t border-gold/10 pt-6 space-y-4">
                <h2 className="heading-display text-xl">Photo Credits</h2>
                <p>Hero images courtesy of the Star Citizen photography community:</p>
                <ul className="list-none space-y-1">
                  <li>
                    <a
                      href="https://www.flickr.com/photos/wmk_gaming/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-starwhite transition-colors"
                    >
                      wmk
                    </a>{' '}
                    — Star Citizen photography on Flickr
                  </li>
                  <li>
                    <a
                      href="https://www.hasgaha.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-starwhite transition-colors"
                    >
                      hasgaha
                    </a>{' '}
                    — Star Citizen photography at hasgaha.com
                  </li>
                </ul>
              </div>

              <div className="border-t border-gold/10 pt-6 space-y-4">
                <h2 className="heading-display text-xl">Disclaimer</h2>
                <p>
                  iheldtheline.com is an unofficial fan site. It is not affiliated with, endorsed by,
                  or connected to Cloud Imperium Games, Roberts Space Industries, or the Star Citizen
                  franchise in any way.
                </p>
                <p>
                  Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC. All
                  game assets, names, and likenesses are © Cloud Imperium Rights LLC. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
