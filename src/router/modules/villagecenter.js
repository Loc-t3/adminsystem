/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/villageCenter',
    component: Layout,
    redirect: '/villageCenter',
    name: 'villageCenter',
    alwaysShow: true,
    meta: { title: '村庄中心'},
    children: [
        {
            path: 'village',
            component: () => import('@/views/village-center/village-manage/index'), // Parent router-view
            name: 'villageManage',
            meta: { title: '村庄管理'}
        },
        {
            path: 'user',
            component: () => import('@/views/village-center/user-manage/index'), // Parent router-view
            name: 'userManage',
            meta: { title: '村庄人员'}
        },
        {
            path: 'amalder',
            component: () => import('@/views/village-center/amalder-manage/index'), // Parent router-view
            name: 'amalderManage',
            meta: { title: '话事人管理'}
        }
    ]
}

export default nestedRouter
