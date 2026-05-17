export type VideoEntry = {
  date: string
  title: string
  description: string  // one line
  thumbnailUrl: string // relative public path or remote URL (must match next.config remotePatterns)
  sourceUrl: string    // YouTube or RSI canonical URL
  duration?: string    // ISO 8601, e.g. 'PT12M30S'
}

export const VIDEOS: VideoEntry[] = []
