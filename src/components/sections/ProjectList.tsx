import { useEffect, useMemo, useState } from 'react'
import Card from '../ui/Card'
import ProjectFilter from '../forms/ProjectFilter'
import { CATEGORY_LABELS } from '../../constants/categoryLabels'
import { fetchProjects } from '../../services/projectService'
import type { Category, Project, ProjectFilters } from '../../types/project'

const defaultFilters: ProjectFilters = {
  searchText: '',
  selectedCategory: 'all',
  sortField: 'year',
  sortOrder: 'desc',
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [filters, setFilters] = useState<ProjectFilters>(defaultFilters)

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      setIsLoading(true)
      setLoadError(null)
      try {
        const data = await fetchProjects()
        if (!cancelled) setProjects(data)
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Bilinmeyen hata'
        if (!cancelled) setLoadError(message)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const categories = useMemo(() => {
    const unique = new Set(projects.map((p) => p.category))
    return ['all' as const, ...Array.from(unique)] as Array<Category | 'all'>
  }, [projects])

  const visibleProjects = useMemo(() => {
    const q = filters.searchText.trim().toLocaleLowerCase('tr')

    const filtered = projects.filter((project) => {
      const titleMatch = project.title.toLocaleLowerCase('tr').includes(q)
      const descriptionMatch = project.description.toLocaleLowerCase('tr').includes(q)
      const tagMatch = project.tags.some((tag) => tag.toLocaleLowerCase('tr').includes(q))
      const matchesSearch = !q || titleMatch || descriptionMatch || tagMatch
      const matchesCategory =
        filters.selectedCategory === 'all' || project.category === filters.selectedCategory
      return matchesSearch && matchesCategory
    })

    const compare = (a: Project, b: Project): number => {
      if (filters.sortField === 'title') {
        const cmp = a.title.localeCompare(b.title, 'tr')
        return filters.sortOrder === 'asc' ? cmp : -cmp
      }
      const cmp = a.year - b.year
      return filters.sortOrder === 'asc' ? cmp : -cmp
    }

    return [...filtered].sort(compare)
  }, [projects, filters])

  return (
    <section id="projeler" aria-labelledby="projects-heading" className="px-6 py-16 md:py-20">
      <h2 id="projects-heading" className="text-3xl font-bold text-primary text-center mb-10">
        Projelerim
      </h2>

      <ProjectFilter filters={filters} setFilters={setFilters} categories={categories} />

      <p className="mb-6 text-sm text-gray-700 dark:text-gray-300" aria-live="polite">
        {visibleProjects.length} proje listeleniyor
      </p>

      {isLoading && (
        <div
          className="flex flex-col items-center justify-center gap-4 py-16"
          role="status"
          aria-live="polite"
          aria-label="Projeler yükleniyor"
        >
          <div
            className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin"
            aria-hidden="true"
          />
          <span className="text-sm text-gray-700 dark:text-gray-300">Projeler yükleniyor…</span>
        </div>
      )}

      {loadError && !isLoading && (
        <p role="alert" className="mb-6 text-sm text-error font-medium">
          {loadError}
        </p>
      )}

      {!isLoading && !loadError && visibleProjects.length === 0 && (
        <p className="text-sm text-gray-700 dark:text-gray-300">Kriterlere uygun proje bulunamadı.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!isLoading &&
          !loadError &&
          visibleProjects.map((project) => (
            <article key={project.id}>
              <Card
                variant="elevated"
                title={project.title}
                image={project.image}
                imageAlt={project.imageAlt}
                footer={
                  <ul className="flex flex-wrap gap-2 list-none p-0">
                    {project.tags.map((tag) => (
                      <li key={tag} className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {tag}
                      </li>
                    ))}
                    <li className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">{project.year}</li>
                    <li
                      className={[
                        'px-3 py-1 rounded-full text-sm text-white',
                        project.status === 'active' ? 'bg-green-600' : 'bg-blue-600',
                      ].join(' ')}
                    >
                      {project.status === 'active' ? 'Devam ediyor' : 'Tamamlandı'}
                    </li>
                    <li className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                      {CATEGORY_LABELS[project.category]}
                    </li>
                    {project.featured && (
                      <li className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Öne çıkan
                      </li>
                    )}
                  </ul>
                }
              >
                {project.description}
              </Card>
            </article>
          ))}
      </div>
    </section>
  )
}
