<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const useStore = useUserStore()
let setVis = $ref(false)

let formatter = $ref('HH:mm:ss')
const time = useDateFormat(useNow(), formatter)

const setFormatter = (f: string) => {
  switch (f) {
    case 'year':
      formatter = 'YYYY-MM-DD HH:mm:ss'
  }
}

const setPic = (picName: string) => {
  useStore.setPic(picName)
}

const closeModal = () => {
  setVis = false
}

const handleMenu = (e: any) => {
  setVis = true
  e.preventDefault()
}

onMounted(() => {
  useEventListener(document, 'contextmenu', handleMenu, true)
})
</script>

<template>
  <main class="w-full h-full flex flex-col items-center">
    <div mt-140px fixed text-4xl font-bold c-white transition-transform-300 hover:scale-110>
      {{ time }}
    </div>
    <div mt-230px>
      <SearchBar />
    </div>
    <Transition name="setting">
      <div
        v-if="setVis"
        class="setting-container fixed flex-center
          top-0 left-0 z-998
          w-full h-full
          transition-opacity-300
          backdrop-blur-5px backdrop-saturate-50"
      >
        <div v-on-click-outside="closeModal" class="setting-main">
          <TheHeader />
          <section mt-50px px-30px>
            <h2 text-xl font-bold>
              时间
            </h2>
            <!-- <div flex mt-10px justify="around">
              <div>年</div>
              <div>月日</div>
              <div>秒</div>
            </div> -->
          </section>
          <section mt-50px px-30px>
            <h2 text-xl font-bold>
              切换壁纸
            </h2>
            <div flex mt-10px justify="around">
              <div cursor-pointer @click="setPic('pic1.jpg')">
                pic1
              </div>
              <div cursor-pointer @click="setPic('pic2.webp')">
                pic2
              </div>
            </div>
          </section>
          <section mt-50px px-30px>
            <h2 text-xl font-bold>
              默认搜索引擎
            </h2>
            <!-- <div flex mt-10px justify="around">
              <div>百度icon</div>
              <div>Google icon</div>
              <div>Github icon</div>
            </div> -->
          </section>
        </div>
      </div>
    </Transition>
  </main>
  <TheBg />
</template>

<style lang="scss">
.setting-main {
  --iu:
    w-500px h-500px
    flex flex-col relative
    rounded-4px
  text-gray-700 dark:text-gray-200
    bg-[#ddd] dark:bg-[#222]
    transition-300
    shadow-iu dark:shadow-iud;
}

.setting-enter-from,
.setting-leave-to {
  opacity: 0;
}

.setting-enter-from .setting-container,
.setting-leave-to .setting-container {
  transform: scale(1.1);
}
</style>
