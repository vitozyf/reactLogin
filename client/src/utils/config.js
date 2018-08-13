const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  SessionIdName: 'JsTechnicalForum',
  BaseUrl: DEBUG ? 'http://localhost:6060/' : 'https://www.vitock.cn:6060/'
}