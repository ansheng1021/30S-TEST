import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        activeIndex:"1"   //导航栏下标
    },
    mutations: {
        UPDATE_ACTIVE_INDEX(state,index){    //修改导航栏下标
            state.activeIndex = index
        }
    },
    actions: {
        changeActiveIndex({commit},index){
            commit("UPDATE_ACTIVE_INDEX",index)
        }
    },
    modules: {}
})
