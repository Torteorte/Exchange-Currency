import { StyledContainer, StyledMainContainer } from './styled';
import './App.scss';
import React from 'react';
import { ROUTES } from '../common/constants/routes';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Head from './Head/Head.jsx';
import { GeneralConverter } from './GeneralConverter';
import { DetailedConverter } from './DetailedConverter/index';

export function App() {
  return (
    <StyledContainer>
      <Head />
      <StyledMainContainer>
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
      </StyledMainContainer>
    </StyledContainer>
  );
}
