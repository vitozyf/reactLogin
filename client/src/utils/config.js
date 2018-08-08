const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  SessionIdName: 'JsTechnicalForum',
  BaseUrl: DEBUG ? 'http://localhost:6060/' : 'http://47.98.240.182:6060/'
}