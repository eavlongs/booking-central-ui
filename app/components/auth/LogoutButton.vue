<template>
  <UButton size="md" color="error" @click="logout">Log out</UButton>
</template>

<script lang="ts" setup>
  async function logout() {
    await $fetch("/api/logout", {
      method: "POST",
    })
    window.location.href = "/"
  }
</script>

<style></style>
