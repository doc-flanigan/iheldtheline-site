const FACTS = [
  { label: 'Release window', value: '2026' },
  { label: 'Type', value: 'Single-player campaign' },
  { label: 'Studio', value: 'Cloud Imperium Games' },
  { label: 'Engine', value: 'Star Engine (shared with Star Citizen)' },
  { label: 'Campaign length', value: '~30–40 hours' },
  { label: 'Platform', value: 'PC' },
]

export default function QuickFactsCard() {
  return (
    <div className="card-surface p-5">
      <h2 className="heading-display text-sm uppercase tracking-[0.15em] text-gold mb-4">
        Quick Facts
      </h2>
      <dl className="space-y-3">
        {FACTS.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-xs uppercase tracking-wider text-muted mb-0.5">{label}</dt>
            <dd className="text-sm text-starwhite">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
