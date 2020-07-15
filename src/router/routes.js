import login from '@/views/login/login'
import aboutUs from '@/views/aboutUs/aboutUs'
import contact from '@/views/contact/contact'
// import news from '@/views/news/news'
import anli from '@/views/anli/case'
import case1 from '@/views/anli/caseChild/case1'
import caseDetail from '@/views/anli/caseChild/caseDetail'
import case2 from '@/views/anli/caseChild/case2'
import newslist from '@/views/new/newslist'
import newslist1 from '@/views/new/newslist1'
import newinfos from '@/views/new/newinfos'
import case3 from '@/views/anli/caseChild/case3'
import case4 from '@/views/anli/caseChild/case4'
import case5 from '@/views/anli/caseChild/case5'
import case6 from '@/views/anli/caseChild/case6'

export default [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index'),
        meta: {header_type: 1}
    },
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {header_type: 1}
    },
    {
        path: '/about',
        name: 'aboutUs',
        component: aboutUs,
        meta: {header_type: 2,need_login:true},
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
    {
        path: '/case',
        name: 'case',
        component: anli,
        redirect: '/case/case1',
        children: [
            {
                path: '/case/case1',
                component: case1,
            },
            {
                path: '/case/case2',
                component: case2,
            },
            {
                path: '/case/case3',
                component: case3,
            },
            {
                path: '/case/case4',
                component: case4,
            },
            {
                path: '/case/case5',
                component: case5,
            },
            {
                path: '/case/case6',
                component: case6,
            },
            {
                path: '/case/caseDetail',
                component: caseDetail,
            }
        ]
    },
    {
        path: '/newslist1',
        name: newslist,
        component: newslist,
        children: [
            {
                path: '',
                name: newslist1,
                component: newslist1,
            },
            {
                path: '/newslist2',
                name: newslist1,
                component: newslist1
            },
            {
                path: '/newslist3',
                name: newslist1,
                component: newslist1
            },
            {
                path: '/newslist4',
                name: newslist1,
                component: newslist1
            },
            {
                path: '/newslist1/newinfos',
                name: newinfos,
                component: newinfos
            }
        ]
    }

]
