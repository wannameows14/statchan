import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

let store = require('./configureStore').configure();

var inner = document.createElement('div');
  inner.id = 'statchan';
  document.body.appendChild(inner);

ReactDOM.render(
  <Provider store={store}>
    <h1>Statchan</h1>
  </Provider>,
  document.getElementById('statchan')
);
