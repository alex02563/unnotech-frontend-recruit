import { createApp } from 'vue'
import { router } from './route'
import { createPinia } from 'pinia'
import i18n from './plugins/i18n'

import App from './App.vue'

import './assets/styles/tailwind.css'

createApp(App).use(createPinia()).use(i18n).use(router).mount('#app')
