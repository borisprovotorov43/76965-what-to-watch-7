import { ActionType } from '../action';
import { DEFAULT_GENGE } from '../../const';
import camelize from 'camelize';

const initialState = {
  promoFilm: {},
  films: [],
  currentFilm: null,
  similarFilms: [],
  currentGenre: DEFAULT_GENGE,
};

const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: camelize(action.payload),
      };
    case ActionType.LOAD_PROMO_FILMS:
      return {
        ...state,
        promoFilm: camelize(action.payload),
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: camelize(action.payload),
      };
    case ActionType.LOAD_CURRENT_FILM:
      return {
        ...state,
        currentFilm: camelize(action.payload),
      };
    default:
      return state;
  }
};

export { filmsReducer };
