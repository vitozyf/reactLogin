import path from 'path';
import fs from 'fs';
import https from 'https';

import express from 'express';
import bodyParser from 'body-parser';

import createRouter from 'routers/index';
import {session, userRemember} from 'middlewares/session';
import {sendJson} from 'middlewares/resMethods';
import SessionValidation from 'middlewares/sessionValidation';
import AccessControl from 'middlewares/accessControl';
import {logInit} from 'Logger';
import Config from 'config';

const ISPRODUCTION = process.env.NODE_ENV === 'production'
const PORT = Config[ISPRODUCTION ? 'Production' : 'Dev'].port
// let app = express();

//配置https站点
let app = express('https');
// 导入https证书
var privateKey  = fs.readFileSync(path.join(__dirname, '../certificate/214903774510795.key'), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, '../certificate/214903774510795.pem'), 'utf8');
var credentials = {key: privateKey, cert: certificate};


app = logInit(app); // 日志
app.all('*', AccessControl); // 请求过滤
app.use(express.static('public')); // 静态资源
app.use(bodyParser.json()); // bodyparse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(sendJson); // 封装res自定义方法
app.use(session); // session
app.use(SessionValidation); // 全局登录验证
app.use(userRemember); // 用户是否勾选remeber

// 路由
createRouter(app)

// 启动服务
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`Running on https://localhost:${PORT}/api-docs`)
})