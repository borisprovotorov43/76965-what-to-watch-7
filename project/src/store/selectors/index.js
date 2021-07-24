import { createSelector } from 'reselect';
import { DEFAULT_GENRE } from '../../const';
import { getFilmsByGenre } from '../../utils';

export const getFilms = (state) => state.filmsReducer.films;
export const getCurrentGenre = (state) => state.filmsReducer.currentGenre;

export const getFilmsByGenreSelector = createSelector(
  getFilms,
  getCurrentGenre,
  (films, currentGenre) => (currentGenre === DEFAULT_GENRE) ? films : getFilmsByGenre(films, currentGenre),
);
