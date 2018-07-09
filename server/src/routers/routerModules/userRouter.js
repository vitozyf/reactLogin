import express from 'express';
import Controllers from '../../controller/index.js'

let {users} = Controllers

let router = express.Router();

router
/**
   * @swagger
   * /:
   *   get:
   *     description: Returns the homepage
   *     responses:
   *       200:
   *         description: hello world
   */
  .get('/', users.showIndex)
  .post('/test', users.test)
  .post('/login', users.login)
  .post('/signin', users.signin)
  .post('/signout', users.signout)
/**
   * @swagger
   * /users:
   *   post:
   *     description: Returns users
   *     tags: [Users]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *     responses:
   *       200:
   *         description: users
   */
  .post('/getUserInfo', users.getUserInfo)

export default router