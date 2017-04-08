import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

let store = require('./configureStore').configure();
import Master from 'components/Master'

var inner = document.createElement('div');
inner.id = 'statchan';
document.body.appendChild(inner);

ReactDOM.render(
  <Provider store={store}>
    <Master />
  </Provider>,
  document.getElementById('statchan')
);
