const CAST = [
  { actor: 'Mark Hamill', character: 'Steve "Old Man" Colton' },
  { actor: 'Gary Oldman', character: 'Admiral Ernst Bishop' },
  { actor: 'Gillian Anderson', character: 'Capt. Rachel MacLaren' },
  { actor: 'Henry Cavill', character: 'Cmdr. Ryan Enright' },
  { actor: 'Andy Serkis', character: 'Vanduul character' },
  { actor: 'John Rhys-Davies', character: 'Role TBA' },
]

export default function CastCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="heading-display text-sm uppercase tracking-[0.15em] text-gold mb-4">
        Confirmed Cast
      </h2>
      <ul className="space-y-3">
        {CAST.map(({ actor, character }) => (
          <li key={actor} className="flex flex-col">
            <span className="text-sm text-starwhite">{actor}</span>
            <span className="text-xs text-muted">{character}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
