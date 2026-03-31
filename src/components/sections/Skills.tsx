const SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'TypeScript',
  'Git',
  '.NET',
  'C#',
  'Python',
  'C++',
] as const

export default function Skills() {
  return (
    <section id="beceriler" aria-labelledby="skills-heading" className="px-6 py-16 md:py-20 bg-surface dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 id="skills-heading" className="text-3xl font-bold text-primary text-center mb-10">
          Beceriler
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Projelerimde ve öğrenme sürecimde sıkça kullandığım teknolojiler.
        </p>
        <ul
          className="flex flex-wrap justify-center gap-2 list-none p-0"
          role="list"
          aria-label="Kullanılan teknolojiler"
        >
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
