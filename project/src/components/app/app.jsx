import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../main-page/main-page';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
