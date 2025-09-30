import { UNAUTHENTICATED_STATUS, type AuthenticationStatus } from "~/types/auth"

export const useAuthSession = () => {
  return useState<AuthenticationStatus>(
    "auth_session",
    () => UNAUTHENTICATED_STATUS,
  )
}
