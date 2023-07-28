// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { formatDate, prevDate } from 'element-ui/src/utils/date-util' // formatDate
Vue.prototype.formatDate = formatDate
Vue.prototype.prevDate = prevDate

import '@/styles' // global css

import '@/icons' // icon
import i18n from '@/i18n/i18n'
// set ElementUI lang to EN
Vue.use(ElementUI, {
  size: localStorage.getItem('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
