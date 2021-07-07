import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { MYLIST } from '../src/mocks/mylist';
import { AUTHORIZATION_STATUS } from './const';

import App from './components/app/app';
import { reducer } from './store/reducer';
import { requireAuthorization } from './store/action';

import { redirect } from './store/middlewares/redirect';
import { createAPI } from '../src/services/api';
import { fetchPromoFilm, fetchFilms, checkAuth } from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AUTHORIZATION_STATUS.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        mylist={MYLIST}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
