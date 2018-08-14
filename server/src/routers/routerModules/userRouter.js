import express from 'express';
import Controllers from 'controller';

let {users} = Controllers

let router = express.Router();

router
  /**
   * @swagger
   * /login:
   *   post:
   *    tags:
   *      - User
   *    summary: '用户登录'
   *    description: ''
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'loginUser'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *     - name: user
   *       in: body
   *       description: '用户登录系统'
   *       required: true
   *       schema: 
   *        $ref: "#/definitions/User"
   */
  .post('/login', users.login)
  /**
   * @swagger
   * /signin:
   *   post:
   *    tags:
   *      - User
   *    summary: '用户注册'
   *    description: '用户名不能重复'
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'signinUser'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *     - name: user
   *       in: body
   *       description: '用户注册系统'
   *       required: true
   *       schema: 
   *        $ref: "#/definitions/User"
   */
  .post('/signin', users.signin)
  /**
   * @swagger
   * /signout:
   *   post:
   *    tags:
   *      - User
   *    summary: '用户登出'
   *    description: ''
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'signoutUser'
   *    produces: 
   *     - 'application/json'
   */
  .post('/signout', users.signout)
  /**
   * @swagger
   * /getUserInfo:
   *   post:
   *    tags:
   *      - User
   *    summary: '获取登录用户信息'
   *    description: ''
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'getUserInfo'
   *    produces: 
   *     - 'application/json'
   */
  .post('/getUserInfo', users.getUserInfo)

export default router