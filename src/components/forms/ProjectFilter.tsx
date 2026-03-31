import type { Dispatch, SetStateAction } from 'react'
import Input from '../Input'
import { CATEGORY_LABELS } from '../../constants/categoryLabels'
import type { Category, ProjectFilters, SortField, SortOrder } from '../../types/project'

interface ProjectFilterProps {
  filters: ProjectFilters
  setFilters: Dispatch<SetStateAction<ProjectFilters>>
  categories: Array<Category | 'all'>
}

export default function ProjectFilter({ filters, setFilters, categories }: ProjectFilterProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      aria-label="Proje filtreleri ve sıralama"
    >
      <Input
        id="project-search"
        label="Projede ara"
        type="search"
        placeholder="Başlık, açıklama veya etiket"
        value={filters.searchText}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            searchText: e.target.value,
          }))
        }
        autoComplete="off"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="project-category" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Kategori
        </label>
        <select
          id="project-category"
          value={filters.selectedCategory}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              selectedCategory: e.target.value as Category | 'all',
            }))
          }
          className="w-full px-3 py-2 border border-border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {CATEGORY_LABELS[category]}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="project-sort-field" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Sıralama alanı
        </label>
        <select
          id="project-sort-field"
          value={filters.sortField}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sortField: e.target.value as SortField,
            }))
          }
          className="w-full px-3 py-2 border border-border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          <option value="year">Yıl</option>
          <option value="title">Başlık</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="project-sort-order" className="text-sm font-semibold text-gray-700 dark:text-gray-200">
          Sıralama yönü
        </label>
        <select
          id="project-sort-order"
          value={filters.sortOrder}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              sortOrder: e.target.value as SortOrder,
            }))
          }
          className="w-full px-3 py-2 border border-border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          <option value="desc">Azalan</option>
          <option value="asc">Artan</option>
        </select>
      </div>
    </div>
  )
}
