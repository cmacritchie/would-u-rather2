import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import middleWare from './middleWare'
//import ReduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk';
import App from './components/app';
import reducers from './reducers';
import Nav from './components/nav'
import { BrowserRouter } from "react-router-dom" 

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
 const store = createStore(reducers, middleWare);





ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
  <Provider store={store}>
  <BrowserRouter >
    <App />
    </BrowserRouter >
  </Provider>
  , document.querySelector('.container'));
