import axios from 'axios';
import qs from 'qs';
// axios 配置
axios.defaults.timeout = 20000; // 响应时长
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
if (process && process.env && process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
    // axios.defaults.baseURL = 'api'; // 前端代理
    axios.defaults.baseURL = 'http://172.19.62.34:8085';
}
else {
    // 生产路径
    axios.defaults.baseURL = '/bctf/';
}
axios.interceptors.request.use( // 请求拦截
    config => {
        if (config.method  === 'post') { // 处理post数据
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);
axios.interceptors.response.use( // 响应拦截 处理异常抛出错误
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);
export default axios;
