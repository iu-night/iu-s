<script setup lang="ts">
// import { UseImage } from '@vueuse/components'

const useStore = useUserStore()
const src = $computed(() => useStore.getPic)
</script>

<template>
  <img v-if="src === 'pic1.webp'" src="../assets/pic1.webp" class="ius-img">
  <img v-if="src === 'pic2.webp'" src="../assets/pic2.webp" class="ius-img">
  <img v-if="src === 'pic3.webp'" src="../assets/pic3.webp" class="ius-img">
</template>

<style lang="scss" scoped>

</style>
