import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router as BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { filmPropTypes } from '../../prop-types/film';
import { APP_ROUTES, AUTHORIZATION_STATUS } from '../../const';

import { getCurrentFilm, isCheckoutAuth } from '../../utils';

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

function App({ films, mylist, authorizationStatus, isDataLoaded }) {

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={APP_ROUTES.ROOT} exact>
          <MainPage />
        </Route>
        <Route path={APP_ROUTES.LOGIN} exact>
          <SignInPage authorizationStatus={authorizationStatus} />
        </Route>
        <PrivateRoute
          path={APP_ROUTES.MY_LIST}
          exact
          render={
            () => <MyListPage films={mylist} />
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
          render={({ match: { params: { id } } }) => {
            const currentFilm = getCurrentFilm(films, id);
            return (
              <PlayerPage
                currentFilm={currentFilm}
              />
            );
          }}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const { string, number, shape, arrayOf, oneOf, bool } = PropTypes;

App.propTypes = {
  films: arrayOf(filmPropTypes),
  mylist: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
    }),
  ).isRequired,
  authorizationStatus: oneOf(Object.values(AUTHORIZATION_STATUS)),
  isDataLoaded: bool.isRequired,
};

const mapStateToProps = ({ films, authorizationStatus }) => ({
  films: films,
  authorizationStatus: authorizationStatus,
  isDataLoaded: !(isCheckoutAuth(authorizationStatus) || films.length === 0),
});

export default connect(mapStateToProps, null)(App);
