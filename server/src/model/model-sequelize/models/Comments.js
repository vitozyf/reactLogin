export default function (sequelize, DataTypes) {
  return sequelize.define('Comments', {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      comment: 'Id',
      autoIncrement: true,
      allowNull: false
    },
    CommentContent: { // 回复内容
      type: DataTypes.CHAR,
      allowNull: false
    },
    UserId: { // 回复id
      type: DataTypes.CHAR,
      allowNull: false
    },
    // TopicId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    LikedCount: {
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