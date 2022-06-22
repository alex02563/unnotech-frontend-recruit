import { createI18n } from 'vue-i18n/index'
import zh from '@/language/zh-TW.js'
import en from '@/language/en-US.js'
import cookies from 'js-cookie'

const getLang = cookies.get('lang')
export default createI18n({
  legacy: false,
  locale: getLang || 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh,
    'en-US': en
  }
})
