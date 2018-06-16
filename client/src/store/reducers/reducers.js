import {removeCookie} from 'utils/cookie'
import config from 'utils/config'

export const user = (state = '', action) => {
  switch (action.type) {
    case 'SetUserInfo':
      // 设置登录状态失效时清除cookie
      if (typeof action.IsLogin !== 'undefined' && !action.IsLogin) {
        removeCookie(config.SessionIdName)
      }
      return Object.assign({}, state, {
        IsLogin: action.IsLogin,
        Name: action.Name
      })
    default:
      return state
  }
}

export const todos = (state = '', action) => {
  switch (action.type) {
    case 'ChangeTodos':
      return Object.assign({}, state, {test: !state.test})
    default:
      return state
  }
}

export const pageLoading = (state = false, action) => {
  switch (action.type) {
    case 'ChangeLoading':
      return action.pageLoading
    default:
      return state
  }
}
