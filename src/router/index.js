import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './modules/test'
import UserCenter from './modules/usercenter'
import ContentCenter from './modules/contentcenter'
import VillageCenter from './modules/villagecenter'
import SystemCenter from './modules/systemcenter'


Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
  path: '/redirect', component: Layout, hidden: true, children: [{
    path: '/redirect/:path(.*)', component: () => import('@/views/redirect/index')
  }]
},
  {
    path: '/404', component: () => import('@/views/error-page/404'), hidden: true
  }, {
    path: '/401', component: () => import('@/views/error-page/401'), hidden: true
  },
  {
    path: '/', component: Layout, redirect: '/hel', children: [{
      path: 'hel',
      name: 'hel',
      component: () => import('@/views/dashboard/index')
    }]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true },
  UserCenter,
  ContentCenter,
  VillageCenter,
  SystemCenter,
  HelloWorld,

]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }), routes: constantRoutes
})


const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
