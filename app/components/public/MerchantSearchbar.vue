<template>
  <div class="flex items-center gap-x-2">
    <general-searchbar placeholder="test" v-model="query" />
    <UButton @click="handleSearch" class="py-2.5 px-4">Search</UButton>
  </div>
</template>

<script lang="ts" setup>
  const query = ref("")

  function handleSearch() {
    console.log(query.value)
  }
</script>

<style></style>
