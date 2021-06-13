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

function App({ promoFilm, films, mylist }) {
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
            const getCurrentFilm = films.filter((item) => (item.id === +id) && item);

            return (
              <FilmPage
                film={getCurrentFilm}
                params={params}
                filmsSimillar={films.slice(0, 4)}
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
            const getCurrentFilm = films.filter((item) => (item.id === +id) && item);

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
            const getCurrentFilm = films.filter((item) => (item.id === +id) && item);

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

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    date: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      starring: PropTypes.array.isRequired,
    }),
  ).isRequired,
  mylist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
