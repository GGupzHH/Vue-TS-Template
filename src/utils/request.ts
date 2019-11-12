import axios, { AxiosInstance } from 'axios'
import { Message } from 'element-ui'

// baseUrl
axios.defaults.baseURL = process.env.VUE_APP_BASEURL ? process.env.VUE_APP_BASEURL : ''

// headers Content-type
axios.defaults.headers = {
  'Content-Type': 'application/json;charset=utf8'
}


// 请求 拦截器
axios.interceptors.request.use(
  (config: any) => {
    return config
  }, (error: any) => {
    Promise.reject(error)
  }
)

// 响应 拦截器
axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      if (response.data.code !== 0) {
        return response.data
      } else {
        Message({
          message: response.data.msg,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return response.data
    } else {
      Message({
        message: 'Serve Error',
        type: 'error',
        duration: 3 * 1000
      })
      return Promise.reject(new Error('Serve Error'))
    }
  }, (error: any) => {
    Promise.reject(error)
  }
)

declare module 'Vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}
function formateURLOnlyGet(link: string, json: object) {
  let url = link
  const data = Object.entries(json)
  if (data.length) {
    url += url.indexOf('?') === -1 ? '?' : ''
    url += Object.entries(data)
      .map((item: any) => {
        return item[1].join('=')
      })
      .join('&')
  }
  return url
}
//  get url
export function httpGet(url: string, data: object) {
  return axios
    .get(formateURLOnlyGet(url, data))
    .then((res: any) => res.data)
    .catch((error: any) => error.response)
}
// post
export function httpPost(url: string, data: object) {
  return axios
    .post(url, data)
    .then((res: any) => res.data)
    .catch((error: any) => error.response)
}
// put
export function httpPut(url: string, data: object) {
  return axios
    .put(url, data)
    .then((res: any) => res.data)
    .catch((error: any) => error.response)
}
// delete
export function httpDelete(url: string, data: object) {
  return axios
    .delete(url, data)
    .then((res: any) => res.data)
    .catch((error: any) => error.response)
}
