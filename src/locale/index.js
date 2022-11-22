import { createI18n } from 'vue-i18n'
import VueI18nMessages from '../locale/messages'


const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: VueI18nMessages
})


export default i18n