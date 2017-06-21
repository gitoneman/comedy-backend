/* eslint-disable */
import axios from 'axios'

let util = {}
util.title = function(title) {
  title = title ? title + '' : 'my project'
  window.document.title = title
}


util.ajax = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  timeout: 30000
})

// util.ajax.interceptors.response.use(function (response){
//   //对响应数据做些事
//   return response;
// }, function(error) {
//   //请求错误时做些事
//   return Promise.reject(error);
// });

export default util
