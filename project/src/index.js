import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { MYLIST } from '../src/mocks/mylist';

import App from './components/app/app';
import { reducer } from './store/reducer';
import { fetchPromoFilm, fetchFilms } from './store/api-actions';
import { createAPI } from '../src/services/api';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

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
