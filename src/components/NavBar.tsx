'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import CTAButton from '@/components/CTAButton'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/cast', label: 'Cast' },
  { href: '/release-date', label: 'Release Date' },
  { href: '/videos', label: 'Videos' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navyLight border-b-2 border-gold">
      <nav className="container-wide flex items-center justify-between h-14" aria-label="Main navigation">
        <Link
          href="/"
          className="font-display text-gold font-bold text-sm tracking-[0.15em] uppercase hover:text-goldDark transition-colors shrink-0"
        >
          I Held the Line
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-starwhite/80 hover:text-gold text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <CTAButton
            trackingLabel="NavBar CTA"
            className="!px-4 !py-1.5 !text-xs"
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-starwhite hover:text-gold transition-colors p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-navyLight border-t border-gold/20 px-4 py-3 flex flex-col gap-1">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-2 text-starwhite/80 hover:text-gold text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-3 pb-1">
            <CTAButton trackingLabel="NavBar Mobile CTA" className="!text-xs w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  )
}
