import {
  paging
} from 'utils/utils';
import {
  Logger
} from 'Logger';
import {
  Topics,
  Comments,
  Users
} from './model-sequelize';

/**
 * 话题查询
 * @param {Object} pg 
 * @param {Function} cb 
 * @param {Object} where 
 */
function getTopics(pg, cb, where) {
  let query = {

  }
  if (where) {
    query = Object.assign({}, query, where)
  }

  let findQuery = {
    where: query,
    include: [
      {
        model: Users,
        attributes: ['UserName', 'UserHeaderPortrait']
      },
      {
        model: Comments,
        order: [
          ['Id', 'ASC']
        ],
        include: [ 
          {
            model: Users,
            attributes: ['UserName', 'UserHeaderPortrait']
          } 
        ]
      }
    ],
    order: [
      ['updatedAt', 'DESC'],
      ['createdAt', 'DESC'],
      [Comments, 'createdAt', 'ASC']
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
  getAllTopics(params, cb, where) {
    const {
      PageIndex,
      PageSize
    } = params;
    const pg = paging(PageIndex, PageSize)
    getTopics(pg, cb, where)
  },
  // 获取未回复话题
  getNoRevertTopics(cb) {
    let where = {
      TopicReplies: 0
    }
    getTopics(null, cb, where)
  },
  // 发布新话题
  releaseTopic(topic, cb) {
    Topics.create(topic).then(res => {
      cb(null, res)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 获取话题详情
  getTopicDetails(topicId, cb) {
    Topics.findOne({
      where: {
        Id: topicId
      },
    }).then(data => {
      cb(null, data)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 更新点击量
  updateTopicHits(id, topicDetail, cb) {
    Topics.update({
      TopicHits: topicDetail.TopicHits + 1
    }, {
      where: {
        Id: id
      }
    }).then(data => {
      cb(null, data)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 评论话题
  commentTopic(newComment, cb) {
    Comments.create(newComment).then(res => {
      cb(null, res)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  },
  // 删除话题
  deleteComment(Id, UserId, cb) {
    Comments.destroy({
      where: {
        Id: Id,
        UserId: UserId
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      Logger.error(err)
      cb(err)
    })
  }
}