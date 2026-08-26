import { NextResponse } from 'next/server'
import type { NextRequest, NextFetchEvent } from 'next/server'

// AI-bot fetch logger — permanent, queryable record of which AI engines read
// which pages. Rows land in the shared click-tracking Sheet with an `ai-bot:`
// label prefix (Sheet only, no Discord — volume would drown the channel).
// Classic search crawlers (bingbot, googlebot, …) are deliberately NOT logged;
// BWT/GSC already cover them. Response is never blocked: logging rides
// event.waitUntil after NextResponse.next().

const AI_BOTS: Array<[RegExp, string]> = [
  [/ChatGPT-User/i, 'chatgpt-user'],
  [/OAI-SearchBot/i, 'oai-searchbot'],
  [/GPTBot/i, 'gptbot'],
  [/ChatGPT/i, 'chatgpt-other'],
  [/Claude-User/i, 'claude-user'],
  [/Claude-SearchBot/i, 'claude-searchbot'],
  [/ClaudeBot|anthropic-ai/i, 'claudebot'],
  [/Perplexity-User/i, 'perplexity-user'],
  [/PerplexityBot/i, 'perplexitybot'],
  [/DuckAssistBot/i, 'duckassistbot'],
  [/Amazonbot/i, 'amazonbot'],
  [/meta-externalagent|meta-webindexer/i, 'meta-ai'],
  [/Bytespider/i, 'bytespider'],
  [/Google-Extended/i, 'google-extended'],
  [/cohere-ai/i, 'cohere'],
  [/MistralAI/i, 'mistral'],
  [/YouBot/i, 'youbot'],
  [/Applebot-Extended/i, 'applebot-extended'],
]

// Belt-and-suspenders canonical signal alongside the <link rel="canonical">
// tags already emitted by page metadata. A rendered-HTML canonical tag can be
// missed or overridden when a page fails client-side (see app/error.tsx) —
// an HTTP Link header survives that failure mode and gives Google a second,
// header-level signal that agrees with the on-page canonical, which helps
// prevent the 747live.bet soft-404 canonical-hijack pattern.
//
// Must always match the exact convention used by page metadata: apex host
// (https://iheldtheline.com), no trailing slash — including the homepage
// (metadataBase resolves `alternates.canonical: '/'` to the bare origin, and
// the live site confirms `<link rel="canonical" href="https://iheldtheline.com"/>`
// with no trailing slash).
const CANONICAL_HOST = 'https://iheldtheline.com'

export function middleware(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next()

  const { pathname } = req.nextUrl

  const isHtmlRoute =
    req.method === 'GET' &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/') &&
    !/\.[^/]+$/.test(pathname)

  if (isHtmlRoute) {
    const canonicalPath = pathname === '/' ? '' : pathname.replace(/\/+$/, '')
    response.headers.set('Link', `<${CANONICAL_HOST}${canonicalPath}>; rel="canonical"`)
  }

  const ua = req.headers.get('user-agent') ?? ''
  const hit = AI_BOTS.find(([re]) => re.test(ua))
  const sheetUrl = process.env.CLICK_TRACKER_SHEET_URL

  if (hit && sheetUrl) {
    const timestamp =
      new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago',
        dateStyle: 'short',
        timeStyle: 'medium',
      }) + ' CST'
    event.waitUntil(
      fetch(sheetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp,
          site: (req.headers.get('host') ?? 'unknown').replace(/^www\./, ''),
          label: `ai-bot:${hit[1]}`,
          referralCode: '-',
          page: req.nextUrl.pathname,
          ipHash: '-',
          userAgent: ua.slice(0, 200),
        }),
      }).catch(() => {})
    )
  }

  return response
}

// Pages, llms.txt, robots.txt, and sitemaps — the fetches that mean an AI is
// reading content. Static assets and API routes are excluded to keep
// middleware invocations (billed) near zero for human traffic. Also covers
// the canonical-Link-header routes above (same set, minus the trailing
// exclusions which the isHtmlRoute check re-enforces per-request).
export const config = {
  matcher: [
    '/((?!_next/|api/|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp|avif|css|js|map|woff2?)$).*)',
  ],
}
