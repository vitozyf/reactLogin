import express from 'express';
import Controllers from '../controller/index.js'

let {users} = Controllers

let router = express.Router();

router
  .get('/', users.showIndex)
  .post('/login', users.login)

export default router