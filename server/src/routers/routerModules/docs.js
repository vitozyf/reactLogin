import express from 'express';

let router = express.Router();

router
  .get('/api-docs', (req, res) => {
    res.send('OK')
  })

export default router