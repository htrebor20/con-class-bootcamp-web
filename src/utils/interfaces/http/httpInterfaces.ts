export interface IGenericResponse {
    status: number,
    message: string
}

export interface IPage<T> {
    content: T[]
    totalElements: number
    totalPages: number
    pageNumber: number
    pageSize: number
    hasNext: boolean
    hasPrevious: boolean
  }


