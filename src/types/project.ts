export type ProjectStatus = 'active' | 'completed'
export type Category = 'web' | 'mobile' | 'backend' | 'fullstack'

export type SortOption = 'title-asc' | 'title-desc' | 'year-desc' | 'year-asc'

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
  selectedStatus: ProjectStatus | 'all'
  minimumYear: number
  featuredOnly: boolean
}
