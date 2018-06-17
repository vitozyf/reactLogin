import topicModel from '../../model/topicModel.js'
import config from '../../../config'

const uuidv1 = require('uuid/v1');

export default {
  search(req, res)  {
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
  }
}