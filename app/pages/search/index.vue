<template>
  <public-page-wrapper>
    <h2 class="text-3xl md:text-4xl font-bold text-center my-4 md:my-8 px-4">
      Search Results
    </h2>
    <div class="flex justify-center" :key="route.fullPath">
      <public-advanced-service-provider-searchbar />
    </div>
    <div class="mt-4">
      <p class="text-lg md:text-2xl text-gray-700 font-bold">
        {{ searchQuery }} {{ categoryId }} {{ sortParam }}
      </p>
    </div>
  </public-page-wrapper>
</template>

<script lang="ts" setup>
  import {
    PUBLIC_SEARCH_FILTER_CATEGORY_KEY,
    PUBLIC_SEARCH_QUERY_KEY,
    PUBLIC_SEARCH_SORT_KEY,
  } from "~/global/config"
  import { getUrlSearchParamWithFallback } from "~/global/url-search-param"

  const route = useRoute()
  const searchQuery = ref(
    getUrlSearchParamWithFallback(route, PUBLIC_SEARCH_QUERY_KEY),
  )
  const categoryId = ref(
    getUrlSearchParamWithFallback(route, PUBLIC_SEARCH_FILTER_CATEGORY_KEY),
  )
  const sortParam = ref(
    getUrlSearchParamWithFallback(route, PUBLIC_SEARCH_SORT_KEY),
  )

  watch(
    () => route.query,
    () => {
      searchQuery.value = getUrlSearchParamWithFallback(
        route,
        PUBLIC_SEARCH_QUERY_KEY,
      )
      categoryId.value = getUrlSearchParamWithFallback(
        route,
        PUBLIC_SEARCH_FILTER_CATEGORY_KEY,
      )
      sortParam.value = getUrlSearchParamWithFallback(
        route,
        PUBLIC_SEARCH_SORT_KEY,
      )
    },
  )
</script>

<style></style>
