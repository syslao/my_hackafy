import React from 'react';
import { Router, Route, IndexRoute ,browserHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import MainLayout from '../components/MainLayout';
import Home from '../components/Home';
import Profile from '../components/Profile';


const createRoutes = (store) => {
  const history = syncHistoryWithStore(browserHistory, store)
  return (
    <Router history={history}>
        <Route path="/" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route path="/profile" component={Profile} />
        </Route>
    </Router>
  );
};

export default createRoutes;
