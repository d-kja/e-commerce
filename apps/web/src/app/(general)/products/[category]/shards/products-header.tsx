import { Button } from '@sw-ec/ui'
import { ChevronDown } from 'lucide-react'
import { FC } from 'react'

export const ProductsHeader: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <strong className="text-xl font-semibold">
          <span className="xs:inline hidden">Listagem de produtos</span>
          <span className="xs:hidden inline">Produtos</span>
        </strong>
        <span className="text-sm font-normal xs:flex hidden">
          Mostrando 1-50 de 300 produtos
        </span>
      </div>

      <div className="join items-center">
        <Button
          variant="secondary"
          opt="outline"
          className="btn-sm text-xs py-0 join-item border border-neutral-content/75 rounded-l-full lg:hidden inline-block"
        >
          categorias
        </Button>
        <div className="dropdown join-item dropdown-left">
          <Button
            tabIndex={0}
            className="min-h-8 h-auto flex-1 px-3 py-2 btn-sm text-xs lg:rounded-full rounded-r-full border border-neutral-content/75"
            opt="outline"
            variant="secondary"
          >
            Ordenar <ChevronDown className="w-4 h-4 hidden xs:inline-block" />
          </Button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <a>Maior preço</a>
            </li>
            <li>
              <a>Menor preço</a>
            </li>
            <li>
              <a>Ordem crescente</a>
            </li>
            <li>
              <a>Ordem decrescente</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
