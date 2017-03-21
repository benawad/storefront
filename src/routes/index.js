import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Home from './Home';

import { history } from '../store';


export default () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
