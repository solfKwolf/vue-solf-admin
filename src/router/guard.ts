import type { Router } from 'vue-router';
import { startProgress, stopProgress } from '@/utils/nprogress';

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
 * 创建路由守卫
 * @param router
 */
function createRouterGuard(router: Router) {
  /** common */
  setupCommonGuard(router)
}

export {
  createRouterGuard
}
