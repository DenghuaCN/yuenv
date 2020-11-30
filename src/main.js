// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './JS/utils'
import toast from './components/toast'
import Dialog from './components/dialog'
import Loading from './components/loading'
import {
    get,
    post
} from './JS/ajax'


// import VueScroller from 'vue-scroller'

// import vConsole from './JS/vconsole'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

Vue.use(utils)
    // Vue.use(vConsole)
    // Vue.use(VueAwesomeSwiper)
    // Vue.use(VueScroller)

Vue.prototype.$Toast = toast
Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$axios = {
    get,
    post
}

Vue.config.productionTip = false

let cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
window.document.documentElement.style.fontSize = `${100 * cale}px`


// vue.min.js 普通注册app
/* eslint-disable no-new */
// export default new Vue({
//     el: '#app',
//     router,
//     components: {
//         App
//     },
//     template: '<App/>'
// })

// 仅使用vue.runtime.js时，使用render函数注册app
export default new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')
window.Router = router