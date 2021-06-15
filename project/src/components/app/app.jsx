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

function App({ promoFilm, films, filmsSimillar, mylist }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path={AppRoute.ROOT} exact>
          <MainPage
            films={films}
            promoFilm={promoFilm}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <SignInPage />
        </Route>
        <Route path={AppRoute.MY_LIST} exact>
          <MyListPage films={mylist} />
        </Route>
        <Route
          path={AppRoute.DEV_FILM}
          exact
          render={({ match }) => {
            const { params } = match;
            const { id } = params;
            const getCurrentFilm = films.filter((item) => item.id === +id && item);

            return (
              <FilmPage
                film={getCurrentFilm}
                params={params}
                filmsSimillar={filmsSimillar}
              />
            );
          }}
        />
        <Route
          path={AppRoute.DEV_ADD_REVIEW}
          exact
          render={({ match }) => {
            const { params } = match;
            const { id } = params;
            const getCurrentFilm = films.filter((item) => item.id === +id && item);

            return (
              <AddReviewPage
                film={getCurrentFilm}
                params={params}
              />
            );
          }}
        />
        <Route
          path={AppRoute.DEV_PLAYER}
          exact
          render={({ match }) => {
            const { params } = match;
            const { id } = params;
            const getCurrentFilm = films.filter((item) => item.id === +id && item);

            return (
              <PlayerPage
                film={getCurrentFilm}
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

const { string, number, shape, arrayOf, array } = PropTypes;

App.propTypes = {
  promoFilm: shape({
    title: string.isRequired,
    genre: string,
    date: string,
  }),
  films: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      image: string.isRequired,
      background: string.isRequired,
      poster: string.isRequired,
      year: number.isRequired,
      genre: string.isRequired,
      director: string.isRequired,
      rating: number.isRequired,
      scoresCount: number.isRequired,
      starring: array.isRequired,
    }),
  ).isRequired,
  filmsSimillar: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
    }),
  ).isRequired,
  mylist: arrayOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      image: string.isRequired,
    }),
  ).isRequired,
};

export default App;
