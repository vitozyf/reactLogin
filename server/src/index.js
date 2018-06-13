import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
import Session from 'express-session';
import config from '../config'

// import './test/mysql_test.js'
let path = require('path')
let app = express();

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});
// app.use(cookieParser());
app.use(Session({
  name: config.SessionId,
  secret: config.SessionSecret,
  resave:false,
  saveUninitialized: false,
  cookie: {
    maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  }
  // store: new MongoStore({ //创建新的mongodb数据库
  //     url: `mongodb://cha:${config.mysqlConfig.user}@${config.mysqlConfig.host}:3306/${config.mysqlConfig.database}`, //比如：'mongodb://cha:root@localhost:27017/ch_db'
  //     collection: config.sessionCollection //比如：'ch_sessions'
  // }),
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

createRouter(app)

app.listen(6060, () => {
  console.log('Running on http://localhost:6060')
})