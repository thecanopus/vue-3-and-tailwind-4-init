<script setup lang="ts">
interface Props {
  msg?: string
}

const { msg } = defineProps<Props>()
</script>

<template>
  <h1 class="!font-bold text-blue-700 text-2xl">
    {{ msg || 'TailwindCSS is working' }}
  </h1>
  <div class="font-medium text-blue-500">{{ Date() }}</div>
</template>
