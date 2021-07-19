import { createSelector } from 'reselect';
import { DEFAULT_GENGE } from '../../const';
import { getFilmsByGenre } from '../../utils';

export const getAuthorizationStatus = (state) => state.loginReducer.authorizationStatus;
export const getUserData = (state) => state.loginReducer.userData;
export const getReviews = (state) => state.reviewsReducer.filmComments;
export const getReviewsError = (state) => state.reviewsReducer.filmComments.errorCode;

export const getPromoFilm = (state) => state.filmsReducer.promoFilm;
export const getFilms = (state) => state.filmsReducer.films;
export const getSimilarFilms = (state) => state.filmsReducer.similarFilms;
export const getCurrentFilm = (state) => state.filmsReducer.currentFilm;
export const getCurrentGenre = (state) => state.filmsReducer.currentGenre;

export const getFilmsByGenreSelector = createSelector(
  getFilms,
  getCurrentGenre,
  (films, currentGenre) => (currentGenre === DEFAULT_GENGE) ? films : getFilmsByGenre(films, currentGenre),
);
