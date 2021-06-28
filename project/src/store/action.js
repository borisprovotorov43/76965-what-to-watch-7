export const ActionType = {
  CHANGE_GENRE: 'CHANGE_GENRE',
};

export const ActionCreator = {
  changeGenre: (action) => ({
    type: ActionType.CHANGE_GENRE,
    payload: action.payload,
  }),
};
