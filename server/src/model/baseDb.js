// 创建公共数据库连接对象

import mysql from 'mysql';
import Config from '../../config'

let connection = mysql.createConnection(Config.mysqlConfig)

export default connection