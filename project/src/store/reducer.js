import { ActionType } from './action';
import { DEFAULT_GENGE } from './../const';
import { FILMS } from './../mocks/films';

const initialState = {
  films: FILMS,
  currentGenre: DEFAULT_GENGE,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
