import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import People from './components/People'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Header />
          </div>
          <p className="App-intro">
            <Route exact path="/" component={Home}/>
            <Route path="/people" component={People}/>
          </p>
        </div>
      </Router>
    );
  }
}

export default App;

// const initialState = {  result: 1,  lastValue: []}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {    
//     case 'ADD':      
//     state = {        
//       ...state,        
//       result: state.result + action.payload,      
//     }      
//     state.lastValue.push(action.payload)      
//     break;  
//   }  
//   return state;
// }

// const store = createStore(reducer)

// store.subscribe( () => {  
//   console.log("State updated! ", store.getState());
// })
  
// store.dispatch({  
//   type: 'ADD',
//   payload: 1
// })

// store.dispatch({  
//   type: 'ADD',  
//   payload: 4
// })