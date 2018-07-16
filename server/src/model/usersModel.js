import {query} from './baseDb';

export default {
  //注册用户
  signInUser (user,cb) {
    let sqlStr = "INSERT INTO users set ?;"
    query(sqlStr, user,(err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  },
  // 登录
  login (user, cb) {
    let sqlStr = "select * from users where username=? and password=?"
    query(sqlStr, [user.UserName, user.PassWord], (err, res) => {
      if (err) return cb(err);
      cb(null,res)
    })
  },
  // 查找用户（按用户名）
  searchUser(UserName, cb) {
    let sqlStr = "select * from users where username=?"
    query(sqlStr, UserName, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  },
  // 获取用户信息
  getUserInfo(id, cb){
    let sql = 'select Email, Phone, UserHeaderPortrait, UserID, UserName from users where UserID=?'
    query(sql, id, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  }
}