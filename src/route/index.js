import Vue from 'vue'
import Router from 'vue-router'
// 引入 ./routes.js 的默认值
import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes
})
// router.beforeEach((to, from, next) => {
//     next()
    // if (to.path == from.path) {
    //     return;
    // } else {
    //     next()
    // }
// })
export default router