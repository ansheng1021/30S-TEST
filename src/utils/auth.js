import Cookies from 'js-cookie'


export default {
    setItem(key, value) {
        return Cookies.set(key, value)
    },
    getItem(key) {
        return Cookies.get(key)
    },
    removeItem(key){
        return Cookies.remove(key)
    }
}
