import Image from 'next/image'
import CTAButton from '@/components/CTAButton'
import { SITE } from '@/data/site'

const FRIEND_SITES = [
  { label: 'Day One Citizen',   href: 'https://www.dayonecitizen.com' },
  { label: 'Free Fly Event',    href: 'https://www.freeflyevent.com' },
  { label: 'Star Citizen Help', href: 'https://www.starcitizenhelp.com' },
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
          <div>
            <p className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase mb-1">
              I Held the Line
            </p>
            <p className="text-muted text-xs">{SITE.tagline}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              SC Community
            </p>
            <ul className="space-y-1">
              {FRIEND_SITES.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-gold transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
          <p className="text-muted text-xs">
            © {year} iheldtheline.com — created by {SITE.author}
          </p>
        </div>
      </div>
    </footer>
  )
}
