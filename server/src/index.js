import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
import {session, userRemember} from './middlewares/session';
import {sendJson} from './middlewares/resMethods';
import SessionValidation from './middlewares/sessionValidation';
import AccessControl from './middlewares/accessControl';
import Config from '../config';
import {logInit} from './log4js.js';

const ISPRODUCTION =  process.env.NODE_ENV === 'production'
const PORT = Config[ISPRODUCTION ? 'Production' : 'Dev'].port
let app = express();

app = logInit(app); // 日志
app.all('*', AccessControl);
app.use(express.static('public')); // 静态资源
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session);
app.use(SessionValidation); // 全局登录验证
app.use(userRemember); // 用户是否勾选remeber
app.use(sendJson); // 封装res自定义方法

createRouter(app)
// console.log(process.env.NODE_ENV)
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}/api-docs`)
})