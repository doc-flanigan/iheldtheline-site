export type FaqItem = {
  question: string
  answer: string      // plain English, fact-checked
  sourceUrl?: string
}

export const FAQ: FaqItem[] = []
