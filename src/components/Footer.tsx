import Image from 'next/image'
import Link from 'next/link'
import CTAButton from '@/components/CTAButton'
import { SITE } from '@/data/site'

const EXPLORE_LINKS = [
  { href: '/news', label: 'Development News' },
  { href: '/release-date', label: 'Release Date Tracker' },
  { href: '/gameplay', label: 'Gameplay Systems' },
  { href: '/cast', label: 'Cast' },
  { href: '/videos', label: 'Official Videos' },
  { href: '/i-held-the-line-trailer', label: '"I Held the Line" Video' },
  { href: '/bishops-speech', label: "Bishop's Speeches" },
  { href: '/vanduul', label: 'The Vanduul' },
  { href: '/odin-system', label: 'The Odin System' },
  { href: '/sq42-vs-star-citizen', label: 'SQ42 vs Star Citizen' },
  { href: '/worth-buying', label: 'Worth Buying?' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navyLight border-t border-gold/20 mt-20">
      {/* CTA strip */}
      <div className="border-b border-gold/10 py-10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm text-center sm:text-left">
            Squadron 42 is coming — Star Citizen is playable right now.
          </p>
          <CTAButton trackingLabel="Footer CTA" className="shrink-0" />
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 mb-8">
          <div className="max-w-xs">
            <p className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase mb-1">
              I Held the Line
            </p>
            <p className="text-muted text-xs">{SITE.tagline}</p>
            <p className="text-muted text-xs mt-4 leading-relaxed">
              New to Star Citizen?{' '}
              <a
                href="https://dayonecitizen.com"
                target="_blank"
                rel="noopener"
                className="text-gold hover:text-goldDark transition-colors"
              >
                Start at dayonecitizen.com
              </a>{' '}
              — the plain-English getting-started guide.
            </p>
          </div>

          <nav aria-label="Explore the site">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Explore
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-xs hover:text-starwhite transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="https://robertsspaceindustries.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto"
          >
            <Image
              src="/images/brand/made-by-community.png"
              alt="Made by the Star Citizen Community"
              width={120}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>

        <div className="border-t border-gold/10 pt-6 space-y-2">
          <p className="text-muted text-xs leading-relaxed">
            iheldtheline.com is an unofficial fan site. It is not affiliated with, endorsed by, or
            connected to Cloud Imperium Games, Roberts Space Industries, or the Star Citizen
            franchise.
          </p>
          <p className="text-muted text-xs leading-relaxed">
            Star Citizen™ and Squadron 42™ are trademarks of Cloud Imperium Rights LLC. All game
            assets © Cloud Imperium Rights LLC.
          </p>
          <p className="text-muted text-xs leading-relaxed">
            Affiliate disclosure: If you create a Star Citizen account using referral code STAR-GCQJ-N6NC, the site owner may receive an in-game bonus. Your 50,000 aUEC new-player bonus is not affected.
          </p>
          <p className="text-muted text-xs">
            © {year} iheldtheline.com — created by {SITE.author}
          </p>
        </div>
      </div>
    </footer>
  )
}
