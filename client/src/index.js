import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavigationBar from './components/NavigationBar'
import routes from './routers'
import createStore from 'src/store/index'
import { Spin } from 'antd';
import './assets/style/index.css'

const store = createStore()

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <div className = "blog-app">
        <Spin size="large" tip="加载中，请稍后..." spinning = {store.getState().pageLoading} >
          <NavigationBar />
          { routes }
        </Spin>
      </div>
    </Router>

  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
