import { FC } from 'react'

import { ChevronDown } from 'lucide-react'

export interface LanguageBarProps {
  selectedLanguage?: string
  languages: string[]
  onLanguageChange: (language: string) => void
}

export const LanguageBar: FC<LanguageBarProps> = ({
  selectedLanguage,
  languages,
  onLanguageChange,
}) => {
  return (
    <section title="Language bar" className="w-full bg-base-300">
      <div className="flex items-center justify-between h-8 px-6 py-2 max-w-[1220px] mx-auto">
        <span className="text-xs font-normal">
          Selecione a linguagem da aplicação
        </span>

        <div className="dropdown p-0">
          <label
            tabIndex={0}
            className="btn btn-xs btn-ghost gap-1 font-normal text-xs"
          >
            {selectedLanguage} <ChevronDown className="w-4 h-4" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            {languages.map((lang) => (
              <li key={lang} className="flex justify-center items-center">
                <button
                  className="px-2 py-1"
                  onClick={() => onLanguageChange(lang)}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
