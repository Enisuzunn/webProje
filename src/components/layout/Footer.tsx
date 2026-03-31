export default function Footer() {
  return (
    <footer className="px-6 py-12 bg-surface dark:bg-gray-900 border-t border-border dark:border-gray-700 text-muted dark:text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">Enis Uzun</p>
          <p>Web Tasarımı ve Programlama — LAB Projeleri</p>
          <p>Öğrenci No: 230541106</p>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Bağlantılar</h2>
          <nav aria-label="Alt bilgi bağlantıları" className="flex flex-col gap-1">
            <a
              href="https://github.com/Enisuzunn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-secondary transition-colors"
            >
              GitHub
            </a>
            <a href="#hakkimda" className="hover:text-primary dark:hover:text-secondary transition-colors">
              Hakkımda
            </a>
            <a href="#projeler" className="hover:text-primary dark:hover:text-secondary transition-colors">
              Projeler
            </a>
            <a href="#iletisim" className="hover:text-primary dark:hover:text-secondary transition-colors">
              İletişim
            </a>
          </nav>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-border dark:border-gray-700 text-center">
        <p>&copy; 2026 Enis Uzun. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}
