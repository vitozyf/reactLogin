var webpack =  require('webpack');
const path = require("path");
const { injectBabelPlugin } = require('react-app-rewired');

const AliasConfig = {
  'src': resolve('src'),
  'components': resolve('src/components'),
  'pages': resolve('src/pages'),
  'assets': resolve('src/assets'),
  '~assets': resolve('src/assets'),
  'reducers': resolve('src/reducers'),
  'utils': resolve('src/utils'),
  '~routers': resolve('src/routers'),
  'routers': resolve('src/routers'),
  'store': resolve('src/routers'),
  'public': resolve('public')
};

// const plugins = [
//   new webpack.ProvidePlugin({
//     '_': 'underscore'
//   })
// ];

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  extend(config.resolve.alias, AliasConfig)
  
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  // config = injectBabelPlugin(['transform-decorators-legacy'], config);
  
  // config.plugins.push(plugins[0]);

  return config;
};

function resolve (name) {
  return path.resolve(__dirname, name)
}

function extend (...arguments) {
  return Object.assign(...arguments)
}