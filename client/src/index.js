import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavigationBar from './components/NavigationBar'
import routes from './routers'
import createStore from 'src/store/index'

const store = createStore()

ReactDOM.render(
  <Provider store = { store }>

    <Router>
      <div>
        <NavigationBar />
        { routes }
      </div>
    </Router>

  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
