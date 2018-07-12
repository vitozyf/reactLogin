import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
import {session, userRemember} from './middlewares/session';
import SessionValidation from './middlewares/sessionValidation';
import AccessControl from './middlewares/accessControl';
import './log4js.js';

let path = require('path');
let app = express();

app.all('*', AccessControl);
app.use(express.static('public')); // 静态资源
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session);
app.use(SessionValidation); // 全局登录验证
app.use(userRemember); // 用户是否勾选remeber

createRouter(app)

app.listen(6060, () => {
  console.log('Running on http://localhost:6060/api-docs')
})