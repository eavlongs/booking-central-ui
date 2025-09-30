export type Category = {
  id: string
  name: string
  imageUrl: string
  description: string
}

export type GenericOption = {
  label: string
  value: string | null
}

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type ApiResponse<T = any, U = any> = {
  success: boolean
  message?: string
  data?: T
  error?: U
}

export type BaseDateModel = {
  created_at: string
  updated_at: string
}
