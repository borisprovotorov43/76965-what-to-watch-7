import React from 'react';
import { arrayOf } from 'prop-types';
import { connect } from 'react-redux';
import { filmPropTypes } from '../../../prop-types/film';
import { promofilmPropTypes } from '../../../prop-types/promoFilm';

import PageFooter from '../../page-footer/page-footer';
import FilmCard from '../../film-card/film-card';
import FilmList from '../../film-list/film-list';
import GenreList from '../../genre-list/genre-list';

import { getFilmsByGenre } from '../../../utils';
import { DEFAULT_GENGE } from '../../../const';

function MainPage({ films, promoFilm }) {
  return (
    <>
      <FilmCard promoFilm={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList defaultGenge={DEFAULT_GENGE} />
          <FilmList films={films} />
        </section>
        <PageFooter className="catalog__button" />
      </div>
    </>
  );
}

const mapStateToProps = ({ films, currentGenre, promoFilm }) => ({
  promoFilm: promoFilm,
  films: (currentGenre === DEFAULT_GENGE) ? films : getFilmsByGenre(films, currentGenre),
});

MainPage.propTypes = {
  promoFilm: promofilmPropTypes,
  films: arrayOf(filmPropTypes),
};

export { MainPage };
export default connect(mapStateToProps)(MainPage);
