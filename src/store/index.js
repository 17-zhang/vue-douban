import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'

Vue.use(Vuex)

// Vuex状态管理仓库
export default new Vuex.Store({
  module: {
    activities
  }
})
