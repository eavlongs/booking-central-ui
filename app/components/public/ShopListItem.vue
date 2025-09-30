<template>
  <ULink :to="`/provider/${shop.id}`">
    <div
      class="w-full bg-white border border-gray-200 rounded-lg p-3.5 hover:border-gray-300 hover:shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
    >
      <div class="flex flex-col md:flex-row lg:items-center gap-3">
        <!-- Logo -->
        <div
          class="rounded-lg flex items-center justify-center text-xl flex-shrink-0"
        >
          <img
            :src="shop.imageUrl"
            :alt="`${shop.name} logo`"
            class="h-20 object-cover aspect-auto md:aspect-square"
          />
        </div>

        <!-- Main Info -->
        <div class="flex-1 min-w-0">
          <h3 class="font-semibold text-gray-900 text-base leading-tight mb-1">
            {{ shop.name }}
          </h3>

          <div class="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span
              class="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs font-medium uppercase tracking-wide"
            >
              {{ shop.type }}
            </span>
            <span class="'text-xs font-medium">
              {{ shop.hours }}
            </span>
          </div>

          <p class="text-gray-500 text-sm mt-1 leading-relaxed">
            {{ shop.description }}
          </p>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2 flex-shrink-0 lg:ml-4">
          <UButton> View Details </UButton>
        </div>
      </div>
    </div>
  </ULink>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    shop: any
  }>()
</script>

<style></style>
