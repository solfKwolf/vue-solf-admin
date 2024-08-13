import { createApp } from 'vue'
// 路由
import { setupRouter } from './router'
// 引入状态管理
import { setupStore } from '@/store'
import App from './App.vue'

// 引入全局样式
import '@/style/index.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// create App
async function startApp() {
  const app = createApp(App)
  // 配置 pinia store
  setupStore(app)
  // 配置路由
  setupRouter(app)
  // 配置ElementPlus
  app.use(ElementPlus)

  app.mount('#app')
}

startApp();
