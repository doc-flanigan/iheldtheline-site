export type NewsEntry = {
  date: string        // ISO 8601, e.g. '2025-05-01'
  headline: string
  summary: string     // 2-3 sentences, plain English
  sourceLabel: string // e.g. 'RSI Comm-Link'
  sourceUrl: string
}

export const NEWS: NewsEntry[] = []
