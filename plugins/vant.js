import Vue from 'vue'
import { Button, Lazyload, Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from '@/locales/vant-vi'

Vue.use(Button)
Vue.use(Lazyload)

export default function ({ app }) {
  app.i18n.locale === 'en' ? Locale.use('en-US', enUS) : Locale.use('vi-VN', viVN)
}
