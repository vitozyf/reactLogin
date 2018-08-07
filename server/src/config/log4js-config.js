const config =  {
  appenders: {
    out: { type: 'stdout' },
    app: { 
      type: 'file', 
      filename: 'application.log' 
    }
  },
  categories: {
    default: { 
      appenders: [ 'out', 'app' ], 
      level: 'debug' 
    }
  }
}
module.exports =config