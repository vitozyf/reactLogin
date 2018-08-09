import Session from 'express-session';
import Config from '../../config';
import {sequelize} from '../model/model-sequelize/db';
import {Sessions} from '../model/model-sequelize/index';

const SequelizeStore = require('connect-session-sequelize')(Session.Store);

const ISPRODUCTION =  process.env.NODE_ENV === 'production';
const seaverConfig = Config[ISPRODUCTION ? 'Production' : 'Dev']
const SessionId = seaverConfig.SessionId;
const SessionSecret = seaverConfig.SessionSecret;

function extendDefaultFields(defaults, session) {
  return {
    data: defaults.data,
    expires: defaults.expires,
    userId: session.UserInfo.UserID,
    PassWord: session.UserInfo.PassWord,
    UserName: session.UserInfo.UserName,
    maxAge: session.cookie.maxAge
  };
}

const options = {
  db: sequelize,
  table: 'Db.Sessions',
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
    httpOnly: false
  }
})

const userRemember = (req, res, next) => {
  // 用户勾选remember则将seesionid有效期设为两天
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
