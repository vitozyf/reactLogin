import connection from './baseDb';

export default {
  // 获取所有用户数据
  getAllUsers (cb) {
    let sqlStr = 'select * from users where IsDelete=0 order by UserID'
    connection.query(sqlStr, (err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  },
  //注册用户
  signInUser (user,cb) {
    let sqlStr = "INSERT INTO users set ?;"
    connection.query(sqlStr, user,(err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  },
  // 登录
  login (user, cb) {
    let sqlStr = "select * from users where username=? and password=?"
    connection.query(sqlStr, [user.UserName, user.PassWord], (err, res) => {
      if (err) return cb(err);
      cb(null,res)
    })
  },
  // 查找用户（按用户名）
  searchUser(UserName, cb) {
    let sqlStr = "select * from users where username=?"
    connection.query(sqlStr, UserName, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  }
}