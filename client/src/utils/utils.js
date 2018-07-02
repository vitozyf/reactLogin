import Config from './config'
import { getCookie } from './cookie'

export const IsLogin = () => {
  return !!getCookie(Config.SessionIdName);
};
