import usersModel from 'model/usersModel.js'
import config from 'config'
import md5 from 'blueimp-md5';

const ISPRODUCTION = process.env.NODE_ENV === 'production'
const PASSWORDKEY = config[ISPRODUCTION ? 'Production' : 'Dev'].passwordKey
const uuidv1 = require('uuid/v1');

export default {
  //登录
  login(req, res) {
    let loginInfo = req.body;
    loginInfo.PassWord = md5(loginInfo.PassWord, PASSWORDKEY);
    usersModel.login(loginInfo, (err, data) => {
      if (err) return res.Back(1, '登录失败,请检查账号密码是否正确', err);
      // 保存登录状态和数据到session
      req.session.IsLogin = true;
      req.session.UserInfo = data;
      req.session.Ip = req.ip;
      res.Back(0, '登录成功', true)
    })
  },
  // 注册
  signin(req, res) {
    let userInfo = req.body
    userInfo.PassWord = md5(userInfo.PassWord, PASSWORDKEY)
    userInfo.Id = uuidv1()
    usersModel.signin(userInfo, (err, data) => {
      if (err) return res.Back(120, '注册失败')
      if (!data) return res.Back(1, '用户名已存在')
      res.Back(0, '注册成功', true)
    })
  },
  // 登出
  signout(req, res) {
    // 销毁session
    req.session.destroy((err) => {
      if (err) return res.Back(1, '注销失败');
      // 清除cookie
      res.clearCookie(config.SessionId);
      res.Back(0, '注销成功', true)
    });
  },
  // 获取用户信息
  getUserInfo(req, res) {
    if (!req.session || !req.session.UserInfo) return res.Back(1, '用户身份失效');
    usersModel.getUserInfo(req.session.UserInfo.Id, (err, data) => {
      if (err || data.length !== 1) return res.Back(120, '获取失败', err);
      res.Back(0, '获取成功', {
        UserInfo: data[0]
      });
    })
  }
}