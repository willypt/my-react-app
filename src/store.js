import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import personReducer from './reducers/personReducer'
import peopleReducer from './reducers/peopleReducer'

export default createStore(
  combineReducers({personReducer, peopleReducer}),
  {}, 
  applyMiddleware(createLogger())
)