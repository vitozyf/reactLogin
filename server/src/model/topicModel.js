import query from './baseDb';

export default {
  // 获取所有话题数据
  getAllTopics (cb) {
    let sqlStr = 'select topics.*, users.UserHeaderPortrait from topics left join users on topics.UserID = users.UserID where topics.IsDelete=0 order by topics.LastReplyTime DESC'
    query(sqlStr, (err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  },
  // 获取未回复话题
  getNoRevertTopics (cb) {
    let sqlStr = 'select * from topics  where topics.IsDelete=0 and TopicReplies=0 order by CreateTime DESC'
    query(sqlStr, (err, res) => {
      if(err) return cb(err)
      cb(null, res)
    })
  },
  // 发布新话题
  releaseTopic (topic, cb) {
    let sql = 'INSERT INTO topics set ?';
    query(sql, topic, (err, res) => {
      // console.log(err, res)
      if(err) return cb(err);
      cb(null, res)
    })
  }
}