import { ActionType } from '../action';
import { AUTHORIZATION_STATUS } from '../../const';

const initialState = {
  authorizationStatus: AUTHORIZATION_STATUS.UNKNOWN,
  userData: {
    login: '',
    avatarUrl: '',
  },
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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

export { loginReducer };
