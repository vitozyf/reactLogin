import topicModel from '../../model/topicModel.js'
import config from '../../../config'

const uuidv1 = require('uuid/v1');

export default {
  search(req, res) {
    topicModel.getAllTopics((err, data) => {
      if (err) {
        res.json({
          Code: 1,
          Data: []
        })
      } else {
        res.json({
          Code: 0,
          Data:data
         })
      }
    })
  },
  releaseTopic (req, res) {
    let newTopic = Object.assign({}, req.body, {
      UserID: req.session.UserInfo.UserID,
      TopicID: uuidv1()
    })
    console.log(newTopic, req.session);
    
    topicModel.releaseTopic(newTopic, (err, data) => {
      if(err) return res.json({Code: 1, Msg: '发布失败'})
      res.json({Code: 0, Msg: '发布成功'})
    })
  }
}