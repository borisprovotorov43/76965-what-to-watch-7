import { ActionType } from './action';
import { DEFAULT_GENGE, AUTHORIZATION_STATUS } from './../const';
import camelize from 'camelize';

const initialState = {
  promoFilm: {},
  films: [],
  currentFilm: null,
  similarFilms: [],
  filmComments: {
    commentsData: [],
    errorCode: null,
  },
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
    case ActionType.LOAD_FILM_COMMENTS:
      return {
        ...state,
        filmComments: action.payload,
      };
    case ActionType.ADD_COMMENT:
      return {
        ...state,
        filmComments: action.payload,
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
