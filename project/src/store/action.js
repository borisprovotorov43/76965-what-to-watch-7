export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  LOAD_PROMO_FILMS: 'LOAD_PROMO_FILMS',
  LOAD_FILMS: 'LOAD_FILMS',
  LOAD_SIMILAR_FILMS: 'LOAD_SIMILAR_FILMS',
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

