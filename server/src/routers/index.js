import fs from 'fs';
import path from 'path';

export default (app) => {
  fs.readdir(path.join(__dirname, './routerModules'), (err, fileNames) => {
    if(err) throw err;
    fileNames.map(fileName => {
      let filePath = path.join(__dirname, './routerModules', fileName);
      app.use(require(filePath).default)
    })
  })
}
