import type { Router } from 'vue-router';
import { startProgress, stopProgress } from '@/utils/nprogress';
import { useAccessStore } from "@/store"
import { LOGIN_PATH } from '@/constant';

const coreRouteNames = ['Login'];
/**
 * 通用守卫配置
 * @param router
 */
function setupCommonGuard(router: Router) {
  router.beforeEach((to) => {
    startProgress();
  })
  router.afterEach((to) => {
    stopProgress();
  })
  return true;
}

/**
 * 权限守卫配置
 * @param router
 */
function setupAccessGuard(router: Router) {
  router.beforeEach(async (to, from) => {
    const accessStore = useAccessStore();
    console.log(accessStore.accessToken);
    if(coreRouteNames.includes(to.name as string)) {
      return true;
    }
    // 基本路由，无需拦截
    if (!accessStore.accessToken) {
      // 没有访问权限，跳转登录页面
      console.log(to, encodeURIComponent(to.fullPath))
      if(to.fullPath !== LOGIN_PATH) {
        return {
          path: LOGIN_PATH,
          // 如不需要，直接删除 query
          query: { redirect: encodeURIComponent(to.fullPath) },
          // 携带当前跳转的页面，登录后重新跳转该页面
          replace: true,
        };
      }
      return true;
    }

    // const redirectPath = (from.query.redirect ?? to.fullPath) as string;

    return true;
  })
}

/**
 * 创建路由守卫
 * @param router
 */
function createRouterGuard(router: Router) {
  /** common */
  setupCommonGuard(router)
  /** 权限守卫 */
  setupAccessGuard(router)
}

export {
  createRouterGuard
}
