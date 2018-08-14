import Sequelize from 'sequelize';
import { defineModel } from '../db';
import Topics from '../index';

const Users = defineModel('Db.Users', {
  // Users_id: {
  //   type: Sequelize.CHAR,
  //   allowNull: true,
  //   get () {
  //     return this.getDataValue('UserID')
  //   }
  // },
  UserHeaderPortrait: {
    type: Sequelize.CHAR,
    allowNull: true,
    comment: '用户头像'
  },
  UserID: { // 用户ID
    type: Sequelize.CHAR,
    field: 'user_id',
    references: {
      model: 'Topics',
      key: 'ID'
    }
    // set (val) {
    //   this.setDataValue('UserID', uuidv1());
    // }
  },
  UserName: { // 用户名
    type: Sequelize.CHAR
  },
  PassWord: { // 用户密码
    type: Sequelize.CHAR
  },
  Email: { // Email
    type: Sequelize.CHAR,
    allowNull: true,
    validate: {
      isEmail: true
    }
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