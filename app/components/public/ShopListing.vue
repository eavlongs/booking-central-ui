<template>
  <main class="flex flex-col gap-y-2">
    <public-shop-list-item v-for="shop in shops" :key="shop.id" :shop="shop" />
  </main>
</template>

<script lang="ts" setup>
  const shops = [
    {
      id: "1",
      name: "Bistro Moderne",
      type: "restaurant",
      imageUrl: "https://placehold.co/800x400/FF5733/FFFFFF?text=Restaurant",
      hours: "Open until 11 PM",
      description: "Contemporary French cuisine with seasonal ingredients",
    },
    {
      id: "2",
      name: "QuickFix Tech Solutions",
      type: "service",
      imageUrl: "https://placehold.co/400x600/33B5FF/FFFFFF?text=Tech+Service",
      hours: "Open until 7 PM",
      description: "Computer & phone repairs, data recovery services",
    },
    {
      id: "3",
      name: "HealthFirst Medical Clinic",
      type: "medical",
      imageUrl: "https://placehold.co/1200x800/33FF57/000000?text=Medical",
      hours: "Open until 6 PM",
      description: "Family medicine, urgent care, and wellness checkups",
    },
    {
      id: "4",
      name: "Style Studio Boutique",
      type: "retail",
      imageUrl: "https://placehold.co/600x300/FF33E9/FFFFFF?text=Boutique",
      hours: "Opens at 9 AM tomorrow",
      description: "Fashion boutique featuring designer and local brands",
    },
    {
      id: "5",
      name: "Brew & Beans Coffee House",
      type: "restaurant",
      imageUrl: "https://placehold.co/500x700/8B4513/FFFFFF?text=Coffee",
      hours: "Open until 10 PM",
      description: "Specialty coffee, fresh pastries, and light meals",
    },
    {
      id: "6",
      name: "The Coffee Shop",
      type: "retail",
      imageUrl: "https://placehold.co/600x300/FF33E9/FFFFFF?text=Boutique",
      hours: "Opens at 9 AM tomorrow",
      description: "Fashion boutique featuring designer and local brands",
    },
  ]
</script>

<style></style>
