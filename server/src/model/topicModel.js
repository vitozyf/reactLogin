import query from './baseDb';

export default {
  // 获取所有话题数据
  getAllTopics (cb) {
    let sqlStr = 'select topics.*, users.UserHeaderPortrait from topics left join users on topics.UserID = users.UserID where topics.IsDelete=0 order by topics.LastReplyTime DESC'
    query(sqlStr, (err, res) => {
      // console.log(err)
      if(err) return cb(err)
      cb(null, res)
    })
  },
  // 发布新话题
  releaseTopic (topic, cb) {
    let sql = 'INSERT INTO topics (TopicName, TopicContent, UserID, TopicID) values (?,?,?,?)';
    query(sql, [topic.TopicName, topic.TopicContent, topic.UserID, topic.TopicID], (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  }
}