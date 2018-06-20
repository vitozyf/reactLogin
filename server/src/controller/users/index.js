import usersMedel from '../../model/usersModel.js'
import querystring from 'querystring'
import md5 from 'blueimp-md5';
import config from '../../../config'

const uuidv1 = require('uuid/v1');

export default {
  test (req, res) {
    res.json({'Code': 0,'Data': 'test'})
  },
  showIndex(req, res)  {
    usersMedel.getAllUsers((err, data) => {
      if (err) {
        res.json('读取数据失败')
      } else {
        res.json({
          code: 0,
          data:data
         })
      }
    })
  },
  //登录
  login(req, res) {
    let loginInfo = req.body;
    loginInfo.PassWord =  md5(loginInfo.PassWord, config.passwordKey);
    usersMedel.login(loginInfo, (err, data) => {

      if(err || data.length !== 1) return res.json({Code: 1, Msg: '登录失败,请检查账号密码是否正确', Err: err});
      // 保存登录状态和数据到session
      req.session.IsLogin = true;
      req.session.UserInfo = data[0];
      
      res.json({'Code': 0, 'Msg': '登录成功'});
    })
  },
  signin (req, res) {
    let userInfo = req.body
    userInfo.PassWord =  md5(userInfo.PassWord, config.passwordKey)
    userInfo.UserId = uuidv1()

    usersMedel.searchUser(userInfo.UserName, (err, data) => {
      if (err || !data) res.json({'Code': 1, 'Msg': '注册失败'})
      if (data.length === 1) return res.json({'Code': 0, 'Msg': '用户名已存在'});
      usersMedel.signInUser(userInfo, (err, data) => {
        if (err) return res.json({'Code': 1, 'Msg': '注册失败'})
        res.json({'Code': 0, 'Msg': '注册成功'});
      })
    })
  },
  signout (req, res) {
    req.session.destroy();
    res.json({
      'Code': 0,
      'Msg': '注销成功'
    })
  },
  getUserInfo (req, res) {
    if (!req.session || !req.session.UserInfo) return res.json({Code: 1, Msg: '用户身份失效'})
    usersMedel.getUserInfo(req.session.UserInfo.UserID, (err, data) => {
      if(err || data.length !== 1) return res.json({Code: 1, Msg: '获取失败'})
      res.json({
        Code: 0, 
        data: data[0]
      })
    })
  }
}