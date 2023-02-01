import { defineStore } from 'pinia'

interface UserState {
  pic: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    pic: 'pic2.webp',
  }),

  getters: {
    getPic(): string {
      // return `/src/assets/${this.pic}`
      return this.pic
    },
  },

  actions: {
    setPic(pic: string): void {
      this.pic = pic
    },
  },
})
