import {IsLogin} from '../utils/utils'
// 统一声明默认State
export default {
  user: {
    IsLogin: IsLogin(),
    Name: '',
    UserInfo: {}
  },
  router: {},
  pageLoading: false,
  showSendBtn: true
};