import type { FaqItem as FaqItemType } from '@/data/faq'

export default function FaqItem({ item }: { item: FaqItemType }) {
  return (
    <details className="group card-surface hover:border-gold/20 transition-colors">
      <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none select-none">
        <span className="font-semibold text-starwhite text-sm leading-snug">{item.question}</span>
        <span
          className="text-gold text-xl leading-none shrink-0 group-open:rotate-45 transition-transform duration-200 mt-0.5"
          aria-hidden
        >
          +
        </span>
      </summary>
      <div className="px-5 pb-5 pt-0">
        <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
        {item.sourceUrl && (
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-gold text-xs hover:text-goldDark transition-colors"
          >
            Source →
          </a>
        )}
      </div>
    </details>
  )
}
