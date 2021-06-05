import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

function App({films, promo}) {
  return <MainPage films={films} promo={promo} />;
}

App.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    date: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default App;
