import { defineStore } from 'pinia'
import type { ISearch } from '@/types'

interface UserState {
  pic: string
  search: keyof ISearch
  second: boolean
  hour: boolean
  month: boolean
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    pic: 'pic3.webp',
    search: 'google',
    second: true,
    hour: true, // 24-hour
    month: false,
  }),

  getters: {
    getPic(): string {
      // return `/src/assets/${this.pic}`
      return this.pic
    },
    getTime(): string {
      let h = 'h'
      let s = ''
      if (this.second)
        s = ':ss'
      if (this.hour)
        h = 'H'
      return `${h}:mm${s}`
    },
  },

  actions: {
    setPic(pic: string): void {
      this.pic = pic
    },
    setSearch(s: keyof ISearch): void {
      this.search = s
    },
    setSecond(s: boolean): void {
      this.second = s
    },
    setHour(h: boolean): void {
      this.hour = h
    },
  },
})
