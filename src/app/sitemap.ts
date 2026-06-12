import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'

const NEWS_SLUGS = [
  'chris-roberts-2026-target-gta6',
  'chairmans-letter-2025-40-hours-feature-playable',
  'citizencon-direct-2955-no-sq42-segment',
  'q3-2025-newsletter-odin-system',
  'sq42-newsletter-may-2025-42nd-squadron',
  'sq42-newsletter-march-2025-vanduul-contest',
  'sq42-newsletter-january-2025-abbey-road',
  'citizencon-2954-gameplay-reveal-2026-window',
  'monthly-report-september-2024',
  'monthly-report-august-2024',
  'monthly-report-july-2024',
  'monthly-report-june-2024',
  'monthly-report-may-2024',
  'citizencon-2953-i-held-the-line-feature-complete',
]

const CAST_SLUGS = [
  'mark-hamill',
  'gary-oldman',
  'gillian-anderson',
  'henry-cavill',
  'andy-serkis',
  'john-rhys-davies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/news`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/cast`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/release-date`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/sq42-vs-star-citizen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/worth-buying`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/gameplay`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/videos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/vanduul`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/odin-system`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/i-held-the-line-trailer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...CAST_SLUGS.map((slug) => ({
      url: `${SITE.url}/cast/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...NEWS_SLUGS.map((slug) => ({
      url: `${SITE.url}/news/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
