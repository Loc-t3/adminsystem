import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './langs'

Vue.use(VueI18n)
const i18n = new VueI18n({
  // 默认语言是中文简体
  locale: localStorage.getItem('locale') || 'zh_CN',
  messages,
  silentTranslationWarn: true
})

export default i18n
