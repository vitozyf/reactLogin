import topicModel from '../../model/topicModel.js'
import config from '../../../config'

const uuidv1 = require('uuid/v1');

export default {
  search(req, res) {
    const params = req.body
    // console.log(req.body)
    switch(req.body.type){
      case 'All':
        topicModel.getAllTopics(params, (err, data) => {
          if (err) return res.json({Code: 1,Data: []})
          return res.json({Code: 0,Data:data})
        })
        break;
      case 'NoRevert':
        topicModel.getNoRevertTopics((err, data) => {
          if (err) return res.json({Code: 1,Data: []})
          return res.json({Code: 0,Data:data})
        })
        break;
    }
  },
  releaseTopic (req, res) {
    let newTopic = Object.assign({}, req.body, {
      UserID: req.session.UserInfo.UserID
    })
    // console.log(newTopic, req.session);
    
    topicModel.releaseTopic(newTopic, (err, data) => {
      if(err) return res.json({Code: 1, Msg: '发布失败'})
      res.json({Code: 0, Msg: '发布成功'})
    })
  },
  getTopicDetails (req, res) {
    const TopicId = req.body.TopicId
    topicModel.getTopicDetails(TopicId, (err, data) => {
      if(err) return res.json({Code: 1, Msg: '获取话题详情失败'})
      if(data.length === 0) return res.json({Code: 1, Msg: 'id错误'})
      topicModel.updateTopicHits(TopicId, (err, res) => {
        if(err) console.log(err)
      })
      res.json({Code: 0, Data: {TopicDetail: data[0]}})
    })
  }
}