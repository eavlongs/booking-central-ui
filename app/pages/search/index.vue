<template>
  <public-page-wrapper asContainer>
    <div class="flex justify-center my-4 md:my-8">
      <public-advanced-service-provider-searchbar />
    </div>
    <h2 class="text-lg md:text-xl font-semibold">
      {{ searchTitle }}
    </h2>
    <div class="text-sm md:text-base">
      <p v-if="categoryId">
        Category:
        <span class="font-semibold">{{ temporaryCategoryName }}</span>
        <span v-if="sortParam">
          , Sorted by:
          <span class="font-semibold">{{
            getOptionLabelByValue(sortOptions, sortParam)
          }}</span>
        </span>
        <span></span>
      </p>
      <p v-if="totalCount > 0 && startItem >= 1">
        Showing
        <span class="font-semibold">{{ startItem }}-{{ endItem }}</span> of
        <span class="font-semibold">{{ totalCount }}</span> results
      </p>
    </div>
    <div class="mt-4">
      <public-shop-listing />
      <div class="flex justify-center mt-4">
        <UPagination
          v-model:page="pageNumber"
          :total="totalCount"
          :items-per-page="perPage"
          :show-controls="false"
          show-edges
          :to="handlePageChange"
          :ui="{
            item: 'cursor-pointer',
          }"
        />
      </div>
    </div>
  </public-page-wrapper>
</template>

<script lang="ts" setup>
  import { sortOptions } from "~/components/public/data"
  import {
    DEFAULT_PUBLIC_PER_PAGE_ITEM,
    PUBLIC_SEARCH_FILTER_CATEGORY_KEY,
    PUBLIC_SEARCH_PAGE_NUMBER_KEY,
    PUBLIC_SEARCH_PER_PAGE_KEY,
    PUBLIC_SEARCH_QUERY_KEY,
    PUBLIC_SEARCH_SORT_KEY,
  } from "~/global/config"
  import {
    getUrlSearchParamWithFallback,
    getUrlSearchParamWithFallbackAsNumber,
  } from "~/global/url-search-param"
  import { getOptionLabelByValue } from "~/global/utils"

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
  const pageNumber = ref(
    getUrlSearchParamWithFallbackAsNumber(
      route,
      PUBLIC_SEARCH_PAGE_NUMBER_KEY,
      1,
    ),
  )
  const perPage = ref(
    getUrlSearchParamWithFallbackAsNumber(
      route,
      PUBLIC_SEARCH_PER_PAGE_KEY,
      DEFAULT_PUBLIC_PER_PAGE_ITEM,
    ),
  )
  const totalCount = ref(100)

  const startItem = computed(() => {
    const tmp = (pageNumber.value - 1) * perPage.value + 1

    if (tmp > totalCount.value) {
      return 0
    }

    return tmp
  })
  const endItem = computed(() => {
    return Math.min(startItem.value - 1 + perPage.value, totalCount.value)
  })

  const temporaryCategoryName = "test"

  const searchTitle = computed(() => {
    if (searchQuery.value) {
      return `Search results for "${searchQuery.value}"`
    }
    return "Search results"
  })

  function handlePageChange(page: number) {
    return {
      query: {
        ...route.query,
        page,
      },
    }
  }

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
      pageNumber.value = getUrlSearchParamWithFallbackAsNumber(
        route,
        PUBLIC_SEARCH_PAGE_NUMBER_KEY,
        1,
      )
      perPage.value = getUrlSearchParamWithFallbackAsNumber(
        route,
        PUBLIC_SEARCH_PER_PAGE_KEY,
        DEFAULT_PUBLIC_PER_PAGE_ITEM,
      )
    },
  )
</script>

<style></style>
