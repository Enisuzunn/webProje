import { useState } from 'react'
import './App.css'

function App() {
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

  return (
    <>
      {/* Skip Navigation */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* Header ve Navigasyon */}
      <header>
        <h1>Enis Uzun - Portfolyo</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="profile-placeholder">
            <div className="avatar">EU</div>
          </div>
          <p>
            Merhaba! Ben Enis Uzun. Öğrenci numaram: 230541106. Web Tasarımı ve Programlama dersi kapsamında
            bu portföy sayfasını geliştirdim. Yazılım geliştirme ve web teknolojileri konusunda tutkulu bir öğrenciyim.
          </p>
          <h3>Kullandığım Teknolojiler:</h3>
          <div className="tech-stack">
            <span className="tech-badge">React 18</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Vite</span>
            <span className="tech-badge">HTML5</span>
            <span className="tech-badge">CSS3</span>
            <span className="tech-badge">Git</span>
            <span className="tech-badge">Python</span>
            <span className="tech-badge">C++</span>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>TelemetryGroundStation</h3>
            <p>
              Telemetri verilerini toplayan ve işleyen yer istasyonu projesi. 
              Gerçek zamanlı veri alımı ve izleme özellikleri içerir.
            </p>
            <p><strong>Teknolojiler:</strong> Python, C++, Real-time Data Processing</p>
            <p>
              <a 
                href="https://github.com/Enisuzunn/TelemetryGroundStation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub'da Görüntüle →
              </a>
            </p>
          </article>

          <article>
            <h3>TelemetryDashboard</h3>
            <p>
              Telemetri verilerini görselleştiren dashboard uygulaması.
              Grafik ve metrik gösterimleri ile detaylı veri analizi sağlar.
            </p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, Chart.js, WebSocket</p>
            <p>
              <a 
                href="https://github.com/Enisuzunn/TelemetryDashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                GitHub'da Görüntüle →
              </a>
            </p>
          </article>
        </section>

        {/* İletişim Formu */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <small id="name-error" className="error-msg" role="alert">
                    {errors.name}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <small id="email-error" className="error-msg" role="alert">
                    {errors.email}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                {errors.subject && (
                  <small id="subject-error" className="error-msg" role="alert">
                    {errors.subject}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  minLength={10}
                  rows={5}
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && (
                  <small id="message-error" className="error-msg" role="alert">
                    {errors.message}
                  </small>
                )}
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-title">Enis Uzun</p>
            <p className="footer-subtitle">Web Tasarımı ve Programlama - LAB Projeleri</p>
            <p className="footer-student">Öğrenci No: 230541106</p>
          </div>
          <div className="footer-links">
            <h3>Bağlantılar</h3>
            <nav aria-label="Sosyal medya bağlantıları">
              <a 
                href="https://github.com/Enisuzunn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
              <a href="#hakkimda" className="footer-link">Hakkımda</a>
              <a href="#projeler" className="footer-link">Projeler</a>
              <a href="#iletisim" className="footer-link">İletişim</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Enis Uzun. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  )
}

export default App
