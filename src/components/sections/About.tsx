export default function About() {
  return (
    <section id="hakkimda" aria-labelledby="about-heading" className="px-6 py-16 md:py-20">
      <h2 id="about-heading" className="text-3xl font-bold text-primary text-center mb-10">
        Hakkımda
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
        <figure className="max-w-[200px] mx-auto md:mx-0 shrink-0">
          <img
            src="/foto.png"
            alt="Enis Uzun profil fotoğrafı"
            className="rounded-full aspect-square object-cover w-48 h-48"
            width={192}
            height={192}
          />
        </figure>

        <article className="flex-1">
          <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
            Merhaba! Ben Enis Uzun. Yazılım geliştirme ve özellikle .NET teknolojileri konusunda tutkulu bir
            öğrenciyim. .NET framework ve ekosistemini çok seviyorum ve bu alanda aktif olarak projeler
            geliştiriyorum.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
            Web Tasarımı ve Programlama dersi kapsamında bu portföy sayfasını geliştirdim. Modern web
            teknolojileri, backend sistemler ve yazılım mimarisi alanlarında kendimi sürekli geliştirmeye
            çalışıyorum.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Eğitim</h3>
          <div className="bg-surface dark:bg-gray-800 border-l-4 border-primary rounded-md p-4 mb-5">
            <p className="text-gray-700 dark:text-gray-300 py-0.5">
              <strong>Üniversite:</strong> Fırat Üniversitesi
            </p>
            <p className="text-gray-700 dark:text-gray-300 py-0.5">
              <strong>Öğrenci No:</strong> 230541106
            </p>
            <p className="text-gray-700 dark:text-gray-300 py-0.5">
              <strong>Bölüm:</strong> Yazılım Mühendisliği
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
