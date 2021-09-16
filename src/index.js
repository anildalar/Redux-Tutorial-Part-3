import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';

//Provider is a global COmponent
//Anything which you will pass to provider will be accessble to all component of react

const redux = require('redux');
const createStore = require('redux').createStore;

const BUY_LAPTOP='BUY_LAPTOP';
const SELL_LAPTOP='SELL_LAPTOP';


//action creator 1
function buyLaptop(){
  return {
      type:BUY_LAPTOP
  }
}

//action creator 2
function sellLaptop(){
  return {
      type:SELL_LAPTOP
  }
}
let initialState ={
  noOfLaptop:10
  /* P:V */
}



let rootReducer = (state = initialState,action)=>{
  switch( action.type  ){
       case BUY_LAPTOP:
           return {
               ...state,
               noOfLaptop:state.noOfLaptop + 1
           }
          break;
       case SELL_LAPTOP:
           return {
               ...state,
               noOfLaptop:state.noOfLaptop - 1
           }
           break;
       default:
           return state; // if you are returning state mean you are return old value
  }
}


//Create Store is a function
const myStore = createStore(rootReducer);

//console.log(myStore);

//now get the latest value of store
//console.log(myStore.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
