import Vue from 'vue'
import App from './App.vue'
import router from './router'
import EventBus from 'vue-bus-ts'
import { Button } from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import './style/encapsulation.less'
Vue.config.productionTip = false
Vue.use(EventBus)
Vue.component(Button.name, Button)
const bus = new EventBus.Bus()
new Vue({
  router,
  bus,
  render: (h) => h(App),
}).$mount('#app')
