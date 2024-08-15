import type { App } from 'vue'
import { createPinia } from 'pinia'
export * from './modules';

const store = createPinia()

export const setupStore = (app: App<Element>) => {
    app.use(store)
}

export { store }
