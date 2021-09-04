import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/* Main css componentes*/
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Buefy)
Vue.use(VueRouter)

import axios from 'axios'
import VueRouter from "vue-router";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true
axios.interceptors.response.use(response => {
    return response
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
