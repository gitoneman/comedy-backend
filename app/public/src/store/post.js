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
        .get('/api/posts')
        .then(({data}) => {
          commit('save', {
            data: data.data
          })
        })
    },
    getDetail ({commit}, id) {
      Util.ajax
        .get(`/api/posts/${id}`)
        .then(({data}) => {
          commit('saveDetail', {
            data: data.data
          })
        })
    },
    add ({commit}, form) {
      Util.ajax
        .post(`/api/posts`, form)
        .then(({data}) => {
          console.log(data)
        })
    },
    edit ({commit}, {id, form}) {
      console.log(id)
      Util.ajax
        .put(`/api/posts/${id}`, form)
        .then(({data}) => {
          console.log(data)
        })
    }
  }
}
export default Post

