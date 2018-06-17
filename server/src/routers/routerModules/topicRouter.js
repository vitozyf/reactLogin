import express from 'express';
import Controllers from '../../controller/index.js'

let {topics} = Controllers

let router = express.Router();

router
  .post('/topic/search', topics.search)

export default router