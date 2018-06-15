import config from '../../config'
export default function (req, res, next) {
  // 设置请求头，允许跨域
  if( config.crossDomainWhiteList.indexOf(req.headers.origin) > -1){
    res.header('Access-Control-Allow-Origin', req.headers.origin); // 跨域白名单
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  }
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
}