import type { LocationQuery, LocationQueryRaw } from "vue-router"

export function getUrlSearchParamWithFallback(
  route: ReturnType<typeof useRoute>,
  key: string,
  fallback: string = "",
) {
  return route.query[key] ? route.query[key].toString() : fallback
}

export function getUrlSearchParamString(
  keyValuePairs: LocationQuery,
  options: {
    prefix?: string
    suffix?: string
    initialParams?: LocationQuery // we will use the initalize search param as base, keyValuePairs will just be additional params
  } = {
    prefix: "",
    suffix: "",
    initialParams: {},
  },
): string {
  const searchParams = {
    ...options.initialParams,
    ...keyValuePairs,
  }

  let result = ""
  for (const [key, value] of Object.entries(searchParams)) {
    if (value) {
      if (Array.isArray(value)) {
        result += value.map((v) => `${key}=${v}`).join("&")
      }
      result += `${key}=${value}&`
    }
  }

  return result ? encodeURI(result.slice(0, -1)) : result
}

export function getUrlSearchParamMap(
  keyValuePairs: LocationQuery,
  options: {
    prefix?: string
    suffix?: string
    initialParams?: LocationQuery // we will use the initalize search param as base, keyValuePairs will just be additional params
  } = {
    prefix: "",
    suffix: "",
    initialParams: {},
  },
): LocationQueryRaw {
  const searchParams = {
    ...options.initialParams,
    ...keyValuePairs,
  }

  console.log(searchParams)
  return searchParams
}
