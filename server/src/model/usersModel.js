import connection from './baseDb';

export default {
  // 获取所有用户数据
  getAllUsers (cb) {
    let sqlStr = 'select * from users where IsDelete=0 order by id'
    connection.query(sqlStr, (err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  }
}