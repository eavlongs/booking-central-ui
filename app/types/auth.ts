import type { ApiResponse, BaseDateModel, Prettify } from "./general"

export type Provider = {
  id: number
  name: string
  registration_id: string
  logo_url: string
}

export type AuthenticationStatus = {
  isAuthenticated: boolean
  user?: UserDetail
  tokens?: Tokens
}

export type UserDetail = {
  id: string
  first_name: string
  last_name: string | null
  profile_picture: string
}

export type User = UserDetail & BaseDateModel

export type Tokens = {
  access_token: string
  refresh_token: string
}

export type TokenResponse = ApiResponse<
  Prettify<
    Tokens & {
      access_token_lifetime_minutes: number
      refresh_token_lifetime_minutes: number
    }
  >
>

export type RequestTokenResponse = TokenResponse

export type RefreshTokenResponse = RequestTokenResponse

export type JwtTokenPayload = Prettify<
  UserDetail & {
    type: JwtTokenType
    iat: number
    exp: number
  }
>

export const JwtTokenTypes = ["access_token", "refresh_token"] as const
export type JwtTokenType = (typeof JwtTokenTypes)[number]

export const UNAUTHENTICATED_STATUS: AuthenticationStatus = {
  isAuthenticated: false,
  user: undefined,
  tokens: undefined,
}
