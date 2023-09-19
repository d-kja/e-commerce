import { FC } from 'react'

import { Search } from 'lucide-react'
import { Button } from '../../../ui/button'

export interface NavbarProps {
  search: {
    toggle: () => void
    isOpen: boolean
  }
}

export const Navbar: FC<NavbarProps> = ({ search }) => {
  return (
    <nav>
      <Button
        squared
        opt="outline"
        className="rounded-2xl"
        onClick={search.toggle}
      >
        <Search className="w-6 h-6" strokeWidth={1.5} />
      </Button>

      <div className="px-4 py-3 flex flex-col gap-6"></div>
    </nav>
  )
}
