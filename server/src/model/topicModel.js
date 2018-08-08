import {query} from './baseDb';
import {Topics, Users} from './model-sequelize';
import {paging} from '../utils/utils'
import Sequelize from 'sequelize';

// Users.hasMany(Topics, {foreignKey : 'UserId', constraints: false});
// Topics.belongsTo(Users, {foreignKey : 'UserId', constraints: false, targetKey: 'UserId'});

// Users.hasMany(Topics, {foreignKey : 'UserID', constraints: false});
// Topics.belongsTo(Users, {foreignKey : 'UserID', constraints: false});

export default {
  // 获取所有话题数据
  getAllTopics (params, cb) {
    const {PageIndex, PageSize} = params;
    const pg = paging(PageIndex, PageSize)
    Topics.findAll({
      offset: pg.offset,
      limit: pg.limit,
      attributes: {
        exclude: ['IsDelete']
      },
      // include:[
      //   {
      //     model:Users,
      //     attributes: ['UserName', 'UserID'],
      //     required:false
      //   }
      // ],
      where: {
        IsDelete: 0
      },
      order: [[Sequelize.col('LastReplyTime'), 'DESC']]
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      console.log(err)
      cb(err)
    })
    // let sqlStr = 'select topics.*, users.UserHeaderPortrait from topics left join users on topics.UserID = users.UserID where topics.IsDelete=0 order by topics.LastReplyTime DESC LIMIT ?, ?'
    // query(sqlStr, [Offset, PageSize], (err, res) => {
    //   if(err) return cb(err)
    //   cb(null, res)
    // })
  },
  getCounts (params, cb) {
    const {PageIndex, PageSize} = params;
    const pg = paging(PageIndex, PageSize)
    Topics.findAndCountAll({
      limit: pg.limit,
      offset: pg.offset
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
  },
  // 获取未回复话题
  getNoRevertTopics (cb) {
    Topics.findAll({
      attributes: { 
        exclude: ['IsDelete']
      },
      where: {
        IsDelete: 0,
        TopicReplies: 0
      }
    }).then(res => {
      cb(null, res)
    }).catch(err => {
      cb(err)
    })
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
    let sql = 'select topics.*, users.UserName from topics left join users on topics.UserID=users.UserID where topics.TopicId=? and topics.IsDelete=0 ';
    query(sql, topicId, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  },
  // 更新点击量
  updateTopicHits (id, cb) {
    let sql = 'update topics set TopicHits=TopicHits+1 where topics.topicId=?';
    query(sql, id, (err, res) => {
      if(err) return cb(err);
      cb(null, res)
    })
  }
}