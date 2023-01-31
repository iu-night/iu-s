<script setup lang="ts">
import type { ISearch } from '@/types'

const useStore = useUserStore()
const setSea = useStore.setSearch

let searchValue = $ref('')

const search = computed(() => useStore.search)
const searchMap: ISearch = {
  google: 'i-custom:google',
  baidu: 'i-custom:baidu',
  bing: 'i-custom:bing',
  github: 'i-carbon-logo-github',
}
const searchUrl: ISearch = {
  google: 'https://www.google.com/search?q=',
  baidu: 'https://www.baidu.com/s?ie=utf-8&wd=',
  bing: 'https://cn.bing.com/search?q=',
  github: 'https://github.com/search?q=',
}

const activeElement = useActiveElement()
const activeKey = computed(() => activeElement.value?.dataset?.id || 'null')

let iusClassName = $ref('')
const logoClass = computed(() => {
  return searchMap[search.value]
})

const { ctrl_g, ctrl_d, ctrl_m, ctrl_h, enter } = useMagicKeys()

const toSearch = () => {
  if (window)
    window.open(searchUrl[search.value] + searchValue, '_blank')
}

watch(activeKey, (key) => {
  if (key === 'searchBar')
    iusClassName = 'ius-search-bar-active'
  else
    iusClassName = ''
})

watch(enter, (v) => {
  if (v)
    toSearch()
})
watch(ctrl_g, (v) => {
  if (v)
    setSea('google')
})
watch(ctrl_d, (v) => {
  if (v)
    setSea('baidu')
})
watch(ctrl_m, (v) => {
  if (v)
    setSea('bing')
})
watch(ctrl_h, (v) => {
  if (v)
    setSea('github')
})
</script>

<template>
  <div class="ius-search-bar" :class="iusClassName">
    <div :class="logoClass" class="cursor-pointer" />
    <input v-model="searchValue" data-id="searchBar" type="text" class="ius-input" spellcheck="false" autocapitalize="off">
    <div icon-btn i-carbon-search @click="toSearch" />
  </div>
</template>

<style lang="scss">
.ius-search-bar {
  --iu:
    relative
    inline-flex items-center
    w-300px h-45px
    text-20px
    px-8px py-4px
    rounded-20px
    bg-white:30 dark:bg-dark-300:80
    transition-250;

  &:hover {
    --iu: bg-neutral-300 dark:bg-dark-300;
  }
}

.ius-search-bar-active {
  --iu: bg-neutral-300 dark:bg-dark-300;

}

.ius-input {
  --iu:
    flex-1
    w-full
    mx-10px
    p-0
    b-0
    bg-transparent
    placeholder-gray dark:placeholder-gray-500;

  &:focus-visible {
    outline: none;
  }
}
</style>
