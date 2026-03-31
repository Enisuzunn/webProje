export type ProjectStatus = 'active' | 'completed'
export type Category = 'web' | 'mobile' | 'backend' | 'fullstack'

/** Sıralama alanı: başlık veya yıl */
export type SortField = 'title' | 'year'

/** Sıralama yönü */
export type SortOrder = 'asc' | 'desc'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  category: Category
  year: number
  status: ProjectStatus
  featured: boolean
}

export interface ProjectFilters {
  searchText: string
  selectedCategory: Category | 'all'
  sortField: SortField
  sortOrder: SortOrder
}
