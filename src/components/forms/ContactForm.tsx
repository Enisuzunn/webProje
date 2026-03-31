import { useState, type FormEvent } from 'react'
import Input from '../Input'
import Button from '../ui/Button'
import Alert from '../ui/Alert'

interface FormState {
  name: string
  email: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  message: '',
}

/** Basit RFC 5322 benzeri e-posta doğrulaması (pratik kullanım) */
const isValidEmail = (value: string): boolean => {
  const trimmed = value.trim()
  if (trimmed.length === 0) return false
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return pattern.test(trimmed)
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}

    if (formData.name.trim().length < 2) {
      next.name = 'Ad soyad en az 2 karakter olmalıdır'
    }
    if (!isValidEmail(formData.email)) {
      next.email = 'Geçerli bir e-posta adresi girin'
    }
    if (formData.message.trim().length < 10) {
      next.message = 'Mesaj en az 10 karakter olmalıdır'
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitSuccess(false)
    if (!validate()) return

    setIsSubmitting(true)
    window.setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData(initialForm)
      setErrors({})
    }, 1000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      {submitSuccess && (
        <div className="mb-6" role="status" aria-live="polite">
          <Alert variant="success" title="Mesajınız alındı">
            Formunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağım.
          </Alert>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate aria-label="İletişim formu">
        <fieldset className="border-2 border-border dark:border-gray-600 rounded-lg p-6 space-y-5">
          <legend className="text-lg font-semibold px-2 text-gray-900 dark:text-white">
            İletişim formu
          </legend>

          <Input
            id="contact-name"
            label="Ad Soyad"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            error={errors.name}
            aria-required="true"
          />

          <Input
            id="contact-email"
            label="E-posta"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            error={errors.email}
            aria-required="true"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="contact-message" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Mesaj
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              aria-required="true"
              className={[
                'w-full px-3 py-2 border rounded-md text-base',
                'bg-white dark:bg-gray-800 dark:text-white',
                'resize-y min-h-[120px]',
                'transition-colors duration-150',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                errors.message
                  ? 'border-error focus:ring-red-400'
                  : 'border-border dark:border-gray-600 focus:ring-blue-400',
              ].join(' ')}
            />
            {errors.message && (
              <p id="contact-message-error" role="alert" className="text-sm text-error font-medium">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" variant="primary" size="md" disabled={isSubmitting} aria-busy={isSubmitting}>
            {isSubmitting ? 'Gönderiliyor…' : 'Gönder'}
          </Button>
        </fieldset>
      </form>
    </div>
  )
}
