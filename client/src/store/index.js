import { createStore, applyMiddleware } from 'redux'
import rootReducers from './reducers/index'
import initialState from './initialState'

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const DEBUG = process.env.NODE_ENV !== 'production'

export default () => {
  return  createStore(
    rootReducers, 
    initialState,
    composeWithDevTools(
      DEBUG ? applyMiddleware(thunk, logger) : applyMiddleware(thunk)
    )
  )
}