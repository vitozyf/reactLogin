import Config from '../../config'

const ISPRODUCTION =  process.env.NODE_ENV === 'production'
const crossDomainWhiteList = Config[ISPRODUCTION ? 'Production' : 'Dev'].crossDomainWhiteList

export default function (req, res, next) {
  // 设置响应头，允许跨域
  if(crossDomainWhiteList.indexOf(req.hostname) > -1){
    res.header('Access-Control-Allow-Origin', req.headers.origin); // 跨域白名单
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  }
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
}