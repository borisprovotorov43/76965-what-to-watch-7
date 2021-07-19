import { createSelector } from 'reselect';
import { DEFAULT_GENGE } from '../../const';
import { getFilmsByGenre } from '../../utils';

export const getFilms = (state) => state.filmsReducer.films;
export const getCurrentGenre = (state) => state.filmsReducer.currentGenre;

export const getFilmsByGenreSelector = createSelector(
  getFilms,
  getCurrentGenre,
  (films, currentGenre) => (currentGenre === DEFAULT_GENGE) ? films : getFilmsByGenre(films, currentGenre),
);
