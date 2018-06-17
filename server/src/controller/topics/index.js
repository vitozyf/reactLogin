import topicModel from '../../model/topicModel.js'
import config from '../../../config'

const uuidv1 = require('uuid/v1');

export default {
  search(req, res)  {
    topicModel.getAllTopics((err, data) => {
      if (err) {
        res.json('读取数据失败')
      } else {
        res.json({
          Code: 0,
          data:data
         })
      }
    })
  }
}