import { createApp } from 'vue'
// 路由
import { setupRouter } from './router'
// 引入状态管理
import { setupStore } from '@/store'
import App from './App.vue'

import "./tailwind.css"
// 引入全局样式
import '@/styles/index.less'

// create App
async function startApp() {
  const app = createApp(App)
  // 配置 pinia store
  setupStore(app)
  // 配置路由
  setupRouter(app)

  app.mount('#app')
}

startApp();
