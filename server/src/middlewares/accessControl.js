import Config from '../../config'

const ISPRODUCTION =  process.env.NODE_ENV === 'production'
const crossDomainWhiteList = Config[ISPRODUCTION ? 'Production' : 'Dev'].crossDomainWhiteList
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';

export default function (req, res, next) {
  // 设置响应头，允许跨域
  if(crossDomainWhiteList.indexOf(req.hostname) > -1){
    logger.debug('headerinfo', req.hostname, req.headers.origin, crossDomainWhiteList);
    res.header('Access-Control-Allow-Origin', req.headers.origin); // 跨域白名单
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('Access-Control-Max-Age', 1728000);
  }
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
}