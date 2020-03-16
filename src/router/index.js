import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import { OVERLAY_LOADING } from 'store/overlayTypes'
import store from 'store'
import { delay } from 'utils/helpers'

Vue.use(Router)

let router = new Router({
    /* 
    To use history mode, the web server needs to configure to serve it
    https://router.vuejs.org/guide/essentials/history-mode.html
   */
    // mode: "history",
    routes: routes,
})
router.beforeEach(async (to, from, next) => {
    // Check if user is logged in
    const user = JSON.parse(sessionStorage.getItem('user'))
    const token = user ? user.token : null

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (token === null) {
            // login page use no-layout
            store.commit('setLayout', 'no-layout')
            if (from.path === '/') {
                store.commit('showOverlay', OVERLAY_LOADING)
                await delay(600).then(() => {
                    return store.commit('hideOverlay')
                })
            }
            next({
                path: '/login',
                query: { redirect: to.path },
            })
        } else {
            if (from.path === '/login') {
                store.commit('showOverlay', OVERLAY_LOADING)
                await delay(1500).then(() => {
                    return (
                        store.commit('hideOverlay'), store.commit('setLayout', 'app-layout'), next()
                    )
                })
            } else {
                store.commit('setLayout', 'app-layout')
                next()
            }
        }
    } else {
        // console.log("public route", to);
        next()
    }
})
export default router
