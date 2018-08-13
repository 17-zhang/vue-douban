import request from 'superagent'

/**
 * state:存放组件之间的共享数据。他跟组件的data选项类似，只不过data选项是用来存放组件的私有数据。
 */

const state = {
  login_email: '',
  login_token: '',
  login_name: '',
  temp_email: '',
  temp_token: '',
  temp_name: ''
}

/**
 * getters:获取数据的方法。
 *  1、对state的数据进行筛选，过滤。
 *  2、getters下的函数接收接收state作为第一个参数。
 *  3、过滤的数据会存放到$store.getters对象中。
 * */

const getters = {
  // 过滤 currentUser
  currentUser: state => {
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

/**
 *  mutations:显式的更改state里的数据
 *  在 Vuex store 中，实际改变 状态(state) 的唯一方式是通过 提交(commit) 一个 mutation。
 *  mutations下的函数接收state作为参数，接收一个叫做payload（载荷）作为第二个参数。
 *  mutations方法必须是同步方法！
 * */

const mutations = {
  updateData (state, payload) {
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break
      case 'token':
        state.temp_token = payload.value
        break
      case 'name':
        state.temp_name = payload.name
        break
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },
  getLocalUser (state) {
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  setUser (state, payload) {
    state.login_email = payload.email
    state.login_token = payload.token
    state.login_name = payload.name
  },
  logout (state) {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    state.login_email = ''
    state.login_token = ''
    state.login_name = ''
  }
}

/**
 * actions：既然mutations只能处理同步函数,那actions是处理异步函数。
 *
 * actions和mutations的区别：
 *    1.Actions 提交的是 mutations，而不是直接变更状态。也就是说，actions会通过mutations，让mutations帮他提交数据的变更。
 *    2.Action 可以包含任意异步操作。ajax、setTimeout、setInterval不在话下
 */

const actions = {
  /**
   * Login
   * new Promise((resolve, reject) => {})
   * Authorization: 'Bearer ' + token
   * email: payload.email
   * pass: payload.pass
   * name: payload.name
   */
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://douban.herokuapp.com/user/' + payload.email)
        .set('Authorization', 'Bearer' + payload.token)
        .then(res => {
          commit({
            type: 'setUser',
            email: res.body.email,
            token: res.body.token,
            name: res.body.name
          })
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  },
  /**
   * Register
   * new Promise((resolve, reject) => {})
   * email: payload.email
   * pass: payload.pass
   * name: payload.name
   */
  register ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      request
        .post('https://douban.herokuapp.com/user/')
        .send({
          email: payload.email,
          pass: payload.pass,
          name: payload.name
        })
        .then(res => {
          localStorage.setItem('token', res.body.token)
          localStorage.setItem('email', res.body.email)
          localStorage.setItem('name', res.body.name)

          commit({
            type: 'setUser',
            email: res.body.email,
            token: res.body.token,
            name: res.body.name
          })
          resolve(res)
        }, err => {
          reject(err)
        })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

/**
 * 总结：
 *    1、mutation 只管存，你给我（dispatch）我就存
 *    2、action只管中间处理，处理完我就给你，你怎么存我不管；
 *    3、Getter 我只管取，我不改。
 */
