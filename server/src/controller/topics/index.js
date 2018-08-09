import topicModel from '../../model/topicModel.js'
import {dateStr} from '../../utils/time';
const uuidv1 = require('uuid/v1');

export default {
  // 搜索
  search(req, res) {
    const params = req.body;
    const {PageIndex, PageSize} = params;

    switch(req.body.type){
      case 'All':
        topicModel.getAllTopics(params, (err, data) => {
          if (err) return res.Back(1, '获取话题失败')
          data.forEach(item => {
            item.dataValues.LastReplyTimeStr = item.LastReplyTime ? dateStr(item.LastReplyTime) : ''
            item.dataValues.CreatedAtStr = dateStr(item.createdAt)
          })
          let TopicList = data
          topicModel.getCounts(params, (err, Counts) => {
            if (err) return res.Back(1, '获取话题数量失败')
            return res.Back(0, '获取成功', {
              TopicList,
              PageIndex,
              PageSize,
              TotalCount: Counts.count,
              TotalPage: Math.ceil(Counts.count/PageSize)
            })
          })
        })
        break;

      case 'NoRevert':
        topicModel.getNoRevertTopics((err, data) => {
          if (err) return res.Back(1, '获取失败')
          data.forEach(item => {
            item.LastReplyTimeStr = item.LastReplyTime ? dateStr(item.LastReplyTime) : ''
          })
          return res.Back(0, '获取成功', {
            TopicList: data,
            PageIndex,
            PageSize
          })
        })
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

      topicModel.updateTopicHits(TopicId, (err, res) => {
        if(err) console.log(err)
      })

      let topicDetail = data[0];

      topicDetail.CreateTimeStr = dateStr(topicDetail.CreateTime)

      res.Back(0, '获取成功',{TopicDetail: data[0]})
    })
  }
}