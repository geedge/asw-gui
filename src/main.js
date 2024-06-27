import { createApp } from 'vue'
import App from './App.vue'

import './styles/index.scss'
import './styles/element/index.scss'

import router from "./router"
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import i18n from '@/i18n/index'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')
