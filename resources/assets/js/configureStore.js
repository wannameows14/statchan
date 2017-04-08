import * as redux from 'redux';
import thunk from 'redux-thunk';

import { chartDataReducer } from './reducers/chartDataReducer.jsx';
import { tableDataReducer } from './reducers/tableDataReducer.jsx';

export let configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    tableData: tableDataReducer,
    chartData: chartDataReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    // thunk middleware for async actions
    redux.applyMiddleware(thunk),
    // redux dev tools browser support
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
