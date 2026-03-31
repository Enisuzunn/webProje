import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

const NAV_LINKS = [
  { href: '#hakkimda', label: 'Hakkımda' },
  { href: '#beceriler', label: 'Beceriler' },
  { href: '#projeler', label: 'Projeler' },
  { href: '#iletisim', label: 'İletişim' },
] as const

export default function Header() {
  const { isDark, toggleDark } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 py-4 bg-surface dark:bg-gray-900 border-b border-border dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <h1 className="text-lg sm:text-xl font-bold text-primary shrink-0">
          <a href="#hero" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary rounded">
            Enis Uzun — Portfolyo
          </a>
        </h1>

        <div className="flex items-center gap-2 md:order-last">
          <button
            type="button"
            onClick={toggleDark}
            aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150 text-lg leading-none"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            type="button"
            className="md:hidden p-2 rounded-md border border-border dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-main-nav"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <nav
          id="mobile-main-nav"
          aria-label="Ana navigasyon"
          className={[
            'w-full md:w-auto md:flex-1 md:flex md:justify-center',
            menuOpen ? 'flex flex-col gap-1 mt-2 pb-2 border-t border-border dark:border-gray-700 pt-3' : 'hidden md:flex md:flex-row md:items-center md:gap-1 md:mt-0 md:pt-0 md:pb-0 md:border-0',
          ].join(' ')}
        >
          <ul className="flex flex-col md:flex-row md:flex-wrap gap-1 list-none p-0 m-0 md:justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/ui-kit"
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                UI Kit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
