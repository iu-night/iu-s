import { defineStore } from 'pinia'
import type { ISearch } from '@/types'

interface UserState {
  pic: string
  search: keyof ISearch
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    pic: 'pic3.jpg',
    search: 'google',
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
    setSearch(s: keyof ISearch): void {
      this.search = s
    },
  },
})
