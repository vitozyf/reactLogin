// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK < OFF
const config =  {
  appenders: {
    info: { 
      type: 'file', 
      filename: 'Logs/application.log',
      pattern: "yyyy-MM-dd",
      level: 'DEBUG',
      maxLevel: 'WARN',
      layout: { 
        type: 'json', 
        separator: ',' 
      }
    },
    error: { 
      type: 'dateFile', 
      filename: 'Logs/error.log',
      pattern: "yyyy-MM-dd",
      level: 'error',
      maxLevel: 'error',
      layout: { 
        type: 'json', 
        separator: ',' 
      }
    }
  },
  categories: {
    default: { 
      appenders: [ 'info', 'error' ], 
      level: 'debug' 
    }
  },
  pm2: true
}
module.exports =config