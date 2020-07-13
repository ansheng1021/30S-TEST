export default [
    {
        path: '/',
        name: 'Home',
        menu:'is_home',
        menu_index:0,
        component: () => import('@/views/Home')
    },
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login')
    }
]