// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import iView from 'iview'
import ElementUI from 'element-ui'
import moment from 'moment'
import router from './router'
import store from './store'
import '../theme/index.css'

Vue.use(ElementUI)

Vue.filter('formatTime', function (value) {
  return moment(value).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
})
