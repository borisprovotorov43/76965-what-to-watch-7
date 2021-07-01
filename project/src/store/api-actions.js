import { loadFilms, loadSimilarFilms, loadPromoFilm } from './action';
import { AppRoute } from '../const';

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FILM_PROMO)
    .then(({data}) => dispatch(loadPromoFilm({
      payload: data,
    })))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FILMS)
    .then(({data}) => dispatch(loadFilms({
      payload: data,
    })))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${AppRoute.FILMS}/${id}${AppRoute.FILMS_SIMILAR}`)
    .then(({data}) => dispatch(loadSimilarFilms({
      payload: data,
    })))
);
