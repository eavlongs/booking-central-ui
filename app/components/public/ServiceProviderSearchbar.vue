<template>
  <div class="flex items-center gap-x-2">
    <general-searchbar
      placeholder="Search for..."
      v-model="query"
      @enter="handleSearch"
    />
    <UButton @click="handleSearch" class="py-2.5 px-4 cursor-pointer"
      >Search</UButton
    >
  </div>
</template>

<script lang="ts" setup>
  import { DEFAULT_PUBLIC_SEARCH_PATH } from "~/global/config"

  const props = withDefaults(
    defineProps<{
      searchPath?: string
    }>(),
    {
      searchPath: DEFAULT_PUBLIC_SEARCH_PATH,
    },
  )

  const query = ref("")

  async function handleSearch() {
    await navigateTo({
      path: props.searchPath,
      query: { q: query.value },
    })
  }
</script>

<style></style>
