// 'use strict'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/intraware/stores'
import router from '@/intraware/routers'

// const baseURLs ='http://api.778668.cn:9080';
const baseURLs ='http://192.168.1.200:9080';


axios.defaults.baseURL = baseURLs;
axios.defaults.timeout = 5000
// 请求时的拦截
axios.interceptors.request.use(config => {
  // console.log(config);
  return config
}, error => {
  return Promise.reject(error)
})
// 响应时拦截
axios.interceptors.response.use(response => {
  // response = qs.parse(response)
  return response
}, error => {
  return Promise.resolve(error.response)
})

function changeurl() {
  if (store.state.baseUrl!="") {
    axios.defaults.baseURL = store.state.baseUrl;
  } else {
    axios.defaults.baseURL = baseURLs;
  }
}
// 检查http状态码
function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    // if (response && (response.status !===  ) {
    return response
  }
  return {
    status: -404,
    msg: '网络异常'
  }
}
// 检查返回数据状态码
function checkCode(res) {
  if (res.status === -404) {
    alert(res.msg, 4)
  }else  if (res.data.status === 501) {
    store.state.islogin = false;
    alert('登录状态已过期，请重新登录！')
    router.push({ path: '/login' });
  }else if (res.data && (!res.data.status === 0)) {
    alert(res.msg)
  }
  return res.data
}
export default {
  post(url, data) {
    changeurl();
    return axios({
      method: 'post',
      url,
      data: qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  imgpost(url, data) {
    changeurl();
    axios.defaults.baseURL = '';
    var temp = new FormData();
    for (var key in data) {
      temp.append(key, data[key])
    }
    return axios({
      method: 'post',
      url,
      data: temp,
      headers: {
        'Content-Type': undefined,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )

  },
  get(url, params) {
    // changeurl();
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
