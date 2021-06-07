import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

import PropTypes from 'prop-types';

function App({films, promo}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path={AppRoute.ROOT} exact>
          <MainPage
            films={films}
            promo={promo}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignInPage />
        </Route>
        <Route path={AppRoute.MY_LIST} exact>
          <MyListPage />
        </Route>
        <Route path={AppRoute.DEV_FILM} exact>
          <FilmPage />
        </Route>
        <Route path={AppRoute.DEV_ADD_REVIEW} exact>
          <AddReviewPage />
        </Route>
        <Route path={AppRoute.DEV_PLAYER} exact>
          <PlayerPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    date: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
