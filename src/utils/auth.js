import Cookies from 'js-cookie'

const TokenKey = "userInfo"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(key,token) {
  return Cookies.set(key,token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
