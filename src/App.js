import { createBrowserHistory } from 'history';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PlatformsPage from './pages/PlatformsPage';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
          <Route path="/" exact={true} component={PlatformsPage} />
      </Switch>
    </Router>
  );
}

export default App;
