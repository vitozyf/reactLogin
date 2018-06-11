import express from 'express';
import createRouter from './routers/index';
import bodyParser from 'body-parser';
// import './test/mysql_test.js'

let app = express();

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.use(bodyParser.urlencoded({ extended: false }));

createRouter(app)

app.listen(6060, () => {
  console.log('Running on http://localhost:6060')
})