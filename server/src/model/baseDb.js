// 创建公共数据库连接对象

import mysql from 'mysql';
import Config from '../../config'

// let connection = mysql.createConnection(Config.mysqlConfig)

// export default connection


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

export default query;
