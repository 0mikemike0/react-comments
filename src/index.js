import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import { createStore } from 'redux';
import todos from './reducers';

import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage';



// const initialState = [
//   {id: 1, name: 'Настроить webpack', text: 'Hello!', date: '15.01.2020'},
//   {id: 2, name: 'Запустить webpack-dev-server', text: 'Hello!', date: '15.01.2020'},
//   {id: 3, name: 'Написать TodoApp', text: 'Hello!', date: '15.01.2020'}

// ];

// const store = createStore(todos, initialState);

const store = createStore(todos, loadState() )

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))


ReactDOM.render (
  <App store={store}/>,
  document.querySelector('#app')
)