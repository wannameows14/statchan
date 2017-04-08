import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import ImportPage from '../components/Import.jsx';
import Home from '../components/Home.jsx';
import ChartPage from '../components/Chart.jsx';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <Route path="import" component={ImportPage} />
      <IndexRoute component={ChartPage} />
    </Route>
  </Router>
);
