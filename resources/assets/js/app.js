import React from 'react';
import ReactDOM from 'react-dom';

var inner = document.createElement('div');
  inner.id = 'statchan';
  document.body.appendChild(inner);

ReactDOM.render(
  <h1>Statchan</h1>,
  document.getElementById('statchan')
);
