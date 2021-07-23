import {
  loadFilms,
  loadFavoriteFilms,
  loadSimilarFilms,
  loadCurrentFilm,
  loadFilmComments,
  addComment,
  loadPromoFilm,
  requireAuthorization,
  redirectToRoute,
  login,
  logout
} from './action';

import { APP_ROUTES, API_ROUTES, AUTHORIZATION_STATUS } from '../const';
import { toast } from 'react-toastify';
import camelize from 'camelize';

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FILM_PROMO)
    .then(({ data }) => dispatch(loadPromoFilm({
      payload: data,
    })))
);

export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FILMS)
    .then(({ data }) => dispatch(loadFilms({
      payload: data,
    })))
);

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(API_ROUTES.FAVORITE)
    .then(({ data }) => {
      dispatch(loadFavoriteFilms({
        payload: data,
      }));
    })
);

export const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.FILMS}/${id}`)
    .then(({ data }) => dispatch(loadCurrentFilm({
      payload: data,
    })))
);

export const fetchCommentsFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.COMMENTS}/${id}`)
    .then(({ data }) => dispatch(loadFilmComments({
      commentsData: data,
    })))
    .catch(({ response }) => dispatch(addComment({
      errorCode: response.status,
    })))
);

export const fetchSimilarFilms = (id) => (dispatch, _getState, api) => (
  api.get(`${API_ROUTES.FILMS}/${id}${API_ROUTES.FILMS_SIMILAR}`)
    .then(({ data }) => dispatch(loadSimilarFilms({
      payload: data,
    })))
);

export const postComment = (id, comment) => (dispatch, _getState, api) => {
  api.post(`${API_ROUTES.COMMENTS}/${id}`, comment)
    .then(({ data }) =>  dispatch(addComment({
      commentsData: data,
    })))
    .then(() => dispatch(redirectToRoute(`${APP_ROUTES.FILMS}/${id}`)))
    .catch(({ response }) => dispatch(addComment({
      errorCode: response.status,
    })));
};

export const postFavoriteFilm = (id, status, isPromoFilm) => (dispatch, _getState, api) => (
  api.post(`${API_ROUTES.FAVORITE}/${id}/${status}`,
    null,
    {
      headers: {
        'x-token': localStorage.getItem('token'),
      },
    },
  )
    .then(({ data }) => {
      if (isPromoFilm) {
        dispatch(loadPromoFilm({
          payload: data,
        }));
      } else {
        dispatch(loadCurrentFilm({
          payload: data,
        }));
      }
    })
    .catch((err) => toast.error(err.message))
);

export const checkAuth = () => (dispatch, _getState, api) => {
  api.get(API_ROUTES.LOGIN)
    .then(({ data }) => {
      dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH));
      const userData = camelize(data);
      dispatch(login({ login: userData.email, avatarUrl: userData.avatarUrl }));
    })
    .catch((err) => toast.error(err.message));
};

export const loginUser = ({ email, password }) => (dispatch, _getState, api) => {
  api.post(API_ROUTES.LOGIN, { email, password })
    .then(({ data }) => {
      const userData = camelize(data);
      localStorage.setItem('token', userData.token);
      dispatch(login({ login: userData.email, avatarUrl: userData.avatarUrl }));
    })
    .then(() => dispatch(requireAuthorization(AUTHORIZATION_STATUS.AUTH)))
    .then(() => dispatch(redirectToRoute(APP_ROUTES.ROOT)))
    .catch(() => {});
};

export const logoutUser = () => (dispatch, _getState, api) => {
  api.delete(API_ROUTES.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logout()));
};
