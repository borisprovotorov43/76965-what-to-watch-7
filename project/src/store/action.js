export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  LOAD_PROMO_FILMS: 'LOAD_PROMO_FILMS',
  LOAD_FILMS: 'LOAD_FILMS',
  LOAD_SIMILAR_FILMS: 'LOAD_SIMILAR_FILMS',
  LOAD_CURRENT_FILM: 'LOAD_CURRENT_FILM',
  LOAD_FILM_COMMENTS: 'LOAD_FILM_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
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

export function loadCurrentFilm (action) {
  return {
    type: ActionType.LOAD_CURRENT_FILM,
    payload: action.payload,
  };
}

export function loadFilmComments (action) {
  return {
    type: ActionType.LOAD_FILM_COMMENTS,
    payload: action.payload,
  };
}

export function addComment (action) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: action.payload,
  };
}

export function addCommentError (action) {
  return {
    type: ActionType.ADD_COMMENT_ERROR,
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
