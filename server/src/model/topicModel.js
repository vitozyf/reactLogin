
import {Topics, Users} from './model-sequelize';
import {paging} from 'utils/utils'
import Sequelize from 'sequelize';

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
    order: [[Sequelize.col('updatedAt'), 'DESC']]
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
  getCounts (params, cb, where) {
    const {PageIndex, PageSize} = params;
    const pg = paging(PageIndex, PageSize)
    let findQuery = {
      // limit: pg.limit,
      // offset: pg.offset
    }
    if (where) {
      findQuery.where = where
    }
    // console.log(123, findQuery)
    Topics.findAndCountAll(findQuery).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
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
      cb(err)
    })
  },
  // 获取话题详情
  getTopicDetails (topicId, cb) {
    Topics.findAll({
      attributes: { 
        exclude: ['IsDelete']
      },
      where: {
        IsDelete: 0,
        ID: topicId
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
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
      cb(err)
    })
  }
}