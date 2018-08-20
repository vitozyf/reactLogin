import {dateStr} from 'utils/time';

export default function (sequelize, DataTypes) {
  return sequelize.define('Topics', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      comment: 'Id',
      allowNull: false,
      comment: 'Id'
    },
    TopicReplies: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      get () {
        let Comments = this.getDataValue('Comments');
        return Comments ? Comments.length : 0;
      },
      comment: '回复数量'
    },
    TopicHits: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
      comment: '点击量'
    },
    TopicName: {
      type: DataTypes.STRING,
      allowNull: false,
      get () {
        return this.getDataValue('TopicName')
      },
      comment: '话题名称'
    },
    TopicLabel: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      allowNull: false,
      comment: '标记类型'
    },
    LastReplyUserId: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '最后回复id'
    },
    LastReplyTime: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '最后回复时间'
    },
    LastReplyTimeStr: {
      type: DataTypes.STRING,
      allowNull: true,
      get () {
        let time = this.getDataValue('LastReplyTime')
        return time ? dateStr(time) : ''
      }
    },
    EditAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      get (field) {
        let time = this.getDataValue(field)
        return time ? dateStr(time) : ''
      },
      comment: '最后编辑时间'
    },
    CreatedAtStr: {
      type: DataTypes.STRING,
      allowNull: true,
      get () {
        let time = this.getDataValue('CreatedAt')
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