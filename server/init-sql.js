import * as models from './src/model/model-sequelize/index.js';
// const ISPRODUCTION = process.argv[2] === 'production'
for (const key in models) {
  if (models.hasOwnProperty(key)) {
    const model = models[key];
    // {force: true}
    model.sync().then(res => {
      console.log('sync data success', process.env.NODE_ENV)
    }).catch(err => {
      console.log('sync data fail', process.env.NODE_ENV)
    })
  }
}
