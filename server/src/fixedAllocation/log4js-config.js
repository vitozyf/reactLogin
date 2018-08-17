// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
const config = {
  appenders: {
    loginfo: {
      type: 'dateFile',
      filename: 'Logs/application.log',
      pattern: "yyyy-MM-dd",
      maxLogSize : 20971520,
      level: 'DEBUG',
      maxLevel: 'WARN',
      category: 'loginfo',
      layout: {
        type: 'json',
        separator: ';'
      }
    },
    logerror: {
      type: 'dateFile',
      filename: 'Logs/error.log',
      pattern: "yyyy-MM-dd",
      maxLogSize : 20971520,
      level: 'error',
      maxLevel: 'error',
      category: 'logerror',
      layout: {
        type: 'json',
        separator: ';'
      }
    }
  },
  categories: {
    default: {
      appenders: ['loginfo', 'logerror'],
      level: 'debug'
    },
    // 自定义category
    loginfo: {
      appenders: ['loginfo'],
      level: 'info'
    },
    logerror: {
      appenders: ['logerror'],
      level: 'error'
    }
  },
  pm2: true
}
module.exports = config