export default {
  // 不用验证是否已经登录的请求
  NoValidationRequiredList: [
    '/api-docs.json', // swagger-api
    '/',  // 首页
    '/signin', // 注册
    '/login', // 登录
    '/signout', // 退出
    '/topic/search', // 首页搜索
    '/topic/getTopicDetails' // 获取话题详情
  ]
}