import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
import {session, userRemember} from './middlewares/session';
import SessionValidation from './middlewares/sessionValidation';
import AccessControl from './middlewares/accessControl'

let path = require('path')
let app = express();

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