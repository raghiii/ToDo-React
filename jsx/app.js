//Importing Libraries
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose} from 'redux';
import TodoReducer from './reducers/todo-reducer';

// App Components
import Application from './components/Application';

let index = 2;

const store = createStore(
  TodoReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
 );

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root')
);
