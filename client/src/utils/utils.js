import Config from './config'
import { getCookie } from './cookie'

const IsLogin = !!getCookie(Config.SessionIdName);

export {
  IsLogin
}