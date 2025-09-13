<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-gray-100 flex items-center justify-center z-[-1]"
  >
    <div class="flex flex-col items-center gap-y-4">
      <span class="text-xl font-semibold">Login Methods</span>
      <div class="flex flex-col items-center gap-y-2">
        <auth-google-login-button />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
