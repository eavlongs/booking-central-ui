<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-gray-100 flex items-center justify-center z-[-1]"
  >
    <div class="flex flex-col items-center gap-y-4">
      <span class="text-xl font-semibold">Login Methods</span>
      <div class="flex flex-col items-center gap-y-2">
        <auth-oauth-provider-login-button
          v-for="provider in providers"
          :key="provider.id"
          :provider="provider"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useAPI } from "~/composables/api"
  import { type Provider } from "~/types/auth"
  import type { ApiResponse } from "~/types/general"

  const providers = ref<Provider[]>([])
  const { $api } = useNuxtApp()

  async function fetchProviders() {
    try {
      const { data } =
        await useAPI<ApiResponse<{ providers: Provider[] }>>("/auth/providers")

      if (data.value.success && data.value.data) {
        providers.value = data.value.data.providers
      } else {
        throw new Error("Unexpected response")
      }
    } catch (e: any) {
      console.error(e)
    }
  }

  fetchProviders()
</script>
