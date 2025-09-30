import type { UseFetchOptions } from "nuxt/app"

export function useAPIWithAuth<T>(
  url: string | (() => string),
  options?: Omit<UseFetchOptions<T>, "default"> & {
    default?: () => T | Ref<T>
  },
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$apiWithAuth as typeof $fetch,
  })
}
