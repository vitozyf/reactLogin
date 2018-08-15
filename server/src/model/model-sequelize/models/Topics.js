import {dateStr} from 'utils/time';

export default function (sequelize, DataTypes) {
  return sequelize.define('Topics', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      comment: 'Id',
      allowNull: false
    },
    TopicReplies: { // 回复数量
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    TopicHits: { // 点击量
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    TopicName: { // 话题名称
      type: DataTypes.STRING,
      allowNull: false,
      get () {
        return this.getDataValue('TopicName')
      }
    },
    TopicLabel: { // 标记类型
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false
    },
    LastReplyUserId: { // 最后回复id
      type: DataTypes.STRING,
      allowNull: true
    },
    LastReplyTime: { // 最后回复时间
      type: DataTypes.DATE,
      allowNull: true
    },
    LastReplyTimeStr: {
      type: DataTypes.STRING,
      allowNull: true,
      get () {
        let time = this.getDataValue('LastReplyTime')
        return time ? dateStr(time) : ''
      }
    },
    CreatedAtStr: {
      type: DataTypes.STRING,
      allowNull: true,
      get () {
        let time = this.getDataValue('createdAt')
        return time ? dateStr(time) : ''
      }
    },
    UserId: { // 作者id
      type: DataTypes.CHAR,
      allowNull: false
    },
    TopicContent: { // 话题内容
      type: DataTypes.STRING(8000),
      allowNull: false
    },
    Plate: { // 所属板块
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    timestamps: true, // 添加时间戳属性
    paranoid: true, // 删除操作不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
    underscored: false, // 使用驼峰式命令规则，不使用下划线分隔
    freezeTableName: false, // 设置为false时sequelize会自动使用传入的模型名（define的第一个参数）做为表名，否则禁止修改表名
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
}