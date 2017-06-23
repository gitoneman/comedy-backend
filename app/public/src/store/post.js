import Util from '../libs/util'

const Post = {
  namespaced: true,
  state: {
    data: [

    ],
    detail: {

    }
  },
  getters: {},
  mutations: {
    save (state, payload) {
      state.data = payload.data
    },
    saveDetail (state, payload) {
      state.detail = payload.data
    }
  },
  actions: {
    increment ({commit}) {
      commit('increment')
    },
    getList ({commit}) {
      Util.ajax
        .get('posts', {
          params: {
            _limit: 10
          }
        })
        .then(({data}) => {
          commit('save', {
            data: data.data
          })
        })
    },
    getDetail ({commit}, id) {
      Util.ajax
        .get(`posts/${id}`)
        .then(({data}) => {
          commit('saveDetail', {
            data: data.data
          })
        })
    },
    add ({commit}, form) {
      return new Promise(function (resolve) {
        Util.ajax
          .post(`posts`, form)
          .then(({data}) => {
            resolve(data)
          })
      })
    },
    edit ({commit}, {id, form}) {
      return new Promise(function (resolve) {
        Util.ajax
          .put(`posts/${id}`, form)
          .then(({data}) => {
            resolve(data)
          })
      })
    },
    delete ({dispatch, commit}, id) {
      return new Promise(function (resolve) {
        Util.ajax
          .delete(`posts/${id}`)
          .then(({data}) => {
            resolve(data)
            dispatch('getList')
          })
      })
    }
  }
}
export default Post

