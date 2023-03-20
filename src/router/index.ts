import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'


// 1. 配置路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 默认路由 home页面
    component: () => import("../views/home/index.vue"),
  },

];


const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: routes,
})


export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router