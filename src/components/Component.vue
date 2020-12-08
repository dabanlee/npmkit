<template>
  <h1>Hello {{ name }}</h1>
</template>

<script lang="ts">
export default {
  data: () => ({
    name: 'dabanli',
  }),
  setup() {
    return { name }
  },
}
</script>

<style scoped>
h1 {
  color: #333;
}
</style>