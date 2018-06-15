import Cookies from 'js-cookie';

export const setCookie = (name, value, option) => {
  return Cookies.set(name, value, option)
}

export const getCookie = (name, option) => {
  return Cookies.get(name, option)
}

export const removeCookie = (name, option) => {
  return Cookies.remove(name, option)
}
