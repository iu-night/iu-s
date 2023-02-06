<script setup lang="ts">
// import { UseImage } from '@vueuse/components'

const useStore = useUserStore()
const src = computed(() => useStore.getPic)
</script>

<template>
  <Transition name="slide-up">
    <img v-if="src === 'pic1.webp'" src="../assets/pic1.webp" class="ius-img">
    <img v-else-if="src === 'pic2.webp'" src="../assets/pic2.webp" class="ius-img">
    <img v-else src="../assets/pic3.webp" class="ius-img">
  </Transition>
</template>

<style lang="scss">
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.slide-up-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
