import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, max, regex } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/styles/main.scss'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Swal from 'sweetalert2'

import App from './App.vue'
import router from './router'
import { currency, date } from './methods/filter.js'
import $httpMessageState from './methods/pushMessageState'

const app = createApp(App)

app.config.globalProperties.$filters = {
  date,
  currency,
}

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('regex', regex)

window.Swal = Swal

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
})

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
