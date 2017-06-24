import Vue from 'vue'
import Vuex from 'vuex'
import post from './post'
import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    post,
    user
  }
})
export default store
