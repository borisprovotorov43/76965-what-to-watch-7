import { ActionType } from '../action';

const initialState = {
  message: '',
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_NOTIFICATION:
      return {
        ...state,
        message: action.payload,
      };
    case ActionType.RESET_NOTIFICATION:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export { notificationReducer };
