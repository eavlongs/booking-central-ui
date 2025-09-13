<template>
  <UInput
    :placeholder="placeholder"
    :default-value="defaultValue"
    v-model="model"
    size="xl"
  >
    <template #leading>
      <UIcon name="material-symbols:search-rounded" size="20" />
    </template>
  </UInput>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    placeholder: string
    defaultValue?: string
  }>()

  const model = defineModel<string>("")
</script>
