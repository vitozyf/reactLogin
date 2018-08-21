import {IsLogin} from '~utils/utils'
export const user = (state = '', action) => {
  switch (action.type) {
    case 'SetUserInfo':
      // 设置登录状态失效时清除cookie
      let UserInfo
      if (action.UserInfo) {
         UserInfo = action.UserInfo
      }
      if (IsLogin()) {
        return Object.assign({}, state, {
          IsLogin: true,
          ...UserInfo
        })
      } else {
        return Object.assign({}, state, {
          IsLogin: false,
          UserName: '',
          Id: ''
        })
      }
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

export const showSendBtn = (state = true, action) => {
  switch (action.type) {
    case 'ChangeSendState':
      return action.State
    default:
      return state
  }
}

export const router = (state = {}, action = {router: {}}) => {
  switch (action.type) {
    case 'ChangeRouter':
      return Object.assign({}, state, action.router)
    default:
      return state
  }
}

export const topicDetail = (state = {}, action = {topicDetail: {}}) => {
  switch (action.type) {
    case 'ChangeTopicDetail':
      return Object.assign({}, state, action.topicDetail)
    default:
      return state
  }
}
