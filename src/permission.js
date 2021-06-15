import Vue from 'vue'
import router from './router'
import store from './store'
import { getToken, removeToken } from '@/utils/auth' // get token from cookie
const whiteList = ['/login'] // no redirect whitelist
router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            // if is logged in, redirect to the home page
            next({ path: '/' })
            // NProgress.done();
        } else {
            try {
                await store.dispatch('user/getInfo')
                if (Vue.prototype.$global.config) {
                    next()
                } else {
                    await store.dispatch('user/setLocaticon')
                    next()
                }
            } catch (error) {
                // remove token and go to login page to re-login
                removeToken()
                // Toast(error || "Has Error");
                next(`/login`)
            }
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login`)
        }
    }
})

// router.afterEach(() => {
//     // finish progress bar
//     //NProgress.done();
// })
