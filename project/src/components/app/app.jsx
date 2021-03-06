import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoutes, AuthorizationStatus } from '../../const';
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
import Notification from '../notification/notification';

function App({ authorizationStatus, isDataLoaded, notification }) {

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <>
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route
            path={AppRoutes.ROOT}
            exact
            component={MainPage}
          />
          <Route path={AppRoutes.LOGIN} exact>
            <SignInPage authorizationStatus={authorizationStatus} />
          </Route>
          <PrivateRoute
            path={AppRoutes.MY_LIST}
            exact
            render={
              () => <MyListPage />
            }
          >
          </PrivateRoute>
          <Route
            path={AppRoutes.DEV_FILM}
            exact
            component={FilmPage}
          />
          <PrivateRoute
            path={AppRoutes.DEV_ADD_REVIEW}
            exact
            render={
              () => <AddReviewPage />
            }
          >
          </PrivateRoute>
          <Route
            path={AppRoutes.DEV_PLAYER}
            exact
            component={PlayerPage}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      {notification !== '' && <Notification notification={notification} />}
    </>
  );
}

App.propTypes = {
  authorizationStatus: oneOf(Object.values(AuthorizationStatus)),
  isDataLoaded: bool.isRequired,
  notification: string.isRequired,
};

const mapStateToProps = (state) => {
  const isAuth =  state.loginReducer.authorizationStatus;
  const films = getFilmsByGenreSelector(state);
  const notification = state.notificationReducer.message;

  return {
    films: films,
    authorizationStatus: isAuth,
    isDataLoaded: !(isCheckoutAuth(isAuth) || films.length === 0),
    notification: notification,
  };
};

export default connect(mapStateToProps, null)(App);
