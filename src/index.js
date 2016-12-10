import React from 'react';
import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
import BookViewerContainer from './containers/BookViewerContainer';
// import reducer from './reducers';
//
// const store = createStore(reducer);

render(
  // <Provider store={store}>
  <BookViewerContainer />,
  // </Provider>,
  document.getElementById('contents'),
);
