import query from './baseDb';

export default {
  // 获取所有话题数据
  getAllTopics (params, cb) {
    let {PageIndex, PageSize} = params;
    if (!PageIndex) {PageIndex = 1};
    if (!PageSize) {PageSize = 10};
    PageIndex = Number(PageIndex);
    PageSize = Number(PageSize);

    let Offset = (PageIndex - 1) * PageSize;

    let sqlStr = 'select topics.*, users.UserHeaderPortrait from topics left join users on topics.UserID = users.UserID where topics.IsDelete=0 order by topics.LastReplyTime DESC LIMIT ?, ?'
    query(sqlStr, [Offset, PageSize], (err, res) => {
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
  },
  // 获取话题详情
  getTopicDetails (topicId, cb) {
    let sql = 'select topics.*, users.UserName from topics left join users on topics.UserID=users.UserID where topics.TopicId=? and topics.IsDelete=0 ';
    query(sql, topicId, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  },
  // 更新点击量
  updateTopicHits (id, cb) {
    let sql = 'update topics set TopicHits=TopicHits+1 where topics.topicId=?';
    query(sql, id, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  }
}