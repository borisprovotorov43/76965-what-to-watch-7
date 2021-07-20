import { ActionType } from '../action';

const initialState = {
  filmComments: {
    commentsData: [],
    errorCode: null,
  },
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export { reviewsReducer };
