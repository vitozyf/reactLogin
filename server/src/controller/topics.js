import topicModel from 'model/topicModel.js'

function getTopics (req, res, where) {
  const params = req.body;
  const {PageIndex, PageSize} = params;
  topicModel.getAllTopics(params, (err, data) => {
    if (err) return res.Back(1, '获取话题失败')
    let TopicList = data.rows
    return res.Back(0, '获取成功', {
      TopicList,
      PageIndex,
      PageSize,
      TotalCount: data.count,
      TotalPage: Math.ceil(data.count / PageSize)
    })
  }, where)
}

export default {
  // 搜索
  search (req, res) {
    switch(req.body.type){
      case 'All':
        getTopics(req, res)
        break;
      case 'Share':
        getTopics(req, res, {Plate: 0})
        break;
      case 'Ask':
        getTopics(req, res, {Plate: 1})
        break;
      case 'Test':
        getTopics(req, res, {Plate: 2})
        break;
      case 'NoRevert':
        getTopics(req, res, {TopicReplies: 0})
        break;
      case 'Essential':
        getTopics(req, res, {TopicLabel: 1})
        break;
      default:
        return res.Back('1', '参数错误');
    }
  },
  releaseTopic (req, res) {
    let newTopic = Object.assign({}, req.body, {
      UserId: req.session.UserId
    })
    
    topicModel.releaseTopic(newTopic, (err, data) => {
      if(err) return res.Back(1, '发布失败')
      res.Back(0, '发布成功', true)
    })
  },
  // 获取详情
  getTopicDetails (req, res) {
    const TopicId = req.body.TopicId

    topicModel.getTopicDetails(TopicId, (err, data) => {
      if(err) return res.Back(1, '获取话题详情失败')
      if(data.length === 0) return res.Back(1, 'id错误')
      let topicDetail = data;
      if (TopicId) {
        topicModel.updateTopicHits(TopicId, topicDetail, (err, res) => {
          if(err) throw err;
        })
      }
      res.Back(0, '获取成功',{TopicDetail: topicDetail})
    })
  },
  // 评论话题
  commentTopic (req, res) {
    const {TopicId, CommentContent} = req.body
    const newComment = Object.assign({}, {TopicId, CommentContent}, {
      UserId: req.session.UserInfo.Id
    })
    topicModel.commentTopic(newComment, (err, data) => {
      if(err) return res.Back(1, '评论失败')
      res.Back(0, '评论成功', true)
    })
  },
  // 删除评论
  deleteComment (req, res) {
    const {Id} = req.body;
    const UserId = req.session.UserId;
    topicModel.deleteComment(Id, UserId, (err, data) => {
      if(err || data === 0) return res.Back(1, '删除失败')
      res.Back(0, '删除成功', true)
    })
  }
}