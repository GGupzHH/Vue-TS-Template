import axios, { AxiosRequestConfig } from 'axios'
import { Message } from 'element-ui'

// baseUrl
axios.defaults.baseURL = process.env.VUE_APP_BASEURL ? process.env.VUE_APP_BASEURL : ''

// headers Content-type
axios.defaults.headers = {
  "Content-Type": 'application/json;charset=utf8'
}

// 请求 拦截器
axios.interceptors.request.use(
  config => {
    return config
  }, (error: any) => {
    Promise.reject(error)
  }
)

// 响应 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.error === 0) {
      return response.data
    } else {
      Message({
        message: 'error',
        type: 'error',
        duration: 3 * 1000
      })
      // return Promise.reject(new Error(response.message || 'error'))
    }
  }, error => {
    Promise.reject(error)
  }
)
