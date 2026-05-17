import Image from 'next/image'

const CAST = [
  { actor: 'Mark Hamill',       character: 'Steve "Old Man" Colton', img: '/images/cast/mark-hamill.jpg' },
  { actor: 'Gary Oldman',       character: 'Admiral Ernst Bishop',   img: '/images/cast/gary-oldman.jpg' },
  { actor: 'Gillian Anderson',  character: 'Capt. Rachel MacLaren',  img: '/images/cast/gillian-anderson.jpg' },
  { actor: 'Henry Cavill',      character: 'Cmdr. Ryan Enright',     img: '/images/cast/henry-cavill.jpg' },
  { actor: 'Andy Serkis',       character: 'Vanduul character',      img: '/images/cast/andy-serkis.jpg' },
  { actor: 'John Rhys-Davies',  character: 'Role TBA',               img: '/images/cast/john-rhys-davies.jpg' },
]

export default function CastCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="heading-display text-sm uppercase tracking-[0.15em] text-gold mb-4">
        Confirmed Cast
      </h2>
      <ul className="space-y-3">
        {CAST.map(({ actor, character, img }) => (
          <li key={actor} className="flex items-center gap-3">
            <Image
              src={img}
              alt={actor}
              width={36}
              height={48}
              className="rounded object-cover shrink-0"
            />
            <div className="flex flex-col">
              <span className="text-sm text-starwhite leading-tight">{actor}</span>
              <span className="text-xs text-muted">{character}</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-muted/50 mt-4 leading-snug">
        Photos via Wikimedia Commons (CC BY-SA). Gage Skidmore, Gabriel Hutchinson, NASA/Aubrey Gemignani, Fandomuniverse.
      </p>
    </div>
  )
}
