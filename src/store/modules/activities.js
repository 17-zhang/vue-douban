/**
 * superagent 是一个轻量的,渐进式的ajax api,可读性好,学习曲线低,
 * 内部依赖nodejs原生的请求api,适用于nodejs环境下.
 * */
import request from 'superagent'

const state = {
  events: [],
  temp: [],  /* 临时文件夹 */
  skip: 0,  /* 略过 */
  eventItem: {}
}

const mutations = {
  // loadMore(状态，有效载荷)
  loadMore (state, payload) {
    state.skip += 3
    state.events = state.events.concat(payload.res)
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  /**
   * Loading more数据项
   * ship: 3 default
   * count: 3 default
   * */
  loadMore ({commit, state}) {
    request
      .get()
  }
}

export default {
  state,
  mutations,
  actions
}
