import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Base from '../views/Base';
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'Base',
        component: Base,

        children: [

            {
                path: '/home',
                name: 'Home',
                component: Home,
                meta: {
                    requiresAuth: true
                },
            },

            {
                path: '/login',
                name: 'Login',
                component: Login,
                meta: {
                    isLoginView: true
                }
            }

        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
        } else {
            next({name: 'Login'})
        }
    } else if (to.matched.some(record => record.meta.isLoginView)) {
        if (store.getters.isLoggedIn) {
            next({name: 'Home'})

        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
