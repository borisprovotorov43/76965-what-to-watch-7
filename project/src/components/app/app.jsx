import React from 'react';
import { bool, oneOf } from 'prop-types';
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../const';
import { isCheckoutAuth } from '../../utils';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import browserHistory from '../../browser-history';
import { getFilmsByGenreSelector } from '../../store/selectors';

function App({ authorizationStatus, isDataLoaded }) {

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          path={APP_ROUTES.ROOT}
          exact
          component={MainPage}
        />
        <Route path={APP_ROUTES.LOGIN} exact>
          <SignInPage authorizationStatus={authorizationStatus} />
        </Route>
        <PrivateRoute
          path={APP_ROUTES.MY_LIST}
          exact
          render={
            () => <MyListPage />
          }
        >
        </PrivateRoute>
        <Route
          path={APP_ROUTES.DEV_FILM}
          exact
          component={FilmPage}
        />
        <PrivateRoute
          path={APP_ROUTES.DEV_ADD_REVIEW}
          exact
          render={
            () => <AddReviewPage />
          }
        >
        </PrivateRoute>
        <Route
          path={APP_ROUTES.DEV_PLAYER}
          exact
          component={PlayerPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  authorizationStatus: oneOf(Object.values(AUTHORIZATION_STATUS)),
  isDataLoaded: bool.isRequired,
};

const mapStateToProps = (state) => {
  const isAuth =  state.loginReducer.authorizationStatus;
  const films = getFilmsByGenreSelector(state);

  return {
    films: films,
    authorizationStatus: isAuth,
    isDataLoaded: !(isCheckoutAuth(isAuth) || films.length === 0),
  };
};

export default connect(mapStateToProps, null)(App);
