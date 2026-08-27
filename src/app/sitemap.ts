import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'
import { NEWS } from '@/data/news'
import { CAST } from '@/data/cast'

// Newest news entry date — the honest "last content change" signal for
// pages whose content is driven by the news feed.
const newestNewsDate = new Date(`${NEWS[0].date}T00:00:00Z`)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: newestNewsDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/news`,
      lastModified: newestNewsDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/cast`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/release-date`,
      lastModified: newestNewsDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/playtest-event`,
      lastModified: newestNewsDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/bishops-speech`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/faq`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/sq42-vs-star-citizen`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/worth-buying`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/gameplay`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/videos`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE.url}/vanduul`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/odin-system`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/i-held-the-line-trailer`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE.url}/about`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...CAST.map((member) => ({
      url: `${SITE.url}/cast/${member.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...NEWS.filter((entry) => entry.slug).map((entry) => ({
      url: `${SITE.url}/news/${entry.slug}`,
      lastModified: new Date(`${entry.date}T00:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
