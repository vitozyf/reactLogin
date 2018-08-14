import Sequelize from 'sequelize';
// import Users from './Users';
import { defineModel } from '../db';
import {dateStr} from 'utils/time';

const Topics = defineModel('Db.Topics', {
  // Topics_id: {
  //   type: Sequelize.CHAR,
  //   allowNull: true,
  //   get () {
  //     return this.getDataValue('UserID')
  //   }
  // },
  TopicReplies: { // 回复数量
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  TopicHits: { // 点击量
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  TopicName: { // 话题名称
    type: Sequelize.STRING,
    get () {
      return this.getDataValue('TopicName')
    }
  },
  TopicLabel: { // 标记类型
    type: Sequelize.INTEGER,
    defaultValue: 2
  },
  LastReplyUserId: { // 最后回复id
    type: Sequelize.STRING,
    allowNull: true
  },
  LastReplyTime: { // 最后回复时间
    type: Sequelize.DATE,
    allowNull: true
  },
  LastReplyTimeStr: {
    type: Sequelize.STRING,
    allowNull: true,
    get () {
      let time = this.getDataValue('LastReplyTime')
      return time ? dateStr(time) : ''
    }
  },
  CreatedAtStr: {
    type: Sequelize.STRING,
    allowNull: true,
    get () {
      let time = this.getDataValue('createdAt')
      return time ? dateStr(time) : ''
    }
  },
  IsDelete: { // 是否删除
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  UserID: { // 作者id
    type: Sequelize.CHAR,
    // references: {
    //   model: Users, // 引用user
    //   key: 'UserID' // 引用模型的列名称
    // }
  },
  TopicContent: { // 话题内容
    type: Sequelize.STRING(8000),
  },
  Plate: { // 所属板块
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});
export default Topics