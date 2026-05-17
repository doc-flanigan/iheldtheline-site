import QuickFactsCard from './QuickFactsCard'
import KeyLinksCard from './KeyLinksCard'
import CastCard from './CastCard'

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-64 xl:w-72 shrink-0 sticky top-24">
      <QuickFactsCard />
      <KeyLinksCard />
      <CastCard />
    </aside>
  )
}
