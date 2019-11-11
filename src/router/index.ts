import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 登陆页面路由 name 当系统未登录跳转到登录页  同步定义登录页路由
const LOGIN_PAGE_NAME = 'login'

// 前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  next()
})

// 后置守卫
// router.afterEach(() => {})
export default router
