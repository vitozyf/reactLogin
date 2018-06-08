const path = require("path")
const { injectBabelPlugin } = require('react-app-rewired');

const AliasConfig = {
  'src': resolve('src'),
  'components': resolve('src/components'),
  'assets': resolve('src/assets'),
  '~assets': resolve('src/assets'),
  'reducers': resolve('src/reducers'),
  'utils': resolve('src/utils'),
  '~routers': resolve('src/routers'),
  'routers': resolve('src/routers')
}

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  extend(config.resolve.alias, AliasConfig)
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  return config;
};

function resolve (name) {
  return path.resolve(__dirname, name)
}

function extend (...arguments) {
  return Object.assign(...arguments)
}