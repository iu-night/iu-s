<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const useStore = useUserStore()
let setVis = $ref(false)

// let formatter = $ref('HH:mm:ss')
const formatter = computed(() => useStore.getTime)
const time = useDateFormat(useNow(), formatter)

const second = computed(() => useStore.second)
const hour = computed(() => useStore.hour)

const picArr = ['pic1.jpg', 'pic2.webp', 'pic3.jpg']
const pic = computed(() => useStore.getPic)

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
          backdrop-blur-5px backdrop-saturate-80"
      >
        <div v-on-click-outside="closeModal" class="setting-main">
          <TheHeader />
          <section mt-50px px-30px flex items-center>
            <h2 text-xl font-bold>
              时间
            </h2>
            <div flex flex-1 justify-end>
              <Checkbox :model-value="hour" @update:model-value="useStore.setHour">
                24H
              </Checkbox>
              <Checkbox :model-value="second" @update:model-value="useStore.setSecond">
                秒
              </Checkbox>
            </div>
          </section>
          <section mt-30px px-30px>
            <h2 text-xl font-bold>
              壁纸
            </h2>
            <div flex mt-10px h-100px justify-around items-center>
              <div
                v-for="(item, index) in picArr"
                :key="item"
                class="pic-view"
                :class="{
                  'pic-active': pic === item,
                }"
                @click="setPic(item)"
              >
                <div :class="`pic${index + 1}`" />
                <div v-if="pic === item" class="pic-mask">
                  <div i-carbon-checkmark-outline />
                </div>
              </div>
            </div>
          </section>
          <!-- <section mt-50px px-30px>
            <h2 text-xl font-bold>
              默认搜索引擎
            </h2>
            <div flex mt-10px justify="around">
              <div>百度icon</div>
              <div>Google icon</div>
              <div>Github icon</div>
            </div>
          </section> -->
        </div>
      </div>
    </Transition>
  </main>
  <TheBg />
</template>

<style lang="scss">
.setting-main {
  --iu:
    w-500px h-320px
    flex flex-col relative
    rounded-4px
  text-gray-700 dark:text-gray-200
    bg-[#ddd] dark:bg-[#222]
    transition-300
    shadow-iu dark:shadow-iud;
}

.pic-view {
  --iu:
    h-80px w-120px rounded-6px
    relative
    overflow-hidden
    cursor-pointer
    transition-300;

  &:hover {
    --iu: scale-110;
  }
}

.pic-active {
  --iu: cursor-default;
}

.pic-mask {
  --iu: bg-[#000]:30
  absolute top-0 left-0
  flex-center
  z-10
  h-full w-full
  c-teal-600 text-30px;
}

.pic1 {
  --iu: w-full h-full bg-cover bg-center;

  background-image: url("../assets/pic1.jpg");
}

.pic2 {
  --iu: w-full h-full bg-cover bg-center;

  background-image: url("../assets/pic2.webp");
}

.pic3 {
  --iu: w-full h-full bg-cover bg-center;

  background-image: url("../assets/pic3.jpg");
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
