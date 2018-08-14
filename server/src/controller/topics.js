import topicModel from 'model/topicModel.js'
import {Logger} from 'Logger';

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
        getTopics(req, res, {Plate: 1})
        break;
      case 'Ask':
        getTopics(req, res, {Plate: 2})
        break;
      case 'Test':
        getTopics(req, res, {Plate: 3})
        break;
      case 'NoRevert':
        getTopics(req, res, {TopicReplies: 0})
        break;
      case 'Essential':
        getTopics(req, res, {TopicLabel: 1})
        break;
      default:
        return res.Back('1', '参数错误')
        break;
    }
  },
  releaseTopic (req, res) {
    let newTopic = Object.assign({}, req.body, {
      UserID: req.session.UserInfo.UserID
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
      UserID: req.session.UserInfo.UserID
    })
    topicModel.commentTopic(newComment, (err, data) => {
      if(err) return res.Back(1, '评论失败')
      res.Back(0, '评论成功', true)
    })
  }
}