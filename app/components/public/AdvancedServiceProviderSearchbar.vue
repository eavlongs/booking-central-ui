<template>
  <div class="flex items-center gap-x-2">
    <div class="flex items-center">
      <general-searchbar
        placeholder="Search"
        v-model="query"
        @enter="handleSearch"
      />
      <USelect
        icon="material-symbols:sort-rounded"
        v-model="sortValue"
        :items="sortOptions"
        placeholder="Sort by"
        size="xl"
        :ui="{
          item: 'cursor-pointer',
        }"
      />
    </div>
    <UButton @click="handleSearch" class="py-2.5 px-4 cursor-pointer"
      >Search</UButton
    >
  </div>
</template>

<script lang="ts" setup>
  import {
    DEFAULT_PUBLIC_SEARCH_PATH,
    PUBLIC_SEARCH_QUERY_KEY,
    PUBLIC_SEARCH_SORT_KEY,
  } from "~/global/config"
  import {
    getUrlSearchParamMap,
    getUrlSearchParamWithFallback,
  } from "~/global/url-search-param"
  import type { GenericSortOption } from "~/types/general"

  const props = withDefaults(
    defineProps<{
      searchPath?: string
    }>(),
    {
      searchPath: DEFAULT_PUBLIC_SEARCH_PATH,
    },
  )
  const route = useRoute()
  const query = ref(
    getUrlSearchParamWithFallback(route, PUBLIC_SEARCH_QUERY_KEY),
  )
  const sortValue = ref(
    getUrlSearchParamWithFallback(route, PUBLIC_SEARCH_SORT_KEY),
  )

  watch(
    () => route.query,
    () => {
      query.value = getUrlSearchParamWithFallback(
        route,
        PUBLIC_SEARCH_QUERY_KEY,
      )
      sortValue.value = getUrlSearchParamWithFallback(
        route,
        PUBLIC_SEARCH_SORT_KEY,
      )
    },
  )

  const sortOptions: GenericSortOption[] = [
    {
      label: "None",
      value: null,
    },
    {
      label: "Name (A-Z)",
      value: "name",
    },
    {
      label: "Name (Z-A)",
      value: "-name",
    },
  ]

  async function handleSearch() {
    const searchParams = {
      [PUBLIC_SEARCH_QUERY_KEY]: query.value,
      [PUBLIC_SEARCH_SORT_KEY]: sortValue.value,
    }

    await navigateTo({
      path: props.searchPath,
      query: getUrlSearchParamMap(searchParams, {
        initialParams: route.query,
      }),
    })
  }
</script>

<style></style>
