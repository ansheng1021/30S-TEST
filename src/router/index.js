import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import ls from "../utils/localStorage";


Vue.use(Router)
//前置路由守卫

const router =  new Router({
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

router.beforeEach((to, from, next) => {
    var userInfo = ls.getItem("userInfo")
    // 判断路由组件中的某个属性
    if (to.meta.need_login === true) {
        if (userInfo) {
            return next();
        } else {
            return next({name: 'login'});
        }
    }

    if (to.meta.requiresGuest === true) {
        if (userInfo) {
            return next({name: 'business'});
        } else {
            return next();
        }
    }

    next();
});
export default router;