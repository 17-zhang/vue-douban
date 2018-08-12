import Vue from 'vue'
import Vuex from 'vuex'

import activities from './modules/activities'
import user from './modules/user'
import book from './modules/book'
import movie from './modules/movie'

Vue.use(Vuex)

/**
 * new Vuex.Store({}) 表示创建一个Vuex实例，通常情况下，他需要注入到Vue实例里.
 * Store是Vuex的一个核心方法，字面上理解为“仓库”的意思。
 * 他有4个核心选项：state mutations  getters  actions
 * */
export default new Vuex.Store({
  modules: {
    activities,
    user,
    book,
    movie
  }
})
