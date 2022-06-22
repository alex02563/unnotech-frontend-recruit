import { createApp } from 'vue'
import { router } from './route'
import { createPinia } from 'pinia'

import App from './App.vue'

import './assets/styles/tailwind.css'

createApp(App).use(createPinia()).use(router).mount('#app')
