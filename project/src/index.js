import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import { FILMS } from '../src/mocks/films';
import { FILMS_SIMILLAR } from '../src/mocks/films-simillar';
import { MYLIST } from '../src/mocks/mylist';
import { PROMO_FILM } from '../src/mocks/promo-film';

ReactDOM.render(
  <React.StrictMode>
    <App
      films={FILMS}
      filmsSimillar={FILMS_SIMILLAR}
      mylist={MYLIST}
      promoFilm={PROMO_FILM}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);

