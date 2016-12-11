import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import App from './containers/app';
// import docReady from 'doc-ready';
import configureStore from './store/configureStore';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// スマフォのタップイベントに利用
injectTapEventPlugin();
const store = configureStore();

import {deepOrange500} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('contents')
);
