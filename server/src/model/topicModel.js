import {Topics, Users, Comments} from './model-sequelize';
import {paging} from 'utils/utils';
import Sequelize from 'sequelize';
import {Logger} from 'Logger';


// Topics.hasOne(Users);
// Topics.belongsTo(Users);
// Users.belongsTo(Topics, 
//   // {targetKey: 'UserId'}
//   {foreignKey: 'UserId'}
// );

/**
 * 话题查询
 * @param {Object} pg 
 * @param {Function} cb 
 * @param {Object} where 
 */
function getTopics (pg, cb, where) {
  let query = {
    IsDelete: 0
  }
  if (where) {
    query = Object.assign({}, query, where)
  }

  let findQuery = {
    attributes: {
      exclude: ['IsDelete']
    },
    where: query,
    // include: [Users],
    order: [
      ['updatedAt', 'DESC']
    ]
  }

  if (pg) {
    findQuery = Object.assign({}, findQuery, {
      offset: pg.offset,
      limit: pg.limit
    })
  }
  Topics.findAndCountAll(findQuery).then(res => {
    cb(null, res)
  }).catch(err => {
    Logger.error(err)
    cb(err)
  })
  
}
export default {
  // 获取所有话题数据
  getAllTopics (params, cb, where) {
    const {PageIndex, PageSize} = params;
    const pg = paging(PageIndex, PageSize)
    getTopics(pg, cb, where)
  },
  // 获取未回复话题
  getNoRevertTopics (cb) {
    let where = {
      TopicReplies: 0
    }
    getTopics(null, cb, where)
  },
  // 发布新话题
  releaseTopic (topic, cb) {
    Topics.create(topic).then(res => {
      cb(null, res)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 获取话题详情
  getTopicDetails (topicId, cb) {
    Topics.findOne({
      attributes: { 
        exclude: ['IsDelete']
      },
      where: {
        IsDelete: 0,
        ID: topicId
      },
      // include: [ Users ]
    }).then(data => {
      console.log(123, JSON.stringify(data))
      cb(null, data)
    }).catch(err => {
      console.log(222, err)
      Logger.error(err)
      cb(err)
    })
  },
  // 更新点击量
  updateTopicHits (id, topicDetail, cb) {
    Topics.update({
      TopicHits: topicDetail.TopicHits + 1
    }, {
      where: {
        ID: id
      }
    }).then(data => {
      cb(null, data)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 评论话题
  commentTopic (newComment, cb) {
    Comments.create(newComment).then(res => {
      cb(null, res)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  }
}