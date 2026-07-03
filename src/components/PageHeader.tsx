import Image from 'next/image'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  /** Path under /public, e.g. /images/headers/gameplay.jpg */
  image: string
  imageAlt: string
  /** Optional extra content rendered below the description (e.g. a subtitle line). */
  children?: ReactNode
}

/**
 * Full-bleed page banner: a Star Citizen screenshot behind the same
 * navy gradient treatment as the homepage hero, with the page's
 * eyebrow / h1 / description on top. Replaces the old in-column
 * <header> block on interior pages.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-navy">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy pointer-events-none"
        aria-hidden
      />
      <div className="container-wide relative py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
          {eyebrow}
        </p>
        <h1 className="heading-display text-4xl sm:text-5xl mb-4 max-w-3xl">{title}</h1>
        {description ? (
          <p className="text-starwhite/80 text-base leading-relaxed max-w-2xl">{description}</p>
        ) : null}
        {children}
      </div>
    </section>
  )
}
