// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import iView from 'iview'
import {
  Button,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,
  Form,
  FormItem,
  Icon,
  Input,
  Switch,
  MessageBox,
  Upload
} from 'element-ui'
import moment from 'moment'
import router from './router'
import store from './store'
import '../theme/index.css'

// Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Upload)
// Vue.use(MessageBox)

Vue.prototype.$confirm = MessageBox.confirm

Vue.filter('formatTime', function (value) {
  console.log(value)
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
