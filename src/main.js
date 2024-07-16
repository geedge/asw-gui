import { createApp } from 'vue'
import App from './App.vue'

import './styles/element/index.scss'
import './styles/index.scss'

import router from "./router"
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from '@/i18n/index'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(i18n)
app.mount('#app')
