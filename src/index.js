import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'

const personReducer = (state = { bio: '', lastValue: [] }, action) => {
  switch ( action.type ) {
    case 'UPDATE_BIO':      
      state = {
        ...state,
        bio: action.payload
      }
      state.lastValue.push(action.payload)
      break; 

    default:
      break;
  }  
  return state;
}

const peopleReducer = (state = { people: [] }, action) => {
  switch ( action.type ) {
    case 'ADD_PERSON':      
      state = {
        people: [...state.people, action.payload]
      }
      break; 

    default:
      break;
  }  
  return state;
}

const store = createStore(
  combineReducers({personReducer, peopleReducer}),
  {}, 
  applyMiddleware(createLogger())
  )

store.subscribe( () => {  
  // console.log("State updated!", store.getState());
})
  
// store.dispatch({  
//   type: 'UPDATE_BIO',
//   payload: 'fresh graduate'
// })

// store.dispatch({  
//   type: 'UPDATE_BIO',  
//   payload: 'developer'
// })

// store.dispatch({  
//   type: 'ADD_PERSON',  
//   payload: {
//     name: 'Juan',
//     age: 20,
//     bio: 'student'
//   }
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
