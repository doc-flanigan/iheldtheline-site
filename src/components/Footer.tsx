import { SITE } from '@/data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navyLight border-t border-gold/20 mt-20">
      <div className="container-wide py-12">
        <div className="mb-6">
          <p className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase mb-1">
            I Held the Line
          </p>
          <p className="text-muted text-xs">{SITE.tagline}</p>
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
