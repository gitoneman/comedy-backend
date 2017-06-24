import Util from '../libs/util'

const User = {
  namespaced: true,
  state: {
    username: ''
  },
  getters: {},
  mutations: {
    save (state, payload) {
      state.username = payload.username
    }
  },
  actions: {
    index ({commit}) {
      return new Promise(function (resolve) {
        Util.ajax
          .get(`user`)
          .then(({data}) => {
            if (data.code === 0) {
              window.username = data.data.username
              commit('save', {
                data: data.data
              })
              resolve(data)
            }
          })
      })
    },
    login ({commit}, form) {
      return new Promise(function (resolve) {
        Util.ajax
          .post(`user/login`, form)
          .then(({data}) => {
            if (data.code === 0) {
              window.username = data.data.username
              commit('save', {
                data
              })
              resolve(data)
            } else {

            }
          })
      })
    }
  }
}
export default User

