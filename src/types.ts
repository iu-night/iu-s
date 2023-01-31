import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface ISearch {
  google: string
  baidu: string
  bing: string
  github: string
}
