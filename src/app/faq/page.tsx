import type { Metadata } from 'next'
import FaqItem from '@/components/FaqItem'
import Sidebar from '@/components/sidebar/Sidebar'
import { FAQ } from '@/data/faq'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
  description:
    'Answers to the most common Squadron 42 questions — release date, cast (Mark Hamill, Gary Oldman, Gillian Anderson), differences from Star Citizen, system requirements, and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
    description:
      'Common Squadron 42 questions answered from official CIG sources — release date, cast, system requirements, Star Citizen differences.',
    url: '/faq',
  },
}

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: `${SITE.url}/faq` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="container-wide py-16 sm:py-24">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
            <header className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">FAQ</p>
              <h1 className="heading-display text-4xl sm:text-5xl mb-4">
                Squadron 42 — Common Questions
              </h1>
              <p className="text-muted text-base">
                Answers verified against official Cloud Imperium Games sources only.
              </p>
            </header>

            {FAQ.length === 0 ? (
              <p className="text-muted">FAQ coming soon.</p>
            ) : (
              <div className="max-w-3xl space-y-3">
                {FAQ.map((item, i) => (
                  <FaqItem key={i} item={item} />
                ))}
              </div>
            )}
          </div>

          <Sidebar />
        </div>
      </main>
    </>
  )
}
