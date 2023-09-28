import { Filters } from './shards/filters'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex gap-9 pt-16">
      <Filters />
      {children}
    </main>
  )
}
