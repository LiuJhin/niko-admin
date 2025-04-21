import type { RouteRecordRaw } from 'vue-router'

export interface AppRouteMeta {
  title: string
  icon?: string
  hidden?: boolean
  noCache?: boolean
  breadcrumb?: boolean
  affix?: boolean
  activeMenu?: string
  noTagsView?: boolean
  alwaysShow?: boolean
  canTo?: boolean
}

export type AppRouteRecordRaw = RouteRecordRaw & {
  name: string
  meta: AppRouteMeta
  children?: AppRouteRecordRaw[]
  fullPath?: string
}
