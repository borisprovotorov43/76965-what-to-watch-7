export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  CHANGE_FILMS_PER_PAGE: 'CHANG_FILMS_PER_PAGE',
  RESET_FILMS_PER_PAGE: 'RESET_FILMS_PER_PAGE',
  LOAD_PROMO_FILMS: 'LOAD_PROMO_FILMS',
  LOAD_FILMS: 'LOAD_FILMS',
  LOAD_SIMILAR_FILMS: 'LOAD_SIMILAR_FILMS',
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  REQUIRED_AUTHORIZATION: 'REQUIRED_AUTHORIZATION',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

export function changeGenre (action) {
  return {
    type: ActionType.CHANGE_GENRE,
    payload: action.payload,
  };
}

export function loadPromoFilm (action) {
  return {
    type: ActionType.LOAD_PROMO_FILMS,
    payload: action.payload,
  };
}

export function loadFilms (action) {
  return {
    type: ActionType.LOAD_FILMS,
    payload: action.payload,
  };
}

export function loadSimilarFilms (action) {
  return {
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: action.payload,
  };
}

export function requireAuthorization (action) {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: action,
  };
}

export function login (action) {
  return {
    type: ActionType.LOGIN,
    payload: action,
  };
}

export function logout () {
  return {
    type: ActionType.LOGOUT,
  };
}

export function redirectToRoute (url) {
  return {
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  };
}
