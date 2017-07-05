/* eslint-disable */
import axios from 'axios'
import { Message } from 'element-ui';

let util = {}
util.title = function(title) {
  title = title ? title + '' : 'my project'
  window.document.title = title
}
util.isMobile = /mobile/i.test(window.navigator.userAgent)
util.appendJs = function (url) {
  return new Promise(function (resolve, reject) {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = url
    s.onload = function () {
      resolve()
    }
    s.onerror = function () {
      reject()
    }
    document.body.appendChild(s)
  })
}
util.appendCss = function (url) {
  return new Promise(function (resolve, reject) {
    const s = document.createElement('link')
    s.rel = "stylesheet";
    s.type = "text/css";
    s.href = url
    s.onload = function () {
      resolve()
    }
    s.onerror = function () {
      reject()
    }
    document.getElementsByTagName("head")[0].appendChild(s)
  })
}

if (window.location.hostname === 'localhost') {
  var baseURL = 'http://localhost:7001/api/'
} else {
  var baseURL = '/api/'
}
util.baseURL = baseURL
util.ajax = axios.create({
  // baseURL: 'http://jsonplaceholder.typicode.com/',
  baseURL,
  withCredentials: true,
  timeout: 30000
})

util.ajax.interceptors.response.use(function (response){
  //对响应数据做些事
  const {data} = response;
  if (data.code === 0) {
    if (data.msg) {
      Message({
        message: data.msg,
        type: 'success'
      })
    }
  } else {
    if (data.msg) {
      Message({
        message: data.msg,
        type: 'error'
      })
    }
  }
  return response;
}, function(error) {
  //请求错误时做些事
  return Promise.reject(error);
});

export default util
