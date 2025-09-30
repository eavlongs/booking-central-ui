<template>
  <ULink :to="url" :no-prefetch="true">
    <button
      class="text-black border border-gray-400 px-4 py-2 rounded-lg flex items-center gap-x-2 cursor-pointer hover:bg-gray-100"
    >
      <img :src="provider.logo_url" class="aspect-auto w-6" />
      Continue with {{ provider.name }}
    </button>
  </ULink>
</template>

<script lang="ts" setup>
  import type { Provider } from "~/types/auth"

  const props = defineProps<{
    provider: Provider
  }>()

  const runtimeConfig = useRuntimeConfig()

  const url =
    runtimeConfig.public.apiUrl +
    runtimeConfig.public.backendLoginPath +
    "/" +
    props.provider.registration_id
</script>
