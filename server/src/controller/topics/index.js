import topicModel from '../../model/topicModel.js'
import config from '../../../config'
import {dateStr} from '../../utils/time';
const uuidv1 = require('uuid/v1');

export default {
  // 搜索
  search(req, res) {
    const params = req.body
    switch(req.body.type){
      case 'All':
        topicModel.getAllTopics(params, (err, data) => {
          if (err) return res.json({Code: 1, Message: '获取话题失败'})

          data.forEach(item => {
            item.LastReplyTimeStr = dateStr(item.LastReplyTime)
          })

          let TopicList = data
          const {PageIndex, PageSize} = params;

          topicModel.getCounts(params, (err, Counts) => {
            if (err) return res.json({Code: 1,Data: [], Message: '获取话题数量失败'})
            // return res.json({
            //   Code: 0,
            //   Data: {
            //     TopicList, 
            //     PageIndex, 
            //     PageSize, 
            //     TotalCount: Counts.count, 
            //     TotalPage: Math.ceil(Counts.count/PageSize)
            //   }
            // })
            return res.Fail(0, '获取成功', {
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
          if (err) return res.json({Code: 1,Data: []})
          data.forEach(item => {
            item.LastReplyTimeStr = dateStr(item.LastReplyTime)
          })
          return res.json({Code: 0,Data:{TopicList: data}})
        })
        break;
    }
  },
  releaseTopic (req, res) {
    let newTopic = Object.assign({}, req.body, {
      UserID: req.session.UserInfo.UserID
    })
    
    topicModel.releaseTopic(newTopic, (err, data) => {
      console.log('00', err, data)
      if(err) return res.json({Code: 1, Msg: '发布失败'})
      res.json({Code: 0, Data: {Msg: '发布成功'}})
    })
  },
  // 获取详情
  getTopicDetails (req, res) {
    const TopicId = req.body.TopicId

    topicModel.getTopicDetails(TopicId, (err, data) => {

      if(err) return res.json({Code: 1, Msg: '获取话题详情失败'})

      if(data.length === 0) return res.json({Code: 1, Msg: 'id错误'})

      topicModel.updateTopicHits(TopicId, (err, res) => {
        if(err) console.log(err)
      })

      let topicDetail = data[0];

      topicDetail.CreateTimeStr = dateStr(topicDetail.CreateTime)

      res.json({Code: 0, Data: {TopicDetail: data[0]}})
    })
  }
}