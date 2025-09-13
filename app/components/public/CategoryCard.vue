<template>
  <div>
    <a class="grid place-items-center group" :href="'/category/' + category.id">
      <div class="relative w-full overflow-hidden rounded-sm">
        <img
          :src="category.imageUrl"
          :alt="category.name"
          class="w-full group-hover:scale-110 transition-all group-hover:brightness-50 brightness-[0.6] object-cover aspect-[5/3]"
        />
        <h3
          class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] font-bold text-white text-2xl shadow-lg text-center"
        >
          {{ category.name }}
        </h3>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
  import type { Category } from "~/types/general"

  const props = defineProps<{
    category: Category
  }>()
</script>

<style></style>
