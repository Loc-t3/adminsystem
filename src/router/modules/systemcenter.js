/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/systemCenter',
    component: Layout,
    redirect: '/systemCenter',
    name: 'systemCenter',
    alwaysShow: true,
    meta: { title: '系统中心'},
    children: [
        {
            path: 'affiche',
            component: () => import('@/views/system-center/affiche-manage/index'), // Parent router-view
            name: 'afficheManager',
            meta: { title: '公告管理'}
        },
        {
            path: 'sensitive',
            component: () => import('@/views/system-center/sensitive-manage/index'), // Parent router-view
            name: 'sensitiveManage',
            meta: { title: '敏感词管理'}
        },
        {
            path: 'account',
            component: () => import('@/views/system-center/operate-manage/index'), // Parent router-view
            name: 'perateManage',
            meta: { title: '操作日志'}
        }
    ]
}

export default nestedRouter
