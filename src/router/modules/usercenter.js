/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/userCenter',
    component: Layout,
    redirect: '/userCenter',
    name: 'userCenter',
    alwaysShow: true,
    meta: { title: '用户中心'},
    children: [
        {
            path: 'user',
            component: () => import('@/views/user-center/user-manage/index'), // Parent router-view
            name: 'userManager',
            meta: { title: '用户管理'}
        },
        {
            path: 'account',
            component: () => import('@/views/user-center/account-generator/index'), // Parent router-view
            name: 'accountGenerator',
            meta: { title: '账号生成'}
        },
        {
            path: 'authority',
            component: () => import('@/views/user-center/authority-manager/index'), // Parent router-view
            name: 'authorityManager',
            meta: { title: '权限管理'}
        }
    ]
}

export default nestedRouter
