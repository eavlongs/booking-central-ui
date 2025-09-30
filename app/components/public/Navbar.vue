<template>
  <header
    class="sticky w-full border-b py-2 px-4 flex items-center justify-between"
  >
    <div>
      <ULink to="/" class="text-black">
        <h1 class="text-2xl font-bold">Booking Central</h1>
      </ULink>
    </div>
    <div>
      <auth-go-to-login-page-button v-if="!session.isAuthenticated" />
      <auth-logout-button v-else />
    </div>
  </header>
</template>

<script lang="ts" setup>
  const session = useAuthSession()
</script>

<style></style>
