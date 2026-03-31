export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="px-6 py-20 md:py-28 bg-gradient-to-b from-surface to-white dark:from-gray-900 dark:to-gray-950 border-b border-border dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-secondary dark:text-blue-400 mb-3">
          Yazılım Mühendisliği Öğrencisi
        </p>
        <h2 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Merhaba, ben <span className="text-primary">Enis Uzun</span>
        </h2>
        <p className="text-lg md:text-xl text-muted dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Modern web teknolojileri ile kullanıcı odaklı arayüzler ve sağlam backend yapıları geliştiriyorum.
          Projelerimi ve iletişim bilgilerimi aşağıda bulabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projeler"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            Projeleri gör
          </a>
          <a
            href="#iletisim"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary dark:text-blue-300 font-medium hover:bg-primary hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            İletişime geç
          </a>
        </div>
      </div>
    </section>
  )
}
