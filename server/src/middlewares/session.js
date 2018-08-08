import Session from 'express-session';
import Config from '../../config'

const ISPRODUCTION =  process.env.NODE_ENV === 'production'
const SessionId = Config[ISPRODUCTION ? 'Production' : 'Dev'].SessionId
const SessionSecret = Config[ISPRODUCTION ? 'Production' : 'Dev'].SessionSecret

// 配置session中间件
const session = Session({
  name: SessionId,
  secret: SessionSecret,
  resave:false,
  saveUninitialized: false,
  cookie: {
    // Domain: `http://${config.mysqlConfig.host}`,
    maxAge : 1000 * 60 * 60 * 2,
    httpOnly: false
  }
})

const userRemember = (req, res, next) => {
  // 用户勾选remember则将seesionid有效期设为两天
  if ((req.url === '/login' && req.body.remember)) {
    req.session.cookie.maxAge = 1000 * 60 * 60 * 48; 
    next()
    return
  }
  next()
}
export {
  session,
  userRemember
}
