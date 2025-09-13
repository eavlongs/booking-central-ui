<template>
  <div class="mx-4">
    <h1 class="text-3xl md:text-4xl font-bold text-center my-4 md:my-8 px-4">
      Your One-Stop Booking Solution
      <span class="block text-lg md:text-2xl mt-3 text-gray-700 font-normal">
        Restaurants • Appointments • Services • Events • And Beyond
      </span>
    </h1>
    <div class="flex justify-center"><public-merchant-searchbar /></div>

    <div class="mt-4">
      <p class="text-lg md:text-2xl text-gray-700 font-bold">
        Explore by Category
      </p>

      <div class="mt-4">
        <public-category-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
