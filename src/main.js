import Vue from 'vue'
import App from './App.vue'
// import ElementUI  from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // 引入 element 样式

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import router from './router/index'

Vue.config.productionTip = false

// Vue.use(ElementUI)
Vue.use(Antd)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
