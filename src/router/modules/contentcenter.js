/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
    path: '/contentCenter',
    component: Layout,
    redirect: '/contentCenter',
    name: 'contentCenter',
    alwaysShow: true,
    meta: { title: '内容中心'},
    children: [
        {
            path: 'content',
            component: () => import('@/views/content-center/content-manage/index'), // Parent router-view
            name: 'contentManager',
            meta: { title: '内容管理'}
        },
        {
            path: 'filter',
            component: () => import('@/views/content-center/post-audit/index'), // Parent router-view
            name: 'postAudit',
            meta: { title: '发帖审核'}
        },
        {
            path: 'account',
            component: () => import('@/views/content-center/filter-configure/index'), // Parent router-view
            name: 'filterConfigure',
            meta: { title: '过滤配置'}
        }
    ]
}

export default nestedRouter
