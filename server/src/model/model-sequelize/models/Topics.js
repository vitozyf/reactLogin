import { defineModel } from('../db');

const Topics = defineModel('topics', {
  TopicId: { // id
    primaryKey: true, // 主键
    unique: true, // 不能重复
    allowNull: false, // 是否允许为null
    type: Sequelize.INTEGER, // 数据类型
    autoIncrement: true // 自增
  },
  TopicReplies: { // 回复数量
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  TopicHits: { // 点击量
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  TopicName: { // 话题名称
    allowNull: false,
    type: Sequelize.CHAR
  },
  TopicLabel: { // 标记类型
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 2
  },
  LastReplyUserId: { // 最后回复id
    type: Sequelize.CHAR
  },
  LastReplyTime: { // 最后回复时间
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  IsDelete: { // 是否删除
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  UserID: { // 作者id
    allowNull: false,
    type: Sequelize.CHAR
  },
  TopicContent: { // 话题内容
    allowNull: false,
    type: Sequelize.CHAR
  },
  CreateTime: { // 创建时间
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  },
  Plate: { // 所属板块
    allowNull: false,
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
});

export default Topics