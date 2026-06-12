import Image from 'next/image'
import Link from 'next/link'
import { CAST } from '@/data/cast'

export default function CastCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="heading-display text-sm uppercase tracking-[0.15em] text-gold mb-4">
        Confirmed Cast
      </h2>
      <ul className="space-y-3">
        {CAST.map(({ slug, actor, character, img }) => (
          <li key={slug}>
            <Link href={`/cast/${slug}`} className="flex items-center gap-3 group">
              <Image
                src={img}
                alt={actor}
                width={36}
                height={48}
                className="rounded object-cover shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-sm text-starwhite leading-tight group-hover:text-gold transition-colors">
                  {actor}
                </span>
                <span className="text-xs text-muted">{character}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-[10px] text-muted/50 mt-4 leading-snug">
        Photos via Wikimedia Commons (CC BY-SA). Gage Skidmore, Gabriel Hutchinson, NASA/Aubrey Gemignani, Fandomuniverse.
      </p>
    </div>
  )
}
