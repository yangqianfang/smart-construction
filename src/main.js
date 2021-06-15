import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/base.less'
import '@/assets/styles/index.less'
// import './permission' // permission control
// global data
Vue.prototype.$global = {
    config: null
}

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')
