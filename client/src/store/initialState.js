import {IsLogin} from '../utils/utils'
// 统一声明默认State
export default {
  user: {
    IsLogin: IsLogin,
    Name: '',
    UserInfo: {}
  },
  todos: {
    test: false,
    test2: 'abc'
  },
  pageLoading: false
};