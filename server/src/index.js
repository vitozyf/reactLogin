import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
import {session, userRemember} from './middlewares/session';
import SessionValidation from './middlewares/sessionValidation';
import AccessControl from './middlewares/accessControl'

// import log from  './middlewares/logs/log4js';
// const log4js = require('log4js');

let path = require('path')
let app = express();


// var log = log4js.getLogger("app");
// // app.use(log)
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         log.error("Something went wrong:", err);
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

app.all('*', AccessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session);
app.use(SessionValidation);
app.use(userRemember);

createRouter(app)

app.listen(6060, () => {
  console.log('Running on http://localhost:6060')
})