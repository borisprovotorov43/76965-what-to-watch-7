import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getCurrentFilm } from '../../utils';
import MainPage from '../pages/main-page/main-page';
import SignInPage from '../pages/sign-in-page/sign-in-page';
import MyListPage from '../pages/my-list-page/my-list-page';
import FilmPage from '../pages/film-page/film-page';
import AddReviewPage from '../pages/add-review-page/add-review-page';
import PlayerPage from '../pages/player-page/player-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App({ promoFilm, films, mylist }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route  path={AppRoute.ROOT} exact>
          <MainPage />
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
          render={({ match: { params: { id } } }) => {
            const currentFilm = getCurrentFilm(films, id);
            return (
              <FilmPage
                currentFilm={currentFilm}
              />
            );
          }}
        />
        <Route
          path={AppRoute.DEV_ADD_REVIEW}
          exact
          render={({ match: { params: { id } } }) => {
            const currentFilm = getCurrentFilm(films, id);
            return (
              <AddReviewPage
                currentFilm={currentFilm}
              />
            );
          }}
        />
        <Route
          path={AppRoute.DEV_PLAYER}
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

const { string, number, shape, arrayOf, array } = PropTypes;

App.propTypes = {
  promoFilm: shape({
    name: string.isRequired,
    genre: string,
    date: string,
    backgroundImage: string.isRequired,
    posterImage: string.isRequired,
  }),
  films: arrayOf(
    shape({
      id: number.isRequired,
      name: string.isRequired,
      description: string.isRequired,
      previewImage: string.isRequired,
      backgroundImage: string.isRequired,
      posterImage: string.isRequired,
      released: number.isRequired,
      genre: string.isRequired,
      director: string.isRequired,
      rating: number.isRequired,
      scoresCount: number.isRequired,
      starring: array.isRequired,
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

const mapStateToProps = (state) => ({
  films: state.films,
});

export default connect(mapStateToProps, null)(App);
