import { FC } from 'react'

import { ChevronDown } from 'lucide-react'

export interface LanguageBarProps {
  label?: string
  languages: string[]
  onLanguageChange: (language: string) => void
}

export const LanguageBar: FC<LanguageBarProps> = ({
  label,
  languages,
  onLanguageChange,
}) => {
  return (
    <section title="Language bar" className="w-full bg-base-300">
      <div className="flex items-center justify-between h-8 px-6 py-2 max-w-[980px] mx-auto">
        <span className="font-xs font-normal">
          Selecione a linguagem da aplicação
        </span>

        <details className="dropdown p-0">
          <summary className="btn btn-xs btn-ghost gap-1 font-normal text-xs">
            {label} <ChevronDown className="w-4 h-4" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md">
            {languages.map((lang) => (
              <li key={lang} className="flex justify-center items-center">
                <button
                  className="btn btn-ghost btn-xs font-normal text-xs p-1"
                  onClick={() => onLanguageChange(lang)}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  )
}
