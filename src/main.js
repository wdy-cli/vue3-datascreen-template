import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/components'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'normalize.css'

import router from './router'
import '@/router/filter.js'

import VScaleScreen from 'v-scale-screen'

import { http } from './api/index'

const app = createApp(App)
app.config.globalProperties.$http = http

app.use(ElementPlus).use(createPinia()).use(router).use(VScaleScreen).mount('#app')
