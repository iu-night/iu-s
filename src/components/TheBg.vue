<script setup lang="ts">
const useStore = useUserStore()
const src = $computed(() => useStore.getPic)
</script>

<template>
  <img v-if="src === 'pic1.jpg'" src="../assets/pic1.jpg" class="-z-3 fixed left-0 top-0 w-full h-full object-cover transition-all-200">
  <img v-if="src === 'pic2.webp'" src="../assets/pic2.webp" class="-z-3 fixed left-0 top-0 w-full h-full object-cover transition-all-200">
</template>

<style lang="scss" scoped>

</style>
