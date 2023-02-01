<script setup lang="ts">
useHead({
  title: 'IU-S',
  meta: [
    { name: 'description', content: 'navigation' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#1e1e1e' : '#eee'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
