import { ActionType } from './action';
import { DEFAULT_GENGE, AUTHORIZATION_STATUS, FILMS_PER_PAGE } from './../const';
import camelize from 'camelize';

const initialState = {
  promoFilm: {},
  films: [],
  filmsPerPage: FILMS_PER_PAGE,
  similarFilms: [],
  currentGenre: DEFAULT_GENGE,
  authorizationStatus: AUTHORIZATION_STATUS.UNKNOWN,
  userData: {
    login: '',
    avatarUrl: '',
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
      };
    case ActionType.CHANGE_FILMS_PER_PAGE:
      return {
        ...state,
        filmsPerPage: state.filmsPerPage + FILMS_PER_PAGE,
      };
    case ActionType.RESET_FILMS_PER_PAGE:
      return {
        ...state,
        filmsPerPage: FILMS_PER_PAGE,
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        userData: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AUTHORIZATION_STATUS.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
