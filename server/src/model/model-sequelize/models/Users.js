import Sequelize from 'sequelize';
import { defineModel } from '../db';

const Users = defineModel('users', {
  UserHeaderPortrait: { // 用户头像
    type: Sequelize.CHAR,
    allowNull: true
  },
  UserID: { // 用户ID
    type: Sequelize.CHAR
  },
  UserName: { // 用户名
    type: Sequelize.CHAR
  },
  PassWord: { // 用户密码
    type: Sequelize.CHAR
  },
  Email: { // Email
    type: Sequelize.CHAR,
    allowNull: true
  },
  Phone: { // 电话
    type: Sequelize.CHAR,
    allowNull: true
  },
  IsDelete: { // 是否删除
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  Address: {
    type: Sequelize.CHAR,
    allowNull: true
  }
});

export default Users