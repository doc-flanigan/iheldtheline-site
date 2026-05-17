'use client'
import { useState, useEffect } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

type Props = {
  trackingLabel?: string
  className?: string
}

export default function CTAButton({ trackingLabel, className = '' }: Props) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setReferralUrl(getRotatedReferralUrl()) }, [])

  const handleClick = () => {
    const code = referralUrl.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: trackingLabel ?? 'CTAButton',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      href={referralUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full bg-gold text-navy font-semibold px-6 py-3 hover:bg-goldDark transition-colors ${className}`}
    >
      Join Star Citizen While You Wait
      <ArrowUpRight size={16} aria-hidden />
    </a>
  )
}
