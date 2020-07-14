import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'


Vue.use(Router)

export default new Router({
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    // 跳转返回顶部
    scrollBehavior(to, from, saveTop) {
        if (saveTop) {
            return saveTop;
        } else {
            return {x: 0, y: 0}
        }
    },

})
