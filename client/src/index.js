import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import NavigationBar from 'pages/NavigationBar'
import routes from './routers'
import createStore from 'src/store/index'
import SearchBar from 'components/SearchBar'
import Footer from 'components/Footer'
import './assets/style/index.css'

const store = createStore()

ReactDOM.render(
  <Provider store = { store }>
    <Router>
      <div className = "blog-app">
        <NavigationBar />
        <SearchBar />
        { routes }
        <Footer />
      </div>
    </Router>

  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
