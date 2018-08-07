import Sequelize from 'sequelize';
import { defineModel } from '../db';

const Topics = defineModel('dbo.Comment', {
  // TopicId: { // id
  //   primaryKey: false, // 主键
  //   unique: true, // 不能重复
  //   allowNull: false, // 是否允许为null
  //   type: Sequelize.INTEGER, // 数据类型
  //   autoIncrement: true // 自增
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
    type: Sequelize.CHAR
  },
  TopicLabel: { // 标记类型
    type: Sequelize.INTEGER,
    defaultValue: 2
  },
  LastReplyUserId: { // 最后回复id
    type: Sequelize.CHAR,
    allowNull: true
  },
  LastReplyTime: { // 最后回复时间
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  IsDelete: { // 是否删除
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  UserID: { // 作者id
    type: Sequelize.CHAR
  },
  TopicContent: { // 话题内容
    type: Sequelize.CHAR
  },
  Plate: { // 所属板块
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

export default Topics