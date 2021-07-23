import { ActionType } from '../action';

const initialState = {
  message: '',
};

const notifycationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_NOTIFYCATION:
      return {
        ...state,
        message: action.payload,
      };
    case ActionType.RESET_NOTIFYCATION:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export { notifycationReducer };
