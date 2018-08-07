import * as models from './index';

console.log(models)
models.Topics.sync({force: true}).then((res) => {
  console.log(123, res)
})