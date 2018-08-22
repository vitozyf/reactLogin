import http from '~utils/http';

const config = {
  getUserInfo: '/getUserInfo'
}

let setUserInfo = (store) => {
  let user = store.getState().user
  if (!user.UserName) {
    http.$post(config.getUserInfo).then(data => {
      data && store.dispatch({
        type: 'SetUserInfo',
        UserInfo: data
      })
    })
  } else {
    store.dispatch({
      type: 'SetUserInfo',
      IsLogin: false,
      Name: '',
      UserInfo: {}
    })
  }
}

// app加载前
let createdAuth = (store) => {
  // 设置用户信息
  setUserInfo(store)
}

export default createdAuth;