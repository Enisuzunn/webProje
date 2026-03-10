import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useTheme } from './context/ThemeContext'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

/* -------------------------------------------------------
   Mevcut tüm state ve form doğrulama mantığı KORUNUYORk
   ------------------------------------------------------- */
function App() {
  const { isDark, toggleDark } = useTheme()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}

    if (formData.name.length < 2) newErrors.name = 'Ad Soyad en az 2 karakter olmalı'
    if (!formData.email.includes('@')) newErrors.email = 'Geçerli bir e-posta girin'
    if (!formData.subject) newErrors.subject = 'Konu seçiniz'
    if (formData.message.length < 10) newErrors.message = 'Mesaj en az 10 karakter olmalı'

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      alert('Form başarıyla gönderildi!')
    }
  }

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Sitesi',
      description: 'React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.',
      image: '/proje1.jpg',
      imageAlt: 'E-Ticaret sitesi ekran görüntüsü',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Blog Uygulaması',
      description: 'Kişisel blog platformu. Markdown destekli yazı editörü.',
      image: '/proje2.jpg',
      imageAlt: 'Blog uygulaması yazı listesi görünümü',
      tags: ['TypeScript', 'Next.js'],
    },
    {
      id: 3,
      title: 'Hava Durumu',
      description: 'OpenWeather API ile anlık hava durumu bilgisi.',
      image: '/proje3.jpg',
      imageAlt: 'Hava durumu uygulaması arayüzü',
      tags: ['JavaScript', 'API'],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Skip Navigation — erişilebilirlik */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-10 flex flex-wrap justify-between items-center gap-3 px-6 py-4 bg-surface dark:bg-gray-900 border-b border-border dark:border-gray-700 shadow-sm">
        <h1 className="text-xl font-bold text-primary">Enis Uzun - Portfolyo</h1>

        <nav aria-label="Ana navigasyon">
          <ul className="flex flex-wrap gap-1 list-none p-0 m-0">
            <li>
              <a href="#hakkimda" className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-150">
                Hakkımda
              </a>
            </li>
            <li>
              <a href="#projeler" className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-150">
                Projeler
              </a>
            </li>
            <li>
              <a href="#iletisim" className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white transition-colors duration-150">
                İletişim
              </a>
            </li>
            <li>
              <Link
                to="/ui-kit"
                className="px-3 py-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                UI Kit
              </Link>
            </li>
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDark}
          aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150 text-lg leading-none"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </header>

      {/* ===== MAIN ===== */}
      <main id="main-content" className="max-w-6xl mx-auto">

        {/* --- Hakkımda --- */}
        <section id="hakkimda" className="px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Hakkımda</h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
            <figure className="max-w-[200px] mx-auto md:mx-0 shrink-0">
              <img
                src="/foto.png"
                alt="Enis Uzun profil fotoğrafı"
                className="rounded-full aspect-square object-cover w-48 h-48"
              />
            </figure>

            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                Merhaba! Ben Enis Uzun. Yazılım geliştirme ve özellikle .NET teknolojileri konusunda tutkulu bir öğrenciyim.
                .NET framework ve ekosistemini çok seviyorum ve bu alanda aktif olarak projeler geliştiriyorum.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                Web Tasarımı ve Programlama dersi kapsamında bu portföy sayfasını geliştirdim.
                Modern web teknolojileri, backend sistemler ve yazılım mimarisi alanlarında kendimi sürekli geliştirmeye çalışıyorum.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eğitim</h3>
              <div className="bg-surface dark:bg-gray-800 border-l-4 border-primary rounded-md p-4 mb-5">
                <p className="text-gray-700 dark:text-gray-300 py-0.5"><strong>Üniversite:</strong> Fırat Üniversitesi</p>
                <p className="text-gray-700 dark:text-gray-300 py-0.5"><strong>Öğrenci No:</strong> 230541106</p>
                <p className="text-gray-700 dark:text-gray-300 py-0.5"><strong>Bölüm:</strong> Yazılım Mühendisliği</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Kullandığım Teknolojiler:</h3>
              <ul
                className="flex flex-wrap gap-2 list-none p-0"
                role="list"
                aria-label="Beceri etiketleri"
              >
                {['HTML5','CSS3','JavaScript','React','TypeScript','Git','.NET','C#','Python','C++'].map(skill => (
                  <li
                    key={skill}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- Projeler --- */}
        <section id="projeler" className="px-6 py-16 md:py-20 bg-surface dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Projelerim</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <Card
                key={project.id}
                variant="elevated"
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                footer={
                  <ul className="flex flex-wrap gap-2 list-none p-0">
                    {project.tags.map(tag => (
                      <li key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </li>
                    ))}
                  </ul>
                }
              >
                {project.description}
              </Card>
            ))}
          </div>
        </section>

        {/* --- İletişim --- */}
        <section id="iletisim" className="px-6 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">İletişim</h2>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} noValidate>
              <fieldset className="border-2 border-border dark:border-gray-600 rounded-lg p-6 space-y-5">
                <legend className="text-lg font-semibold px-2 text-gray-900 dark:text-white">
                  İletişim Formu
                </legend>

                <Input
                  id="name"
                  label="Ad Soyad:"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  minLength={2}
                  error={errors.name}
                />

                <Input
                  id="email"
                  label="E-posta:"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  error={errors.email}
                />

                {/* Select — Input bileşeni input'a özgü, select ayrı tutuldu */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Konu:
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={[
                      'w-full px-3 py-2 border rounded-md text-base',
                      'bg-white dark:bg-gray-800 dark:text-white',
                      'transition-colors duration-150',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2',
                      errors.subject
                        ? 'border-error focus:ring-red-400'
                        : 'border-border dark:border-gray-600 focus:ring-blue-400',
                    ].join(' ')}
                  >
                    <option value="">-- Seçiniz --</option>
                    <option value="is">İş Teklifi</option>
                    <option value="soru">Soru</option>
                    <option value="oneri">Öneri</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" role="alert" className="text-sm text-error font-medium">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Textarea */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Mesajınız:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    minLength={10}
                    rows={5}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={[
                      'w-full px-3 py-2 border rounded-md text-base',
                      'bg-white dark:bg-gray-800 dark:text-white',
                      'resize-vertical min-h-[120px]',
                      'transition-colors duration-150',
                      'focus:outline-none focus:ring-2 focus:ring-offset-2',
                      errors.message
                        ? 'border-error focus:ring-red-400'
                        : 'border-border dark:border-gray-600 focus:ring-blue-400',
                    ].join(' ')}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-sm text-error font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button type="submit" variant="primary" size="md">
                  Gönder
                </Button>
              </fieldset>
            </form>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 py-12 bg-surface dark:bg-gray-900 border-t border-border dark:border-gray-700 text-muted dark:text-gray-400 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div className="footer-info">
            <p className="text-base font-semibold text-gray-900 dark:text-white mb-1">Enis Uzun</p>
            <p>Web Tasarımı ve Programlama - LAB Projeleri</p>
            <p>Öğrenci No: 230541106</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bağlantılar</h3>
            <nav aria-label="Sosyal medya bağlantıları" className="flex flex-col gap-1">
              <a
                href="https://github.com/Enisuzunn"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-secondary transition-colors"
              >
                GitHub
              </a>
              <a href="#hakkimda" className="hover:text-primary dark:hover:text-secondary transition-colors">Hakkımda</a>
              <a href="#projeler"  className="hover:text-primary dark:hover:text-secondary transition-colors">Projeler</a>
              <a href="#iletisim"  className="hover:text-primary dark:hover:text-secondary transition-colors">İletişim</a>
            </nav>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-4 border-t border-border dark:border-gray-700 text-center">
          <p>&copy; 2026 Enis Uzun. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
