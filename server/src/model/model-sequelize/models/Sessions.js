import Sequelize from 'sequelize';
import { sequelize, defineModel } from '../db';

const Sessions = sequelize.define('Db.Sessions', {
  sid: Sequelize.STRING,
  userId: Sequelize.STRING,
  expires: Sequelize.DATE,
  data: Sequelize.STRING(50000),
  PassWord: Sequelize.STRING,
  UserName: Sequelize.STRING,
  maxAge: Sequelize.BIGINT
});

export default Sessions