import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'; // import your store 
import todoApp from './reducers'; // import your reducers

import {Provider} from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import {
//     addTodo,
//     toggleTodo,
//     setVisibilityFilter,
//     VisibilityFilters
//   } from './actions';
  

const store = createStore(todoApp, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // create Store based on your reducers 
// can set the initial state from the server, rather than leaving it empty as it is now 
// const store = createStore(todoApp, window.STATE_FROM_SERVER)


  // Log the initial state
//   console.log(store.getState())
  
  // Every time the state changes, log it
  // Note that subscribe() returns a function for unregistering the listener
//   const unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
//   )
  
//   // Dispatch some actions
//   store.dispatch(addTodo('Learn about actions'))
//   store.dispatch(addTodo('Learn about reducers'))
//   store.dispatch(addTodo('Learn about store'))
//   store.dispatch(toggleTodo(0))
//   store.dispatch(toggleTodo(1))
//   store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  
//   // Stop listening to state updates
//   unsubscribe()

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
