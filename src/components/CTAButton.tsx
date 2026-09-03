'use client'
import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

const CTA_VARIANT_KEY = 'cta_variant'

/**
 * Sticky visitor-level A/B assignment. Reads localStorage; if unset, assigns
 * 'a' or 'b' at random and persists so the same visitor sees the same variant
 * on every button and every visit. Client-only — call from an effect.
 */
export function getCtaVariant(): 'a' | 'b' {
  if (typeof window === 'undefined') return 'a'
  try {
    const stored = window.localStorage.getItem(CTA_VARIANT_KEY)
    if (stored === 'a' || stored === 'b') return stored
    const assigned = Math.random() < 0.5 ? 'a' : 'b'
    window.localStorage.setItem(CTA_VARIANT_KEY, assigned)
    return assigned
  } catch {
    return 'a' // localStorage unavailable (private mode etc.)
  }
}

type Props = {
  trackingLabel?: string
  className?: string
  /** A/B copy test: two button-text variants. Assignment is sticky per visitor. */
  variants?: { a: string; b: string }
}

export default function CTAButton({ trackingLabel, className = '', variants }: Props) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL)
  const [abVariant, setAbVariant] = useState<'a' | 'b'>('a')
  useEffect(() => {
    setReferralUrl(getRotatedReferralUrl())
    if (variants) setAbVariant(getCtaVariant())
  }, [variants])

  const variantSuffix = variants ? `~${abVariant}` : ''

  const linkRef = useRef<HTMLAnchorElement>(null)
  const impressionFired = useRef(false)
  useEffect(() => {
    const el = linkRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return
        if (!entries.some((entry) => entry.isIntersecting)) return
        impressionFired.current = true
        observer.disconnect()
        const href = el.href
        const code = href.split('referral=')[1] ?? ''
        fetch('/api/log', {
          method: 'POST',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}${variantSuffix}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
            referrer: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('lref')) || '',
          }),
        }).catch(() => {})
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [trackingLabel, variantSuffix])

  const handleClick = () => {
    const code = referralUrl.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: `${trackingLabel ?? 'CTAButton'}${variantSuffix}`,
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
        referrer: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('lref')) || '',
      }),
    }).catch(() => {})
  }

  return (
    <a
      ref={linkRef}
      href={referralUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-6 py-3 hover:bg-goldDark transition-colors ${className}`}
    >
      {variants ? variants[abVariant] : 'Join Star Citizen While You Wait'}
      <ArrowUpRight size={16} aria-hidden />
    </a>
  )
}
