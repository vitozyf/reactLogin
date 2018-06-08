import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers/index'
import initialState from './initialState'

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default () => {
  return  createStore(
    rootReducers, 
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, logger)
    )
  )
}