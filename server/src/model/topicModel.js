import connection from './baseDb';

export default {
  // 获取所有话题数据
  getAllTopics (cb) {
    let sqlStr = 'select topics.* from topics left join users on topics.UserID = users.UserID where topics.IsDelete=0 order by topics.LastReplyTime DESC'
    connection.query(sqlStr, (err, res) => {
      // console.log(err)
      if(err) return cb(err)
      cb(null, res)
    })
  }
}