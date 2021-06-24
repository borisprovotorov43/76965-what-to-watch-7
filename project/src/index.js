import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app/app';

import { FILMS } from '../src/mocks/films';
import { SIMILLAR_FILMS } from '../src/mocks/films-simillar';
import { MYLIST } from '../src/mocks/mylist';
import { PROMO_FILM } from '../src/mocks/promo-film';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films={FILMS}
        similarFilms={SIMILLAR_FILMS}
        mylist={MYLIST}
        promoFilm={PROMO_FILM}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
