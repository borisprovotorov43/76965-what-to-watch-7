import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AUTHORIZATION_STATUS } from './const';

import { filmsReducer } from './store/reducers/films-reducer';
import { reviewsReducer } from './store/reducers/reviews-reducer';
import { loginReducer } from './store/reducers/login-reducer';

import { requireAuthorization } from './store/action';

import { createAPI } from '../src/services/api';
import { redirect } from './store/middlewares/redirect';

import { fetchPromoFilm, fetchFilms, checkAuth } from './store/api-actions';

import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AUTHORIZATION_STATUS.NO_AUTH)),
);

const store = createStore(
  combineReducers({
    filmsReducer,
    reviewsReducer,
    loginReducer,
  }),
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFilms());

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root'),
);
