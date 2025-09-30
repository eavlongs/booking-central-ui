import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "~/global/config"
import { getCookieRemovalString } from "../lib/auth"

export default eventHandler(async (event) => {
  appendHeader(event, "Set-Cookie", getCookieRemovalString(ACCESS_TOKEN_KEY))
  appendHeader(event, "Set-Cookie", getCookieRemovalString(REFRESH_TOKEN_KEY))
  return setResponseStatus(event, 204)
})
