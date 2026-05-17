const LINKS = [
  {
    label: 'Official Squadron 42 site',
    href: 'https://squadron42.com/en/',
  },
  {
    label: 'Buy Squadron 42 — RSI Store',
    href: 'https://robertsspaceindustries.com/en/store/pledge/browse/sq42',
  },
  {
    label: 'RSI Comm-Link — Dev Updates',
    href: 'https://robertsspaceindustries.com/comm-link',
  },
  {
    label: 'CitizenCon 2954 — YouTube Playlist',
    href: 'https://www.youtube.com/playlist?list=PLVct2QDhDrB3LD_HNLH3GPblpjJ1NFLYQ',
  },
]

export default function KeyLinksCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="heading-display text-sm uppercase tracking-[0.15em] text-gold mb-4">
        Key Links
      </h2>
      <ul className="space-y-2">
        {LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-gold transition-colors flex items-start gap-2 group"
            >
              <span className="mt-0.5 shrink-0 text-gold/40 group-hover:text-gold transition-colors">
                →
              </span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
