// 创建公共数据库连接对象

import mysql from 'mysql';

let connection = mysql.createConnection({
  hose: 'localhose',
  user: 'root',
  password: 'zyf535069215',
  database: 'reactlogin'
})

export default connection