import type { Category } from '../types/project'

export const CATEGORY_LABELS: Record<Category | 'all', string> = {
  all: 'Tüm kategoriler',
  web: 'Web',
  mobile: 'Mobil',
  backend: 'Backend',
  fullstack: 'Fullstack',
}
