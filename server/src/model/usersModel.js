import {
  LoggerErr
} from 'Logger';
import {
  Users
} from './model-sequelize';

export default {
  // 登录
  login(user, cb) {
    Users.findOne({
      where: {
        UserName: user.UserName,
        PassWord: user.PassWord,
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      LoggerErr.error(err)
      cb(err);
    })
  },
  // 注册用户
  signin(userInfo, cb) {
    Users.findCreateFind({
      defaults: userInfo,
      where: {
        UserName: userInfo.UserName
      }
    }).then(res => {
      cb(null, res[1])
    }).catch(err => {
      LoggerErr.error(err)
      cb(err)
    })
  },
  // 获取用户信息
  getUserInfo(id, cb) {
    Users.findAll({
      attributes: {
        exclude: ['PassWord', 'deletedAt']
      },
      where: {
        Id: id
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      LoggerErr.error(err)
      cb(err)
    })
  }
}