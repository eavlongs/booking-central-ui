export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl + config.public.apiPrefix
  const api = $fetch.create({
    baseURL: baseURL,
    ignoreResponseError: true,
  })

  return {
    provide: {
      api,
    },
  }
})
