import express from 'express';
import Controllers from '../../controller/index.js'

let {users} = Controllers

let router = express.Router();

router
  .get('/', users.showIndex)
  .post('/test', users.test)
  .post('/login', users.login)
  .post('/signin', users.signin)
  .post('/signout', users.signout)
  .post('/getUserInfo', users.getUserInfo)

export default router