import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
  const { isDark, toggleDark } = useTheme()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      {/* Minimal Header */}
      <header className="sticky top-0 z-10 flex justify-between items-center px-6 py-4 bg-surface dark:bg-gray-900 border-b border-border dark:border-gray-700 shadow-sm">
        <Link
          to="/"
          className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-secondary transition-colors"
        >
          ← Portfolyoya Dön
        </Link>
        <span className="text-lg font-bold text-primary">UI Kit</span>
        <button
          onClick={toggleDark}
          aria-label={isDark ? 'Açık moda geç' : 'Koyu moda geç'}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150 text-lg leading-none"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">

        {/* ── BUTTONS ─────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Button — Varyantlar & Boyutlar
          </h2>

          {/* Varyant 1: 4 renk varyantı */}
          <div>
            <p className="text-sm font-semibold text-muted dark:text-gray-400 mb-2">Renk Varyantları</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Varyant 2: Boyutlar */}
          <div>
            <p className="text-sm font-semibold text-muted dark:text-gray-400 mb-2">Boyutlar</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Varyant 3: Disabled */}
          <div>
            <p className="text-sm font-semibold text-muted dark:text-gray-400 mb-2">Disabled Durumu</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>Primary Disabled</Button>
              <Button variant="danger" disabled>Danger Disabled</Button>
            </div>
          </div>
        </section>

        {/* ── INPUTS ──────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Input — Varyantlar & Durumlar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
            {/* Varyant 4: Normal */}
            <Input
              id="ui-name"
              label="Normal Input"
              placeholder="Bir şey yazın..."
            />

            {/* Varyant 5: Hatalı durum */}
            <Input
              id="ui-err"
              label="Hatalı Input"
              defaultValue="hatalı değer"
              error="Bu alan zorunludur"
            />

            {/* Varyant 6: Help text */}
            <Input
              id="ui-help"
              label="Help Text ile Input"
              type="email"
              placeholder="ornek@mail.com"
              helpText="E-posta adresinizi girin"
            />

            {/* Varyant 7: Disabled */}
            <Input
              id="ui-dis"
              label="Disabled Input"
              disabled
              value="Düzenlenemez"
              onChange={() => {}}
            />
          </div>
        </section>

        {/* ── CARDS ───────────────────────────────── */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold border-b border-border dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Card — Varyantlar
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varyant 8: Elevated + image */}
            <Card
              variant="elevated"
              title="Elevated Card"
              image="https://picsum.photos/seed/card1/400/200"
              imageAlt="Örnek kart görseli"
              footer={
                <Button variant="primary" size="sm">Detay</Button>
              }
            >
              Gölge ile yükseltilmiş kart. Image ve footer içerir.
            </Card>

            {/* Varyant 9: Outlined */}
            <Card
              variant="outlined"
              title="Outlined Card"
              footer={
                <Button variant="ghost" size="sm">Daha Fazla</Button>
              }
            >
              Çerçeveli kart. Görsel olmadan görüntülenir.
            </Card>

            {/* Varyant 10: Filled */}
            <Card variant="filled" title="Filled Card">
              Dolgulu arka plan rengi ile ayrışan kart varyantı.
            </Card>
          </div>
        </section>

        {/* ── ALERTS ──────────────────────────────── */}
        <section className="space-y-4 max-w-2xl">
          <h2 className="text-2xl font-bold border-b border-border dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Alert — Varyantlar & Dismissible
          </h2>

          {/* Varyant 11 */}
          <Alert variant="info" title="Bilgi">
            Bu bir bilgilendirme mesajıdır.
          </Alert>

          {/* Varyant 12 */}
          <Alert variant="success" title="Başarılı">
            İşlem başarıyla tamamlandı. Her şey yolunda!
          </Alert>

          {/* Varyant 13 */}
          <Alert variant="warning" title="Uyarı">
            Bu işlem geri alınamaz, devam etmeden önce kontrol edin.
          </Alert>

          {/* Varyant 14: Dismissible */}
          <Alert variant="error" title="Hata" dismissible>
            Bir hata oluştu. Bu uyarıyı × butonu ile kapatabilirsiniz.
          </Alert>

          {/* Varyant 15: Title olmadan sadece mesaj */}
          <Alert variant="info">
            Başlık olmadan yalnızca mesaj içeren alert varyantı.
          </Alert>
        </section>

      </div>
    </div>
  )
}

