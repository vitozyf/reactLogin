import fs from 'fs';
import path from 'path';
import express from 'express';
import Definitions from './definitions.json';

let swaggerRouter = express.Router();
let swaggerJSDoc = require('swagger-jsdoc');

// swagger definition
let swaggerDefinition = {
  info: {
    title: 'reactLogin API', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'reactLogin-api',
  },
  host: 'localhost:6060',
  basePath: '/',
};

let options = {
  swaggerDefinition: swaggerDefinition,
  apis: [
    resolve('userRouter'), 
    resolve('topicRouter')
  ], // Path to the API docs
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
let swaggerSpec = swaggerJSDoc(options);

swaggerSpec = Object.assign({}, swaggerSpec, Definitions)

swaggerRouter
  .get('/api-docs.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

export default (app) => {
  // 注册路由
  fs.readdir(path.join(__dirname, './routerModules'), (err, fileNames) => {
    if(err) throw err;
    fileNames.map(fileName => {
      let filePath = path.join(__dirname, './routerModules', fileName);
      app.use(require(filePath).default)
    })
  })
  // 注册swagger路由
  app.use(swaggerRouter)
}

function resolve(name) { 
  return path.resolve(__dirname, `./routerModules/${name}.js`)
}
