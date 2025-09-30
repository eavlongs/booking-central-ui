export default defineNuxtPlugin((nuxtApp) => {
  const serverRequest = $fetch.create({
    ignoreResponseError: true,
  })

  return {
    provide: {
      serverRequest,
    },
  }
})
