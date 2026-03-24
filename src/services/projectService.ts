import type { Project } from '../types/project'

const PROJECTS_ENDPOINT = '/data/projects.json'

const parseJson = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(`Veri alınamadı: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(PROJECTS_ENDPOINT, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })

    return await parseJson<Project[]>(response)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Bilinmeyen hata'
    throw new Error(`Proje verileri yüklenirken hata oluştu: ${message}`)
  }
}
