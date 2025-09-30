import { EventHandlerRequest, H3Event } from "h3"
import * as jose from "jose"
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/global/config"
import {
  AuthenticationStatus,
  JwtTokenPayload,
  RefreshTokenResponse,
  TokenResponse,
  UNAUTHENTICATED_STATUS,
  UserDetail,
} from "~/types/auth"
import { getJwtPublicKey } from "../plugins/jwtPublicKey"

const config = useRuntimeConfig()
const baseURL = config.public.apiUrl + config.public.apiPrefix

export const api = $fetch.create({
  baseURL: baseURL,
  ignoreResponseError: true,
})

export function saveTokensInCookies(
  event: RequestEvent,
  tokens: NonNullable<TokenResponse["data"]>,
) {
  setCookie(event, ACCESS_TOKEN_KEY, tokens.access_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: tokens.access_token_lifetime_minutes * 60,
  })

  setCookie(event, REFRESH_TOKEN_KEY, tokens.refresh_token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: tokens.refresh_token_lifetime_minutes * 60,
  })
}

export function getAccessToken(event: RequestEvent) {
  return getCookie(event, ACCESS_TOKEN_KEY)
}

export function getRefreshToken(event: RequestEvent) {
  return getCookie(event, REFRESH_TOKEN_KEY)
}

export function removeTokensFromCookies(event: RequestEvent) {
  deleteCookie(event, ACCESS_TOKEN_KEY)
  deleteCookie(event, REFRESH_TOKEN_KEY)
}

export async function checkAuthenticationStatus(
  event: RequestEvent,
): Promise<AuthenticationStatus> {
  const accessToken = getAccessToken(event)

  // if no access token, try to refresh
  if (!accessToken) {
    const data = await refreshToken(event)

    if (!data) {
      return UNAUTHENTICATED_STATUS
    }

    const user = await getUserFromToken(data.access_token)

    return formatResponseAfterRefreshSession(data, user)
  }

  // if there is access token, get user
  // however if the access token is expired or invalid, try to refresh
  const user = await getUserFromToken(accessToken)
  // if access token is expired or invalid, user is null
  if (!user) {
    const data = await refreshToken(event)
    if (!data) {
      return UNAUTHENTICATED_STATUS
    }
    // get user again, with the updated access token
    const user = await getUserFromToken(data.access_token)

    return formatResponseAfterRefreshSession(data, user)
  }

  return {
    isAuthenticated: true,
    user,
    tokens: {
      access_token: accessToken,
      refresh_token: getRefreshToken(event) || "",
    },
  }
}

function formatResponseAfterRefreshSession(
  tokenData: Pick<
    NonNullable<RefreshTokenResponse["data"]>,
    "access_token" | "refresh_token"
  >,
  user: UserDetail | null,
): AuthenticationStatus {
  if (!tokenData || !user) {
    return UNAUTHENTICATED_STATUS
  }

  return {
    isAuthenticated: true,
    user: user,
    tokens: {
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token,
    },
  }
}

export async function refreshToken(
  event: RequestEvent,
): Promise<Pick<
  NonNullable<RefreshTokenResponse["data"]>,
  "access_token" | "refresh_token"
> | null> {
  const refreshToken = getRefreshToken(event)

  if (!refreshToken) {
    return null
  }

  try {
    const response = await api<RefreshTokenResponse>("/auth/refresh-token", {
      method: "POST",
      body: { token: refreshToken },
    })

    if (response.success && response.data) {
      saveTokensInCookies(event, response.data)

      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      }
    }

    throw new Error("Unexpected response")
  } catch (e: any) {
    removeTokensFromCookies(event)
    console.error(e)
    return null
  }
}

export async function getUserFromToken(
  token: string,
): Promise<UserDetail | null> {
  try {
    const result = await jose.jwtVerify<JwtTokenPayload>(
      token,
      getJwtPublicKey(),
    )

    return {
      id: result.payload.id,
      first_name: result.payload.first_name,
      last_name: result.payload.last_name,
      profile_picture: result.payload.profile_picture,
    }
  } catch (e: any) {
    return null
  }
}

type RequestEvent = H3Event<EventHandlerRequest>

export function getCookieRemovalString(key: string) {
  return `${key}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
