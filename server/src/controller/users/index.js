import usersMedel from '../../model/usersModel.js'
import querystring from 'querystring'
import md5 from 'blueimp-md5';
import config from '../../../config'

export default {
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
      if(err || data.length !== 1) return res.json({Code: 1, Msg: '登录失败'});

      // 保存登录状态和数据到session
      req.session.IsLogin = true;
      req.session.UserInfo = data[0];
      res.json({'Code': 0, 'Msg': '登录成功'});
    })
  },
  signin (req, res) {
    // 缺少注册验证
    let userInfo = req.body
    userInfo.PassWord =  md5(userInfo.PassWord, config.passwordKey)
    usersMedel.searchUser(userInfo.UserName, (err, data) => {
      if (err) res.json({'Code': 1, 'Msg': '注册失败'})
      if (data.length === 1) return res.json({'Code': 0, 'Msg': '用户名已存在'});
      usersMedel.signInUser(userInfo, (err, data) => {
        if (err) return res.json({'Code': 1, 'Msg': '注册失败'})
        res.json({'Code': 0, 'Msg': '注册成功'});
      })
    })
  }
}