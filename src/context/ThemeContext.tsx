import { createContext, useContext, useState, type ReactNode } from 'react'

interface ThemeContextType {
  isDark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleDark: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark: () => setIsDark(d => !d) }}>
      {/* .dark sınıfı tüm uygulamayı saran div'e ekleniyor */}
      <div className={isDark ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
