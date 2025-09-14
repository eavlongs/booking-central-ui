<template>
  <UInput
    :placeholder="placeholder"
    :default-value="defaultValue"
    v-model="model"
    size="xl"
    @keydown="handleKeyDown"
    v-bind="$attrs"
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

  const emits = defineEmits(["enter"])

  const model = defineModel<string>()

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      emits("enter")
    }
  }
</script>
