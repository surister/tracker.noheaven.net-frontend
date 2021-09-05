import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true

/* Main css componentes*/
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Buefy)


/* Axios conf */
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

/* Router conf */
import router from './router'
import VueRouter from "vue-router";
Vue.use(VueRouter)

/* Vuex conf */
import store from './store'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
