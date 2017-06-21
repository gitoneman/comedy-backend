import Util from '../libs/util'

const Post = {
  namespaced: true,
  state: {
    data: [
      {
        id: 1,
        title: '当今，前端开发已今非昔比',
        desc: '多年前，有知名企业前端前辈如是说：前端是做什么的？在一个网页上你看到的就是前端工程师做的。也有人说：前端是设计师在UED最亲密的合作伙伴。很显然，这些概念放之今日都显得太片面...',
        time: '2017.06.20',
        img: 'http://comedy.oss-cn-hangzhou.aliyuncs.com/2017-06-15/3.jpg'
      },
      {
        id: 2,
        title: '当今，前端开发已今非昔比',
        desc: '多年前，有知名企业前端前辈如是说：前端是做什么的？在一个网页上你看到的就是前端工程师做的。也有人说：前端是设计师在UED最亲密的合作伙伴。很显然，这些概念放之今日都显得太片面...',
        time: '2017.06.19',
        img: 'http://comedy.oss-cn-hangzhou.aliyuncs.com/2017-06-15/2.jpg'
      },
      {
        id: 3,
        title: '当今，前端开发已今非昔比',
        desc: '多年前，有知名企业前端前辈如是说：前端是做什么的？在一个网页上你看到的就是前端工程师做的。也有人说：前端是设计师在UED最亲密的合作伙伴。很显然，这些概念放之今日都显得太片面...',
        time: '2017.06.18',
        img: 'http://comedy.oss-cn-hangzhou.aliyuncs.com/2017-06-15/3.jpg'
      },
      {
        id: 4,
        title: '当今，前端开发已今非昔比',
        desc: '多年前，有知名企业前端前辈如是说：前端是做什么的？在一个网页上你看到的就是前端工程师做的。也有人说：前端是设计师在UED最亲密的合作伙伴。很显然，这些概念放之今日都显得太片面...',
        time: '2017.06.17',
        img: 'http://comedy.oss-cn-hangzhou.aliyuncs.com/2017-06-15/2.jpg'
      }
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
      // Util.ajax
      //   .get('posts?_limit=10')
      //   .then(({data}) => {
      //     commit('save', {
      //       data: data
      //     })
      //   })
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

