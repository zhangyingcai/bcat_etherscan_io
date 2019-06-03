import Vue from 'vue'
import VueRouter  from 'vue-router'
import token from './token'

Vue.use(VueRouter)

const constantRoutes = [
  // token,
  {
    path: '/',
    component: () => import('@/views/token/index')
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash', // 默认 Hash
  scrollBehavior: (to, from, savedPosition)=>{
    if (savedPosition) {
      return savedPosition
    } else {
      return { x:0, y:0 }
    }
  },
  // 切换到新路由时，想要滚动到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
  // 只有在 history.pushState 的浏览器中可用
  routes: constantRoutes
})

const router = createRouter()

export default router