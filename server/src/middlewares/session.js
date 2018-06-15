import Session from 'express-session';
import config from '../../config'
// 配置session中间件
const session = Session({
  name: config.SessionId,
  secret: config.SessionSecret,
  resave:false,
  saveUninitialized: false,
  cookie: {
    Domain: `http://${config.mysqlConfig.host}`,
    maxAge : 1000 * 60 * 60 * 2
  }
})

const userRemember = (req, res, next) => {
  // 用户是否勾选remember验证
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
