import Config from './config'
import { getCookie } from './cookie'

const IsLogin = () => {
  if (getCookie(Config.SessionIdName)) {
    return true
  } else {
    return false
  }
}