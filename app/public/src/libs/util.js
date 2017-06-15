/* eslint-disable */
import axios from 'axios'

let util = {}
util.title = function(title) {
  title = title ? title + '' : 'my project'
  window.document.title = title
}


util.ajax = axios.create({
  timeout: 30000
})

export default util
