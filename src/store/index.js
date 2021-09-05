import Vuex from 'vuex'
import Vue from "vue";
import Cookies from 'js-cookie'
import axios from "axios";
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sessionId: Cookies.get('isLoggedIn') || "no",
        anime_data: [],
        cookies_accepted: localStorage.getItem('cookies:accepted') || false,
    },
    mutations: {
        auth_success(state) {
            Cookies.set('isLoggedIn', 'yes')
            state.sessionId = "yes"
        },
        auth_logout(state) {
            Cookies.set('isLoggedIn', 'no')
            state.sessionId = "no"
        },
        add_anime_data(state, data) {
            console.assert(Array.isArray(data))
            state.anime_data = state.anime_data.concat(data)
        },
        accept_cookies(state) {
            localStorage.setItem('cookies:accepted', true)
            state.cookies_accepted = true
        },

        reject_cookies(state) {
            localStorage.removeItem('cookies:accepted')
            state.cookies_accepted = false
        }
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {

                axios.post('/auth/login/', user)
                    .then(resp => {
                        commit('auth_success')
                        router.push({path: 'Home'})
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_logout')
                        reject(err)
                    })
            })
        },
        logout({commit, getters}) {
            if (getters.isLoggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/auth/logout/')
                        .then(resp => {
                            commit('auth_logout')
                            router.push({path: 'Login'})
                            resolve(resp)
                        })
                        .catch(resp => {
                            reject(resp)
                        })
                })
            }
        }
    },

    getters: {
        isLoggedIn: state => state.sessionId === 'yes',
        getAimeData: state => state.anime_data,
        cookiesAccepted: state => !!state.cookies_accepted,
    },

})