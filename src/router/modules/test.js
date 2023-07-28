/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/Hel',
  component: Layout,
  redirect: '/Hel',
  name: 'Hel',
  alwaysShow: true,
  meta: { title: '主页'},
  children: [
    {
      path: 'about',
      component: () => import('@/views/test/About'), // Parent router-view
      name: 'About',
      meta: { title: '关于'}
    }
  ]
}

export default nestedRouter
