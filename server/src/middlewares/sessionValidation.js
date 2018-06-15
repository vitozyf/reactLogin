import config from './sessionValidationConfig'
// 对请求进行登录判断
export default function (req, res, next) {
  const session = req.session
  if (config.NoValidationRequiredList.indexOf(req.url) > -1) {
    next();
  } else {
    if (!session.IsLogin) return res.json({Code: 1, Msg: '未登录'});
    next();
  }
}