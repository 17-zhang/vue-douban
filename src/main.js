import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior'
import 'normalize.css'

/* Vue.use(): 注册/使用插件 */
Vue.use(vueScrollBehavior, { router: router })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
