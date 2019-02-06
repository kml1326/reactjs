import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import * as serviceWorker from './serviceWorker';

const thunk = (store) => (next) => (action) => {
  if(typeof action === 'function'){
    return action(store.dispatch)
  }
  return next(action);  
}

const logger = (action) => {
  return console.log(`${action.type} action with ${action.data} Data At ${new Date()}`);
}


const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
                    <App />
                    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
