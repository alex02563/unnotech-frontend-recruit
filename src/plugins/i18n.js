import { createI18n } from 'vue-i18n/index'
import zh from '@/language/zh-TW.js'
import en from '@/language/en-US.js'

export default createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en
  }
})
