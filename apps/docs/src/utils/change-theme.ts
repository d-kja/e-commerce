import { Theme } from '../components/theme-selector'

export const themes = [
  { name: 'light', id: 0 },
  { name: 'dark', id: 1 },
  { name: 'cupcake', id: 2 },
  { name: 'bumblebee', id: 3 },
  { name: 'emerald', id: 4 },
  { name: 'corporate', id: 5 },
  { name: 'synthwave', id: 6 },
  { name: 'retro', id: 7 },
  { name: 'cyberpunk', id: 8 },
  { name: 'valentine', id: 9 },
  { name: 'halloween', id: 10 },
  { name: 'garden', id: 11 },
  { name: 'forest', id: 12 },
  { name: 'aqua', id: 13 },
  { name: 'lofi', id: 14 },
  { name: 'pastel', id: 15 },
  { name: 'fantasy', id: 16 },
  { name: 'wireframe', id: 17 },
  { name: 'black', id: 18 },
  { name: 'luxury', id: 19 },
  { name: 'dracula', id: 20 },
  { name: 'cmyk', id: 21 },
  { name: 'autumn', id: 22 },
  { name: 'business', id: 23 },
  { name: 'acid', id: 24 },
  { name: 'lemonade', id: 25 },
  { name: 'night', id: 26 },
  { name: 'coffee', id: 27 },
  { name: 'winter', id: 28 },
] as Theme[]

interface SetThemeProps {
  theme: string
}

export function setTheme({ theme = 'dark' }: SetThemeProps) {
  const rootElement = document.querySelector('html')

  if (rootElement !== null) {
    rootElement.setAttribute('data-theme', theme)
  }
}
