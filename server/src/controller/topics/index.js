import topicModel from '../../model/topicModel.js'
import {dateStr} from '../../utils/time';

function getTopics(req, res, where) {
  const params = req.body;
  const {PageIndex, PageSize} = params;
  topicModel.getAllTopics(params, (err, data) => {
    console.log(err)
    if (err) return res.Back(1, '获取话题失败')
    data.rows.forEach(item => {
      item.dataValues.LastReplyTimeStr = item.LastReplyTime ? dateStr(item.LastReplyTime) : ''
      item.dataValues.CreatedAtStr = dateStr(item.createdAt)
    })
    let TopicList = data.rows
    return res.Back(0, '获取成功', {
      TopicList,
      PageIndex,
      PageSize,
      TotalCount: data.count,
      TotalPage: Math.ceil(data.count / PageSize)
    })
    // topicModel.getCounts(params, (error, Counts) => {
    //   if (error) return res.Back(1, '获取话题数量失败')
    //   return res.Back(0, '获取成功', {
    //     TopicList,
    //     PageIndex,
    //     PageSize,
    //     TotalCount: Counts.count,
    //     TotalPage: Math.ceil(Counts.count/PageSize)
    //   })
    // }, where)
  }, where)
}

export default {
  // 搜索
  search(req, res) {
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
      
      let topicDetail = data[0];
      
      topicDetail.dataValues.CreateTimeStr = dateStr(topicDetail.createdAt)
      topicDetail.dataValues.UpdatedTimeStr = dateStr(topicDetail.updatedAt)
      topicModel.updateTopicHits(TopicId, topicDetail, (err, res) => {
        if(err) console.log(err)
      })

      res.Back(0, '获取成功',{TopicDetail: topicDetail})
    })
  }
}