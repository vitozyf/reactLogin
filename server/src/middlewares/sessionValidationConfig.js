export default {
  // 不用验证是否已经登录的请求
  NoValidationRequiredList: [
    '/',  // 首页
    '/signin', // 注册
    '/login', // 登录
    '/signout', // 退出
    '/topic/search', // 首页搜索
    '/api-docs.json' // swagger-api
  ]
}