<template>
  <h1>Hello {{ name }}</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    name: 'dabanli',
  }),
  mounted() {
    this.name = 'dabanli' as string
  },
})
</script>

<style scoped>
h1 {
  color: #333;
}
</style>