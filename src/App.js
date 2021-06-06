import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CustomerPage from './pages/CustomerPage';
import PlansPage from './pages/PlansPage';
import PlatformsPage from './pages/PlatformsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Redirect exact from="/" to="/plataformas" />
          <Route path="/plataformas" component={PlatformsPage} />
          <Route path="/planos" component={PlansPage} />
          <Route path="/informacoes-pessoais" component={CustomerPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
