import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
