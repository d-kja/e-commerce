import { setTheme, themes } from '../utils/change-theme'

export type Theme = {
  name: string
  id: number
}

export function ThemeSelector() {
  return (
    <div className="grid grid-cols-4 gap-2 py-2">
      {themes &&
        themes.map((theme) => (
          <button
            key={theme.id}
            className="px-6 py-4 border border-zinc-600 bg-zinc-800 hover:bg-zinc-700 transition-all text-zinc-50 rounded text-start"
            onClick={() => setTheme({ theme: theme.name })}
          >
            <span className="flex">
              <span>
                <span className="capitalize">{theme.name}</span> theme
              </span>
              <strong className="ml-auto">#{theme.id}</strong>
            </span>
          </button>
        ))}
    </div>
  )
}
