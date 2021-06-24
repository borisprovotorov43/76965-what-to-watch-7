export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  FILTER_FILMS_BY_GENGRE: 'FILTER_FILMS_BY_GENGRE',
};

export const ActionCreator = {
  changeGenre: (action) => ({
    type: ActionType.CHANGE_GENRE,
    payload: action.payload,
  }),
  filmsFiltered: (action) => ({
    type: ActionType.FILTER_FILMS_BY_GENGRE,
    payload: action.payload,
  }),
};
