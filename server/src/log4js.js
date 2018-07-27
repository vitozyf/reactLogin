import log4js from 'log4js';
import path from 'path';

const logInit = (app) => {
   log4js.configure(require(path.join(__dirname, './config/log4js-config.js')));

  app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));

  return app
}

export {
  logInit
}