import axios from 'axios'
import { Message } from 'element-ui'

// baseUrl
axios.defaults.baseURL = process.env.VUE_APP_BASEURL ? process.env.VUE_APP_BASEURL : ''

// headers Content-type
axios.defaults.headers = {
  "Content-Type": 'application/json;charset=utf8'
}