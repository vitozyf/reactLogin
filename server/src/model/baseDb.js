// 创建公共数据库连接对象

import mysql from 'mysql';
import Config from '../../config';
import Sequelize from 'sequelize';

const mysqlConfig = Config.mysqlConfig
const sequelize = new Sequelize(
  mysqlConfig.database, 
  mysqlConfig.user, 
  mysqlConfig.password, 
  {
    host: mysqlConfig.host,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 3,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }
);

// 链接测试
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

var pool = mysql.createPool(Config.mysqlConfig);

var query = (sql, options, callback) => {
    let cb = typeof options === 'function' ? options : callback
    pool.getConnection((err, conn) => {
      if(err) {
          cb(err, null);
      } else {
          conn.query(sql, options, (err, results) => {
            //事件驱动回调
            cb(err, results);
            //释放连接
            conn.release();
          });
      }
    });
};

export {
  query,
  sequelize
}
