import Util from '../libs/util'

const Post = {
  namespaced: true,
  state: {
    data: [

    ],
    detail: {

    },
    empty: {
      publish: false
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
    getList ({commit}, payload) {
      let type

      if (payload) {
        type = payload.type
      }
      Util.ajax
        .get('posts', {
          params: {
            _limit: 10,
            type
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
            dispatch('getList', {type: 'all'})
          })
      })
    }
  }
}
export default Post

