export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiUrl + config.public.apiPrefix
  const apiWithAuth = $fetch.create({
    baseURL: baseURL,
    ignoreResponseError: true,
    onRequest: async (config) => {
      const session = useAuthSession()
      if (session.value.isAuthenticated && session.value.tokens) {
        config.options.headers.set(
          "Authorization",
          `Bearer ${session.value.tokens.access_token}`,
        )
      }
    },
  })

  return {
    provide: {
      apiWithAuth,
    },
  }
})
