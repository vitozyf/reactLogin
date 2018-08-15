
export default function (sequelize, DataTypes) {
  return sequelize.define('Users', {
    Id: {
      type: DataTypes.CHAR,
      primaryKey: true,
      // field: 'UserId',
      unique: true,
      comment: '用户Id',
      allowNull: false
    },
    UserHeaderPortrait: {
      type: DataTypes.CHAR,
      allowNull: true,
      comment: '用户头像'
    },
    UserName: {
      type: DataTypes.CHAR,
      comment: '用户名',
      allowNull: false
    },
    PassWord: {
      type: DataTypes.CHAR,
      comment: '用户密码',
      allowNull: false
    },
    Email: {
      type: DataTypes.CHAR,
      allowNull: true,
      comment: 'Email',
      validate: {
        isEmail: true
      }
    },
    Phone: {
      type: DataTypes.CHAR,
      allowNull: true,
      comment: '联系电话'
    },
    Address: {
      type: DataTypes.CHAR,
      allowNull: true,
      comment: '地址'
    }
  }, {
    // tableName: name,
    timestamps: true, // 添加时间戳属性
    paranoid: true, // 删除操作不从数据库中删除数据，而只是增加一个 deletedAt 标识当前时间
    underscored: false, // 使用驼峰式命令规则，不使用下划线分隔
    freezeTableName: false, // 设置为false时sequelize会自动使用传入的模型名（define的第一个参数）做为表名，否则禁止修改表名
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
}