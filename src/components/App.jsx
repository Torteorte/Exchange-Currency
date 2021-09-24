import React from 'react';
import './App.scss';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '../common/Routes/Routes';
import DetailedConverter from './DetailedConverter/DetailedConverter';
import Head from './Head/Head.jsx';
import GeneralConverter from './GeneralConverter/GeneralConverter.jsx';

function App() {
  return (
    <div className="money-converter-container">
      <Head />
      <main className="mainContainer">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to={ROUTES.list} />
            </Route>
            <Route path={ROUTES.list}>
              <GeneralConverter />
            </Route>
            <Route path={ROUTES.detail}>
              <DetailedConverter />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
