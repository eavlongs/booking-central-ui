import { checkAuthenticationStatus } from "../lib/auth"

export default defineEventHandler(async (event) => {
  const authenticationStatus = await checkAuthenticationStatus(event)

  return {
    ...authenticationStatus,
  }
})
