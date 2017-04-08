import React from 'react';
import ReactDOM from 'react-dom';
import Master from './components/Master.js';

var inner = document.createElement('div');
  inner.id = 'statchan';
  document.body.appendChild(inner);

ReactDOM.render(
  <Master />,
  document.getElementById('statchan')
);
