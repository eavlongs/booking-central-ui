<template>
  <div class="px-4 mb-4" v-if="!asContainer">
    <slot />
  </div>
  <div class="mb-4" v-else>
    <public-container>
      <slot />
    </public-container>
  </div>
</template>

<script lang="ts" setup>
  const props = withDefaults(
    defineProps<{
      asContainer?: boolean
    }>(),
    {
      asContainer: false,
    },
  )
</script>

<style></style>
