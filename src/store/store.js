import Vue from 'vue'
import vuex from 'vuex'
import cookie from '../utils/auth'
import ls from  '../utils/localStorage'
Vue.use(vuex);
export default new vuex.Store({
    state: {
        token: ls.getItem("token"),
        test: '111',
        indexspan: ls.getItem('indexspan') || 0,
        userInfo:ls.getItem("userInfo"),
    },
    mutations: {
        Company: (state, data) => {
            state.test = data;
        },
        setindex(state, value) {
            ls.setItem('indexspan', value)
            state.indexspan = value
        },
        LOGIN(state,value){
            cookie.setItem("userInfo",value)
            ls.setItem("userInfo",value)
            state.userInfo = value
        },
        LOGOUT(state){
            cookie.removeItem('userInfo')
            ls.removeItem('userInfo')
            state.userInfo = false;
        }
    },
    actions:{
        Login({commit},userInfo){
            commit("LOGIN",userInfo)
        },
        Logout({commit}){
            commit("LOGOUT")
        }
    }
})

