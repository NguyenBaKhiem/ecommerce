import { Notify, Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import viVN from '@/locales/vant-vi'

export default function ({ app, $mobile }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    // some code
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    if (process.server) return
    newLocale === 'en' ? Locale.use('en-US', enUS) : Locale.use('vi-VN', viVN)
    // console.log(app.i18n)
    // return
    if ($mobile) {
      Notify({
        type: 'primary',
        message: app.i18n.t('notification.change_language_success')
      })
      return
    }
    window.$nuxt.$vs.notification({
      flat: true,
      color: 'primary',
      border: 'primary',
      position: 'top-right',
      title: 'Change Language',
      text: app.i18n.t('notification.change_language_success')
    })
  }
}
