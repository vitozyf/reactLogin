export default function (sequelize, DataTypes) {
  return sequelize.define('Sessions', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    expires: DataTypes.DATE,
    data: DataTypes.STRING(2000),
    Ip: DataTypes.STRING,
    PassWord: DataTypes.STRING,
    UserName: DataTypes.STRING,
    maxAge: DataTypes.BIGINT
  }, {
    timestamps: true, // 添加时间戳属性
    paranoid: false, // 删除操作不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
    underscored: false, // 使用驼峰式命令规则，不使用下划线分隔
    freezeTableName: false, // 设置为false时sequelize会自动使用传入的模型名（define的第一个参数）做为表名，否则禁止修改表名
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
}