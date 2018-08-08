import Config from './sessionValidationConfig'

// 对请求进行登录判断
export default function (req, res, next) {
  const session = req.session
  if (Config.NoValidationRequiredList.indexOf(req.url) > -1) {
    next();
  } else {
    if (!session.IsLogin) return res.Back(401, '用户未登录');
    next();
  }
}