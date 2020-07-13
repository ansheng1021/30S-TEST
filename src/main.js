import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './route'

import ElementUI from 'element-ui';
import api from './request/api';
import axios from './request/http';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper.scss';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios;
Vue.prototype.api = api;
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
