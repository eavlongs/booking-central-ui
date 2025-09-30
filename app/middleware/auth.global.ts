import { useAuthSession } from "~/composables/authSession"
import type { AuthenticationStatus } from "~/types/auth"

export default defineNuxtRouteMiddleware(async (to, from) => {
  const data = await useRequestFetch()<AuthenticationStatus>("/api/user")

  const user = useAuthSession()
  let isLoggedIn = false

  if (data) {
    user.value = data
  }

  if (data.isAuthenticated) {
    isLoggedIn = true
  }

  if (isLoggedIn && to.path === "/login") {
    return navigateTo("/")
  }
})
