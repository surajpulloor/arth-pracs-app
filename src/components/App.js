import React from 'react';
import VisibleMainPage from '../containers/VisibleMainPage';
import VisiblePractise from '../containers/VisiblePractise';
import VisibleSummary from '../containers/VisibleSummary';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path="/" component={VisibleMainPage} exact />
        <Route path="/practise" component={VisiblePractise} />
        <Route path="/summary" component={VisibleSummary} />
      </Switch>
    </main>
  );
}

export default App;
