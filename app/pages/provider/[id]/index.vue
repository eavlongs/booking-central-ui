<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <!-- Restaurant Header -->
    <div class="mb-8">
      <div class="flex items-start gap-6">
        <div
          class="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
        >
          <span class="text-white font-bold text-lg">Restaurant</span>
        </div>
        <div class="flex-1">
          <h1 class="text-3xl font-bold text-gray-900 mb-2">
            Bella Vista Restaurant
          </h1>
          <UBadge color="neutral" variant="solid" class="mb-3">
            RESTAURANT
          </UBadge>
          <div class="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <span>Open until 11 PM</span>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Contemporary French cuisine with seasonal ingredients
          </p>
        </div>
        <UButton size="md" class="px-6"> View Details </UButton>
      </div>
    </div>

    <!-- About Section -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-gray-900">
          About This Restaurant
        </h2>
      </template>
      <p class="text-gray-600 leading-relaxed">
        Experience authentic Italian cuisine in an elegant atmosphere. Our
        award-winning chefs create memorable dishes using the finest
        locally-sourced ingredients and traditional recipes passed down through
        generations. Every meal is crafted with passion and served with
        exceptional hospitality.
      </p>
    </UCard>

    <!-- Location & Hours -->
    <UCard class="mb-8">
      <template #header>
        <h2 class="text-xl font-semibold text-gray-900">Location & Hours</h2>
      </template>
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-gray-400" />
          <span class="text-gray-600">123 Culinary Street, Food District</span>
        </div>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-phone" class="w-5 h-5 text-gray-400" />
          <span class="text-gray-600">(555) 123-4567</span>
        </div>
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-clock" class="w-5 h-5 text-gray-400" />
          <span class="text-gray-600">Open until 11 PM today</span>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
