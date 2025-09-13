<template>
  <div
    class="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-6 gap-y-4"
  >
    <public-category-card v-for="category in categories" :category="category" />
  </div>
</template>

<script lang="ts" setup>
  import type { Category } from "~/types/general"

  const categories: Category[] = [
    {
      id: "1",
      name: "Restaurants",
      imageUrl:
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "Restaurants are the heart of any restaurant experience. Whether you're dining in, or ordering takeout, we've got you covered.",
    },
    {
      id: "2",
      name: "Consultations",
      imageUrl:
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "Restaurants are the heart of any restaurant experience. Whether you're dining in, or ordering takeout, we've got you covered.",
    },
    {
      id: "3",
      name: "Services",
      imageUrl:
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "We offer a wide range of services to suit your needs. From catering to event planning, we've got you covered.",
    },
    {
      id: "4",
      name: "Events",
      imageUrl:
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "We offer a wide range of services to suit your needs. From catering to event planning, we've got you covered.",
    },
    {
      id: "5",
      name: "Appointments",
      imageUrl:
        "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      description:
        "We offer a wide range of services to suit your needs. From catering to event planning, we've got you covered.",
    },
  ]
</script>

<style></style>
