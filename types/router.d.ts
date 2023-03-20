import type { RouteRecordRaw } from 'vue-router'
import { defineComponent } from 'vue'

declare module 'vue-router' {
    interface RouteMeta extends Record<string | number | symbol, unknown> {
        hidden?: boolean
        alwaysShow?: boolean
        title?: string
        icon?: string
        noCache?: boolean
        breadcrumb?: boolean
        affix?: boolean
        activeMenu?: string
        noTagsView?: boolean
        followAuth?: string
        canTo?: boolean
    }
}

type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>)

declare global {
    declare interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
        name: string
        meta: RouteMeta
        component?: Component | string
        children?: AppRouteRecordRaw[]
        props?: Recordable
        fullPath?: string
    }

    declare interface AppCustomRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
        name: string
        meta: RouteMeta
        component: string
        path: string
        redirect: string
        children?: AppCustomRouteRecordRaw[]
    }
}