import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueScrollBehavior from 'vue-scroll-behavior' /* vue滚动插件 */
import 'normalize.css'  /* 设置浏览器默认样式 */

/* Vue.use(): 注册/使用插件 */
Vue.use(vueScrollBehavior, {router: router})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
