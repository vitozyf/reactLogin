import connection from './baseDb';

export default {
  // 获取所有用户数据
  getAllTopics (cb) {
    let sqlStr = 'select * from topics where IsDelete=0 order by LastReplyTime DESC'
    connection.query(sqlStr, (err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  }
}