import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './containers/app';
// import docReady from 'doc-ready';
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
);
