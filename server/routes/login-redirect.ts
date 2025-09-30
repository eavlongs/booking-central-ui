import { type RequestTokenResponse } from "~/types/auth"
import { api, saveTokensInCookies } from "~~/server/lib/auth"

export default defineEventHandler(async (event) => {
  const { token } = getQuery(event)

  if (!token) {
    return sendRedirect(
      event,
      "/login#error=" + encodeURIComponent("failed to log in"),
    )
  }

  try {
    const response = await api<RequestTokenResponse>("/auth/request-token", {
      method: "POST",
      body: {
        token: token,
      },
    })

    if (response.success && response.data) {
      saveTokensInCookies(event, response.data)

      return sendRedirect(event, "/")
    }

    throw new Error("failed to login")
  } catch (error: any) {
    console.log(error)
    return sendRedirect(
      event,
      "/login#error=" + encodeURIComponent("failed to log in"),
    )
  }
})
