import type { Metadata } from 'next'
import FaqItem from '@/components/FaqItem'
import PageHeader from '@/components/PageHeader'
import Sidebar from '@/components/sidebar/Sidebar'
import { PageSources } from '@/components/PageSources'
import { FAQ } from '@/data/faq'
import { SITE } from '@/data/site'

export const metadata: Metadata = {
  title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
  description:
    'Common Squadron 42 questions answered — release date, cast, differences from Star Citizen, and system requirements.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Squadron 42 FAQ — Release Date, Cast, Gameplay',
    description:
      'Common Squadron 42 questions answered from official CIG sources — release date, cast, system requirements, Star Citizen differences.',
    url: '/faq',
    images: [
      {
        url: '/images/headers/faq.jpg',
        width: 1920,
        height: 804,
        alt: "A pilot looks out from a fighter cockpit at a UEE Navy capital ship and its escorts cruising above a planet's horizon.",
      },
    ],
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
      <PageHeader
        eyebrow="FAQ"
        title="Squadron 42 — Common Questions"
        description="Answers verified against official Cloud Imperium Games sources only."
        image="/images/headers/faq.jpg"
        imageAlt="A pilot looks out from a fighter cockpit at a UEE Navy capital ship and its escorts cruising above a planet's horizon."
      />
      <main className="container-wide py-12 sm:py-16">
        <div className="flex gap-12 items-start">
          <div className="flex-1 min-w-0">
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

      <PageSources route="/faq" />
    </>
  )
}
