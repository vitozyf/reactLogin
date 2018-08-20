import Session from 'express-session';
import Config from 'config';
import {sequelizePro} from 'model/model-sequelize';

const SequelizeStore = require('connect-session-sequelize')(Session.Store);
const ISPRODUCTION =  process.env.NODE_ENV === 'production';
const seaverConfig = Config[ISPRODUCTION ? 'Production' : 'Dev']
const SessionId = seaverConfig.SessionId;
const SessionSecret = seaverConfig.SessionSecret;

function extendDefaultFields(defaults, session) {
  return {
    data: defaults.data,
    expires: defaults.expires,
    UserId: session.UserId,
    PassWord: session.PassWord,
    UserName: session.UserName,
    maxAge: session.cookie.maxAge,
    Ip: session.Ip
  };
}

const options = {
  db: sequelizePro,
  table: 'Sessions', // 区分大小写，必须和模型定义的 tableName 一致
  extendDefaultFields: extendDefaultFields,
  expiration: 7 * 24 * 60 * 60 * 1000
};

const sessionStore = new SequelizeStore(options);
// 配置session中间件
const session = Session({
  name: SessionId,
  secret: SessionSecret,
  store: sessionStore,
  resave:false,
  saveUninitialized: false,
  cookie: {
    maxAge : 1000 * 60 * 60 * 24 * 2,
    domain: seaverConfig.domain, // 设置domain后cookie写不进？
    httpOnly: false
  }
})

const userRemember = (req, res, next) => {
  // 用户勾选remember则将seesionid有效期设为7天
  if ((req.url === '/login' && req.body.remember)) {
    req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7; 
    next()
    return
  }
  next()
}
export {
  session,
  userRemember
}
