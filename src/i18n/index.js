import { createI18n } from 'vue-i18n'
import elEn from 'element-plus/es/locale/lang/en'
import elZh from 'element-plus/es/locale/lang/zh-cn'
import en from './en'
import zh from './zh'

const messages = {
  en: {
    ...elEn,
    ...en
  },
  zh: {
    ...elZh,
    ...zh
  }
}

const i18n= createI18n({
  legacy: false,
  globalInjection:true,
  locale: localStorage.getItem('asg-language') || 'en',
  messages,
})

export default i18n