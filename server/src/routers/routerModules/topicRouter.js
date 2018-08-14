import express from 'express';
import Controllers from 'controller';

let {topics} = Controllers

let router = express.Router();

router
  /**
   * @swagger
   * /topic/search:
   *   post:
   *    tags:
   *      - Topic
   *    summary: '查询话题'
   *    description: 'type类型： All (所有); NoRevert(未回复), Share(分享),Ask(问答), Test(测试)'
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'topicSearch'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *     - name: search
   *       in: body
   *       description: '查询话题'
   *       required: true
   *       schema: 
   *        $ref: "#/definitions/TopicSearch"
   */
  .post('/topic/search', topics.search)
  /**
   * @swagger
   * /topic/release:
   *   post:
   *    tags:
   *      - Topic
   *    summary: '发布话题'
   *    description: ''
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'releaseTopic'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *     - name: search
   *       in: body
   *       description: '发布话题'
   *       required: true
   *       schema: 
   *        $ref: "#/definitions/Topic"
   */
  .post('/topic/release', topics.releaseTopic)
  /**
   * @swagger
   * /topic/getTopicDetails:
   *   post:
   *    tags:
   *      - Topic
   *    summary: '获取话题详情话题'
   *    description: ''
   *    author: 'vito 更新于2015/06/17 19:56'
   *    operationId: 'getTopicDetails'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *       - name: TopicId
   *         in: body
   *         description: '获取话题详情话题'
   *         required: true
   *         schema:
   *          type: object
   *          properties:
   *           TopicId:
   *            type: string
   */
  .post('/topic/getTopicDetails', topics.getTopicDetails)
  /**
   * @swagger
   * /topic/comment:
   *   post:
   *    tags:
   *      - Topic
   *    summary: '评论话题'
   *    description: ''
   *    operationId: 'commentTopic'
   *    produces: 
   *     - 'application/json'
   *    parameters:
   *     - name: search
   *       in: body
   *       description: '发布话题'
   *       required: true
   *       schema: 
   *        $ref: "#/definitions/TopicComment"
   */
  .post('/topic/comment', topics.commentTopic)

export default router