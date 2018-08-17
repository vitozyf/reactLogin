import log4js from 'log4js';
import path from 'path';

log4js.addLayout('json', function (config) {
  return function (logEvent) {
    return JSON.stringify(logEvent) + config.separator;
  }
});

const logInit = (app) => {
  log4js.configure(require(path.join(__dirname, 'fixedAllocation/log4js-config.js')));

  app.use(log4js.connectLogger(log4js.getLogger('loginfo'), { level: log4js.levels.INFO }));

  return app
}

const Logger = log4js.getLogger();
const LoggerInfo = log4js.getLogger('loginfo');
const LoggerErr = log4js.getLogger('logerror');

export {
  logInit,
  Logger,
  LoggerInfo,
  LoggerErr
}