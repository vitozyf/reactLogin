import http from '~utils/http';

const config = {
  getUserInfo: '/getUserInfo'
}

let createdAuth = (store) => {
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

export default createdAuth;