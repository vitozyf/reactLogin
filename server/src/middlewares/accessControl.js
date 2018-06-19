import config from '../../config'
export default function (req, res, next) {
  // let fs = require('fs');
  // fs.writeFile('req.text', JSON.stringify(req.hostname, null, '\t'), (err,data) => {
  //   console.log(123, err, data)
  // })
  // 设置请求头，允许跨域
  if( config.crossDomainWhiteList.indexOf(req.hostname) > -1){
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