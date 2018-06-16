const debug = process.env.NODE_ENV !== 'production'

export default {
  SessionIdName: 'REACTLOGIN',
  BaseUrl: debug ? 'http://localhost:6060/' : 'http://http://47.98.240.182:6060/'
}