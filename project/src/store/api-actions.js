import { loadFilms, loadSimilarFilms, loadPromoFilm } from './action';
import { API_ROUTES } from '../const';

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FILM_PROMO)
    .then(({data}) => dispatch(loadPromoFilm({
      payload: data,
    })))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FILMS)
    .then(({data}) => dispatch(loadFilms({
      payload: data,
    })))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.FILMS}/${id}${API_ROUTES.FILMS_SIMILAR}`)
    .then(({data}) => dispatch(loadSimilarFilms({
      payload: data,
    })))
);
