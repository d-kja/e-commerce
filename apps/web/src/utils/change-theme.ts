interface SetThemeProps {
  theme: string
}

export function setTheme({ theme = 'dark' }: SetThemeProps) {
  const rootElement = document.querySelector('html')

  if (rootElement !== null) {
    rootElement.setAttribute('data-theme', theme)
  }
}
