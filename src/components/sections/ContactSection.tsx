import ContactForm from '../forms/ContactForm'

export default function ContactSection() {
  return (
    <section id="iletisim" aria-labelledby="contact-heading" className="px-6 py-16 md:py-20">
      <h2 id="contact-heading" className="text-3xl font-bold text-primary text-center mb-10">
        İletişim
      </h2>
      <ContactForm />
    </section>
  )
}
