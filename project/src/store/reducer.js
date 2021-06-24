import { ActionType } from './action';
import { FILM_GENRE } from './../const';
import { FILMS } from './../mocks/films';

const initialState = {
  filmsAll: FILMS,
  filterGenre: FILM_GENRE,
  filmsFiltered: FILMS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        filterGenre: action.payload,
      };
    case ActionType.FILTER_FILMS_BY_GENGRE:
      return {
        ...state,
        filmsFiltered: (action.payload === FILM_GENRE)
          ? FILMS
          : FILMS.filter((item) => item.genre === action.payload),
      };
    default:
      return state;
  }
};

export { reducer };
