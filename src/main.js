import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/all.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { date } from '@/methods/filters'

const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
}

app.use(createPinia())
app.use(router)

app.mount('#app')





