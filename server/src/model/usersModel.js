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
  adduser (name,password,cb) {
    let sqlStr = "INSERT INTO users (username,password) VALUES (?,?);"
    connection.query(sqlStr, [name, password],(err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  }
}