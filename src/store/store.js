import Vue from 'vue'
import vuex from 'vuex'
import cookie from '../utils/auth'
Vue.use(vuex);
export default new vuex.Store({
    state: {
        token: localStorage.getItem("token"),
        test: '111',
        indexspan: localStorage.getItem('indexspan') || 0,
        userInfo:localStorage.getItem("userInfo"),
    },
    mutations: {
        Company: (state, data) => {
            state.test = data;
        },
        setindex(state, value) {
            localStorage.setItem('indexspan', value)
            state.indexspan = value
        },
        setToken(state,value){
            cookie.setToken('userInfo',value)
            state.userInfo = value
        }
    },
    actions:{
        Login({commit},usreInfo){
            commit()
        }
    }
})

