import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/main.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filter.js'
import $httpMessageState from './methods/pushMessageState'

const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
  currency,
}

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.config.globalProperties.$httpMessageState = $httpMessageState

AOS.init()

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
app.component('Loading', Loading)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
