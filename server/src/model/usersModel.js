import {query} from './baseDb';
import {Users} from './model-sequelize'

export default {
  //注册用户
  signInUser (user,cb) {
    Users.create(user).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
  },
  // 登录
  login (user, cb) {
    Users.findAll({
      attributes: ['UserName', 'PassWord', 'UserID'],
      where: {
        UserName: user.UserName,
        PassWord: user.PassWord, 
        IsDelete: 0
      }
    }).then(res => {
      cb(null,res)
    }).catch(err => {
      return cb(err);
    })
  },
  // 查找用户（按用户名）
  searchUser(UserName, cb) {
    Users.findAll({
      attributes: ['UserName'],
      where: {
        UserName: UserName,
        IsDelete: 0
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
  },
  // 获取用户信息
  getUserInfo(id, cb){
    Users.findAll({
      attributes: { 
        exclude: ['IsDelete']
      },
      where: {
        UserID: id,
        IsDelete: 0
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
  }
}