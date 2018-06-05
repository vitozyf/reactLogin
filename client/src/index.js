import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

import { Provider } from 'react-redux';

import NavigationBar from './components/NavigationBar'

import routes from './routers'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

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
